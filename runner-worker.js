/* Python kører i en separat Web Worker via Pyodide (WebAssembly).
   En lang eller uendelig løkke stoppes fra hovedsiden ved at afslutte workeren. */
"use strict";
const PYODIDE_URL = "https://cdn.jsdelivr.net/pyodide/v0.27.7/full/";
let py = null;
let isBusy = false;

(async function boot() {
  try {
    importScripts(PYODIDE_URL + "pyodide.js");
    py = await loadPyodide({ indexURL: PYODIDE_URL });
    self.postMessage({ type: "ready" });
  } catch (error) {
    self.postMessage({ type: "boot-error", message: String(error) });
  }
})();

self.onmessage = async function (event) {
  const d = event.data || {};
  if (d.type !== "run" || !py || isBusy) return;
  isBusy = true;
  try {
    py.globals.set("__user_code", String(d.code || ""));
    py.globals.set("__validator", String(d.validator || ""));
    const resultJSON = await py.runPythonAsync(
      'import io, contextlib, traceback, json\n' +
      '__buffer = io.StringIO()\n' +
      '__error = ""\n' +
      '__passed = None\n' +
      '__diagnostic = ""\n' +
      '__namespace = {"__name__": "__main__"}\n' +
      'try:\n' +
      '    with contextlib.redirect_stdout(__buffer):\n' +
      '        exec(compile(__user_code, "<din kode>", "exec"), __namespace)\n' +
      '    __namespace["__stdout"] = __buffer.getvalue()\n' +
      '    __namespace["__source"] = __user_code\n' +
      '    if __validator:\n' +
      '        try:\n' +
      '            __passed = bool(eval(__validator, __namespace))\n' +
      '        except Exception as check_error:\n' +
      '            __passed = False\n' +
      '            __diagnostic = str(check_error)\n' +
      'except Exception as program_error:\n' +
      '    __error = "".join(traceback.format_exception_only(type(program_error), program_error)).strip()\n' +
      'json.dumps({"output": __buffer.getvalue(), "error": __error, "passed": __passed, "diagnostic": __diagnostic}, ensure_ascii=False)\n'
    );
    self.postMessage({ type: "result", ...JSON.parse(resultJSON) });
  } catch (error) {
    self.postMessage({ type: "result", output: "", error: String(error), passed: false });
  } finally {
    isBusy = false;
  }
};