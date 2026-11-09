/* DictLab: undervisning, Python-kodeopgaver og evaluering */
(function () {
  "use strict";

  const KEY = "dictlab-progress-v1";
  const $ = (id) => document.getElementById(id);
  const lessons = [
    {
      title: "Hvad er en dictionary?",
      time: "3 min læsning",
      prose: [
        "En <strong>dictionary</strong> samler oplysninger, som hører sammen. Hver oplysning består af en <strong>nøgle</strong> (key) og en tilhørende <strong>værdi</strong> (value).",
        "Forestil dig, at du skal gemme oplysninger om en elev. I stedet for at oprette tre separate variabler kan du samle dem i én dictionary. Python bruger <code>{ }</code> omkring oplysningerne og <code>:</code> mellem nøgle og værdi."
      ],
      code: 'elev = {\n    "navn": "Emma",\n    "alder": 12,\n    "klasse": "6.A"\n}\n\nprint(elev)',
      point: 'Tænk på en dictionary som en opslagstavle: Nøglen fortæller, hvilken oplysning du leder efter, og værdien er selve oplysningen.'
    },
    {
      title: "Find en værdi med dens nøgle",
      time: "3 min læsning",
      prose: [
        'Når du vil hente en oplysning, skriver du nøglen i <strong>kantede parenteser</strong> efter dictionaryens navn. Udtrykket <code>elev["navn"]</code> giver dig altså værdien <code>"Emma"</code>.',
        'Nøglen skal skrives præcis, som den er defineret. Skriver du en nøgle, der ikke findes, får du typisk fejlen <code>KeyError</code>. Senere lærer du en metode, der kan håndtere manglende nøgler.'
      ],
      code: 'elev = {"navn": "Emma", "alder": 12}\n\nprint(elev["navn"])\nprint(elev["alder"])',
      point: 'Du slår en værdi op med dictionary["nøgle"]. Kantede parenteser betyder: Find værdien, der hører til denne nøgle.'
    },
    {
      title: "Ret og tilføj oplysninger",
      time: "3 min læsning",
      prose: [
        'En dictionary er <strong>ændringsbar</strong>. Du kan ændre en eksisterende værdi ved at tildele en ny værdi til dens nøgle.',
        'Du kan også tilføje en helt ny oplysning. Bruger du en nøgle, der ikke allerede findes, opretter Python et nyt nøgle-værdi-par.'
      ],
      code: 'elev = {"navn": "Emma", "alder": 12}\n\nelev["alder"] = 13     # Ændr en værdi\nelev["fag"] = "Python"  # Tilføj ny nøgle\n\nprint(elev)',
      point: 'Samme syntaks bruges til at ændre og tilføje: dictionary["nøgle"] = værdi. En eksisterende nøgle opdateres; en ny nøgle oprettes.'
    },
    {
      title: "De tre metoder, du ofte bruger",
      time: "4 min læsning",
      prose: [
        'Python har nyttige metoder, når du arbejder med dictionaries. <code>.get()</code> henter en værdi, men kan give en standardværdi, hvis nøglen mangler. Det er en måde at undgå <code>KeyError</code> på.',
        '<code>.keys()</code> giver dig nøglerne, <code>.values()</code> giver værdierne, og <code>.items()</code> giver både nøgle og værdi. De to sidste bruger du blandt andet, når du vil tælle eller gennemgå oplysninger.'
      ],
      code: 'elev = {"navn": "Emma", "alder": 12}\n\nprint(elev.get("by", "Ukendt"))\nprint(list(elev.keys()))\nprint(list(elev.values()))',
      point: '.get("nøgle", standardværdi) er nyttig, hvis en oplysning kan mangle. .keys(), .values() og .items() giver adgang til samlingens indhold.'
    },
    {
      title: "Brug en løkke, og byg videre",
      time: "4 min læsning",
      prose: [
        'Når du har mange oplysninger, er det upraktisk at skrive <code>print()</code> for hver enkelt. En <strong>for-løkke</strong> kan gennemgå hele dictionaryen. Med <code>.items()</code> får du både nøgle og værdi i hver omgang.',
        'En værdi kan også selv være en dictionary. Det kaldes en <strong>indlejret dictionary</strong>. Du henter de inderste oplysninger ved at bruge to opslag efter hinanden.'
      ],
      code: 'elever = {\n    "Emma": {"alder": 12, "klasse": "6.A"},\n    "Noah": {"alder": 13, "klasse": "7.B"}\n}\n\nfor navn, data in elever.items():\n    print(navn, "går i", data["klasse"])',
      point: 'Med for nøgle, værdi in dictionary.items() kan du gennemgå oplysningerne. Indlejrede dictionaries bruges, når data har flere niveauer.'
    }
  ];

  const tasks = [
    {
      title: "Byg din første dictionary",
      level: "Begynder",
      description: 'Du vil gemme oplysninger om en deltager på et Python-kursus. Opret en dictionary med navnet <code>person</code>, som indeholder navnet Asta og alderen 29.',
      goal: 'Opret nøglerne "navn" og "alder" med værdierne "Asta" og 29.',
      hint: 'Start med person = { ... }. Tekst skal stå i anførselstegn, men tal skal ikke.',
      starter: '# Opgave 1: Opret en dictionary\nperson = {\n    # Skriv dine nøgler og værdier her\n}\n\nprint(person)',
      check: 'isinstance(person, dict) and person.get("navn") == "Asta" and person.get("alder") == 29',
      success: 'Flot. Du har oprettet en dictionary med både en tekstværdi og en talværdi.',
      error: 'Tjek, at variablen hedder person, at nøglerne er "navn" og "alder", og at værdierne er "Asta" og 29.'
    },
    {
      title: "Hent en bestemt værdi",
      level: "Begynder",
      description: 'En dictionary indeholder oplysninger om et kursus. Få programmet til at udskrive byen, hvor kurset bliver afholdt.',
      goal: 'Brug nøglen "by", så programmet udskriver Aarhus.',
      hint: 'Skriv dictionaryens navn efterfulgt af ["by"] inde i print(...).',
      starter: 'hold = {"fag": "Python", "by": "Aarhus", "pladser": 16}\n\n# Udskriv byen her\n',
      check: 'isinstance(hold, dict) and hold.get("by") == "Aarhus" and "Aarhus" in __stdout',
      success: 'Præcis. Du har brugt en nøgle til at hente den rigtige værdi.',
      error: 'Din kode skal udskrive Aarhus. Prøv print(hold["by"]).'
    },
    {
      title: "Ændr en eksisterende værdi",
      level: "Begynder",
      description: 'Kurset havde først 12 deltagere, men nu er der tilmeldt 15. Opdater dictionaryen, uden at oprette den på ny.',
      goal: 'Få nøglen "deltagere" til at indeholde tallet 15.',
      hint: 'Brug kursus["deltagere"] = ... på en ny linje.',
      starter: 'kursus = {"navn": "Python", "deltagere": 12}\n\n# Ret antallet til 15 her\n\nprint(kursus)',
      check: 'isinstance(kursus, dict) and kursus.get("deltagere") == 15 and kursus.get("navn") == "Python"',
      success: 'Korrekt. Du ændrede værdien under en eksisterende nøgle.',
      error: 'Du skal opdatere kursus["deltagere"], så værdien bliver tallet 15.'
    },
    {
      title: "Tilføj en ny oplysning",
      level: "Begynder",
      description: 'Nu har kurset også fået tildelt et lokale. Tilføj denne oplysning til den eksisterende dictionary.',
      goal: 'Tilføj nøglen "lokale" med værdien "B204". Behold de øvrige oplysninger.',
      hint: 'Du behøver ikke skrive hele dictionaryen igen. Tildel blot en værdi til en ny nøgle.',
      starter: 'kursus = {"navn": "Python", "deltagere": 15}\n\n# Tilføj lokale her\n\nprint(kursus)',
      check: 'isinstance(kursus, dict) and kursus.get("navn") == "Python" and kursus.get("deltagere") == 15 and kursus.get("lokale") == "B204"',
      success: 'Godt. Python tilføjede den nye nøgle, uden at de gamle forsvandt.',
      error: 'Der mangler stadig et nøgle-værdi-par: "lokale" skal være "B204".'
    },
    {
      title: "Undgå fejl med .get()",
      level: "Øvet",
      description: 'Din dictionary indeholder temperaturmålinger for mandag og tirsdag. Onsdag er endnu ikke registreret. Hent onsdag med <code>.get()</code>, så programmet ikke stopper med en KeyError.',
      goal: 'Udskriv præcis teksten Ingen måling, når nøglen "onsdag" mangler.',
      hint: 'Metoden .get() kan få to argumenter: nøglen og det, der skal returneres, hvis nøglen mangler.',
      starter: 'temperatur = {"mandag": 18, "tirsdag": 20}\n\n# Brug .get() til at hente onsdag\n',
      check: 'isinstance(temperatur, dict) and "onsdag" not in temperatur and "Ingen måling" in __stdout and ".get(" in __source',
      success: 'Fint. .get() gav en standardværdi i stedet for at udløse en fejl.',
      error: 'Brug temperatur.get("onsdag", "Ingen måling") inde i print(...).',
    },
    {
      title: "Gennemgå med en for-løkke",
      level: "Øvet",
      description: 'Du har tre fag og deres karakterer. Brug en <code>for</code>-løkke og <code>.items()</code> til at vise både fag og karakter for hver post.',
      goal: 'Terminalen skal indeholde dansk 10, matematik 12 og engelsk 7 (der må gerne stå ekstra tegn mellem fag og karakter).',
      hint: 'Prøv: for fag, karakter in karakterer.items(): og indryk print(fag, karakter) fire mellemrum.',
      starter: 'karakterer = {"dansk": 10, "matematik": 12, "engelsk": 7}\n\n# Skriv din for-løkke her\n',
      check: 'isinstance(karakterer, dict) and all(str(fag) in __stdout and str(tal) in __stdout for fag, tal in karakterer.items()) and len(karakterer) == 3 and "for " in __source and ".items()" in __source',
      success: 'Sådan. Du har brugt en løkke til at behandle flere nøgle-værdi-par.',
      error: 'Tjek, at du bruger .items(), en indrykket print-linje, og at alle tre fag og karakterer bliver vist.'
    },
    {
      title: "Læg værdierne sammen",
      level: "Øvet",
      description: 'Et lille lager har forskellige kontorartikler. Find det samlede antal ved at bruge dictionaryens værdier.',
      goal: 'Gem summen i variablen antal_i_alt, og udskriv resultatet 25.',
      hint: 'sum(...) lægger tal sammen. .values() giver dig alle værdierne i en dictionary.',
      starter: 'lager = {"blyanter": 12, "hæfter": 8, "viskelædere": 5}\n\n# Beregn det samlede antal her\n\n# Udskriv antal_i_alt her\n',
      check: 'isinstance(lager, dict) and antal_i_alt == 25 and "25" in __stdout and ".values()" in __source',
      success: 'Du brugte .values() og sum() til at regne med oplysningerne i en dictionary.',
      error: 'Beregn antal_i_alt med sum(lager.values()), og udskriv derefter variablen.'
    },
    {
      title: "Dictionaries inde i dictionaries",
      level: "Udfordring",
      description: 'Du arbejder med to elever. Hver elev har sin egen dictionary med alder og klasse. Find Emmas klasse uden at skrive den direkte som tekst.',
      goal: 'Udskriv 6.A ved at slå op i den indlejrede dictionary.',
      hint: 'Start med elever["Emma"] for at hente hendes dictionary. Tilføj derefter endnu et opslag på "klasse".',
      starter: 'elever = {\n    "Emma": {"alder": 12, "klasse": "6.A"},\n    "Noah": {"alder": 13, "klasse": "7.B"}\n}\n\n# Find og udskriv Emmas klasse her\n',
      check: 'isinstance(elever, dict) and isinstance(elever.get("Emma"), dict) and elever["Emma"].get("klasse") == "6.A" and "6.A" in __stdout and \'["Emma"]["klasse"]\' in __source.replace(" ", "")',
      success: 'Du fandt vej gennem to niveauer af dictionaries. Det er en vigtig teknik, når data bliver mere komplekse.',
      error: 'Skriv print(elever["Emma"]["klasse"]) for at hente den indlejrede værdi.'
    }
  ];

  const quiz = [
    {
      question: "Hvad beskriver bedst en dictionary i Python?",
      options: ["En samling af nøgle-værdi-par", "En liste, som kun indeholder tal", "En løkke, der gentager kode", "En funktion til at udskrive tekst"],
      correct: 0,
      why: "En dictionary knytter hver nøgle til en værdi, så oplysninger kan findes ved hjælp af nøglen."
    },
    {
      question: "Hvilken kode opretter en dictionary med nøglen \"alder\" og værdien 12?",
      options: ['elev = ["alder": 12]', 'elev = {"alder": 12}', 'elev = ("alder" = 12)', 'elev = {"alder", 12}'],
      correct: 1,
      why: 'Dictionaries oprettes med { } og kolon mellem nøgle og værdi.'
    },
    {
      question: "Hvad udskriver programmet?",
      code: 'elev = {"navn": "Emma", "alder": 12}\nprint(elev["navn"])',
      options: ["navn", "12", "Emma", "elev"],
      correct: 2,
      why: 'elev["navn"] slår nøglen "navn" op og returnerer værdien "Emma".'
    },
    {
      question: "Hvordan ændrer du værdien af \"alder\" til 13?",
      code: 'elev = {"navn": "Emma", "alder": 12}',
      options: ['elev["alder"] = 13', 'elev["alder"] == 13', 'elev.add("alder", 13)', 'elev = ["alder", 13]'],
      correct: 0,
      why: 'Et enkelt = tildeler en ny værdi til nøglen. == bruges til sammenligning.'
    },
    {
      question: "Hvad sker der, når en ny nøgle får tildelt en værdi?",
      code: 'elev = {"navn": "Emma"}\nelev["klasse"] = "6.A"',
      options: ['Python sletter nøglen "navn"', 'Der opstår en KeyError', 'Alle værdier bliver til tekst', 'Dictionaryen får en ny nøgle "klasse"'],
      correct: 3,
      why: 'Når "klasse" ikke findes i forvejen, oprettes den som en ny nøgle med værdien "6.A".'
    },
    {
      question: "Hvad returnerer denne kode?",
      code: 'elev = {"navn": "Emma"}\nprint(elev.get("by", "Ukendt"))',
      options: ["None", "Ukendt", "by", "KeyError"],
      correct: 1,
      why: '.get() giver standardværdien "Ukendt", fordi nøglen "by" mangler.'
    },
    {
      question: "Hvilken metode giver adgang til nøglerne i en dictionary?",
      options: [".values()", ".items()", ".keys()", ".append()"],
      correct: 2,
      why: '.keys() giver et view over nøglerne. .values() giver værdierne, og .items() giver parrene.'
    },
    {
      question: "Hvad bliver resultatet af denne kode?",
      code: 'lager = {"blyanter": 3, "hæfter": 5}\nprint(sum(lager.values()))',
      options: ["8", "2", "35", "KeyError"],
      correct: 0,
      why: '.values() giver tallene 3 og 5. sum() lægger dem sammen til 8.'
    },
    {
      question: "Hvilken syntaks gennemgår både nøgler og værdier?",
      options: ['for v in data.keys():', 'for k in data.values():', 'for k, v in data.items():', 'for k, v in data.append():'],
      correct: 2,
      why: '.items() giver hvert nøgle-værdi-par, som kan pakkes ud i to variabler i en for-løkke.'
    },
    {
      question: "Hvad udskriver programmet?",
      code: 'elever = {"Emma": {"alder": 12, "klasse": "6.A"}}\nprint(elever["Emma"]["klasse"])',
      options: ["Emma", "12", "klasse", "6.A"],
      correct: 3,
      why: 'Det første opslag henter Emmas dictionary. Det andet opslag henter værdien under "klasse".'
    }
  ];

  let stored = {};
  try { stored = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (_) { stored = {}; }
  let done = Array.isArray(stored.done) ? stored.done.filter(x => Number.isInteger(x) && x >= 0 && x < tasks.length) : [];
  let drafts = stored.drafts && typeof stored.drafts === "object" ? stored.drafts : {};
  let lessonIndex = 0, taskIndex = 0;
  let quizIndex = 0, quizAnswers = new Array(quiz.length).fill(null);
  let worker = null, engineReady = false, pending = null, busy = false, runTimer = null;

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify({ done: done, drafts: drafts })); } catch (_) { /* browser may block storage */ }
  }
  function updateProgress() {
    const n = new Set(done).size;
    $("task-total-label").textContent = n + " / " + tasks.length + " løst";
    $("header-progress-value").textContent = n + "/" + tasks.length;
    $("header-progress-fill").style.width = (100*n/tasks.length) + "%";
    $("task-progress-fill").style.width = (100*n/tasks.length) + "%";
  }
  function renderLessons() {
    const root = $("lesson-list");
    root.innerHTML = "";
    lessons.forEach(function(lesson, idx) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "lesson-link" + (idx === lessonIndex ? " active" : "");
      b.setAttribute("aria-current", idx === lessonIndex ? "step" : "false");
      b.innerHTML = '<span class="lesson-index">' + String(idx+1).padStart(2, "0") + '</span><span>' + lesson.title + '</span>';
      b.addEventListener("click", function() { lessonIndex = idx; renderLessons(); });
      root.appendChild(b);
    });
    const l = lessons[lessonIndex];
    $("lesson-counter").textContent = "LEKTION " + String(lessonIndex+1).padStart(2, "0") + " / " + String(lessons.length).padStart(2, "0");
    $("lesson-time").textContent = l.time;
    $("lesson-title").textContent = l.title;
    $("lesson-prose").innerHTML = l.prose.map(p => "<p>" + p + "</p>").join("");
    $("lesson-code").textContent = l.code;
    $("lesson-keypoint").textContent = l.point;
    $("example-feedback").hidden = true;
    $("prev-lesson").disabled = lessonIndex === 0;
    $("next-lesson").textContent = lessonIndex === lessons.length - 1 ? "Gå til træning →" : "Næste lektion →";
  }
  function renderTaskMenu() {
    const root = $("task-list");
    root.innerHTML = "";
    tasks.forEach(function(t, idx) {
      const isDone = done.includes(idx);
      const b = document.createElement("button");
      b.type = "button";
      b.className = "task-link" + (idx === taskIndex ? " active" : "") + (isDone ? " done" : "");
      b.setAttribute("aria-current", idx === taskIndex ? "step" : "false");
      b.innerHTML = '<span class="task-index">' + (isDone ? "✓" : idx+1) + '</span><span><strong>' + t.title + '</strong><small>' + (isDone ? "Løst" : t.level) + '</small></span>';
      b.addEventListener("click", function() { setTask(idx); });
      root.appendChild(b);
    });
    updateProgress();
  }
  function setTask(idx) {
    if (busy) return;
    taskIndex = idx;
    const t = tasks[idx];
    $("task-number").textContent = "OPGAVE " + String(idx+1).padStart(2,"0") + " / 08";
    $("task-title").textContent = t.title;
    $("task-description").innerHTML = t.description;
    $("task-goal").textContent = t.goal;
    $("task-hint").textContent = t.hint;
    $("task-hint").hidden = true;
    $("hint-toggle").setAttribute("aria-expanded", "false");
    const badge = $("task-difficulty");
    badge.textContent = t.level;
    badge.className = "difficulty" + (t.level === "Øvet" ? " medium" : t.level === "Udfordring" ? " advanced" : "");
    $("code-editor").value = typeof drafts[idx] === "string" ? drafts[idx] : t.starter;
    updateLineCount();
    $("check-feedback").hidden = true;
    $("check-feedback").className = "check-feedback";
    $("code-output").textContent = "Din udskrift vises her, når du kører koden.";
    $("code-output").className = "";
    $("prev-task").disabled = idx === 0;
    $("next-task").textContent = idx === tasks.length-1 ? "Gå til quiz →" : "Næste opgave →";
    renderTaskMenu();
  }
  function updateLineCount() {
    const count = $("code-editor").value.split("\n").length;
    $("editor-lines").textContent = count + (count === 1 ? " linje" : " linjer");
  }
  function showOutput(message, isError) {
    $("code-output").textContent = message || "(Programmet udskrev ikke noget. Du kan stadig tjekke din løsning.)";
    $("code-output").className = isError ? "terminal-error" : "";
  }
  function setEngineStatus(textValue, available) {
    $("engine-status").textContent = textValue;
    ["run-code", "check-code", "run-example"].forEach(function(id) { $(id).disabled = !available || busy; });
  }
  function startWorker() {
    engineReady = false;
    setEngineStatus("Indlæser Python i browseren …", false);
    try {
      worker = new Worker("./runner-worker.js");
    } catch (_) {
      setEngineStatus("Python kan ikke startes i denne browser", false);
      return;
    }
    worker.onmessage = function(event) {
      const d = event.data || {};
      if (d.type === "ready") {
        engineReady = true;
        setEngineStatus("Python er klar ✓", true);
      } else if (d.type === "boot-error") {
        engineReady = false;
        setEngineStatus("Python kunne ikke indlæses. Kontrollér internetforbindelsen og genindlæs siden.", false);
      } else if (d.type === "result") {
        clearTimeout(runTimer);
        const p = pending;
        pending = null; busy = false;
        setEngineStatus("Python er klar ✓", true);
        if (!p) return;
        if (p.kind === "example") {
          const element = $("example-feedback");
          element.hidden = false;
          element.textContent = d.error ? d.error : "Output:\n" + (d.output || "(Ingen udskrift)");
          return;
        }
        showOutput(d.error || d.output, !!d.error);
        if (p.kind === "check") {
          const el = $("check-feedback");
          el.hidden = false;
          if (d.error) {
            el.className = "check-feedback error";
            el.textContent = "Python fandt en fejl. Læs terminalen, og prøv igen.";
          } else if (d.passed) {
            el.className = "check-feedback success";
            el.textContent = "✓ LØST! " + tasks[p.task].success;
            if (!done.includes(p.task)) done.push(p.task);
            save();
            renderTaskMenu();
          } else {
            el.className = "check-feedback error";
            el.textContent = "Ikke helt endnu. " + tasks[p.task].error + (d.diagnostic ? " (" + d.diagnostic + ")" : "");
          }
        }
      }
    };
    worker.onerror = function() {
      clearTimeout(runTimer);
      busy = false; pending = null; engineReady = false;
      setEngineStatus("Python kunne ikke startes. Genindlæs siden.", false);
    };
  }
  function runPython(kind, code, validator) {
    if (!engineReady || busy || !worker) return;
    busy = true;
    pending = { kind: kind, task: taskIndex };
    setEngineStatus("Kører kode …", true);
    if (kind === "check") $("check-feedback").hidden = true;
    if (kind === "example") { $("example-feedback").hidden = false; $("example-feedback").textContent = "Kører eksemplet …"; }
    else showOutput("Kører din kode …", false);
    worker.postMessage({type:"run", code:code, validator:validator || ""});
    runTimer = setTimeout(function () {
      if (!busy) return;
      worker.terminate();
      worker = null; busy = false; pending = null;
      showOutput("Koden blev stoppet efter 12 sekunder. Kontrollér, at du ikke har lavet en uendelig løkke.", true);
      $("example-feedback").textContent = "Koden tog for lang tid og blev stoppet.";
      startWorker();
    }, 12000);
  }

  function renderQuiz() {
    const q = quiz[quizIndex];
    const count = quizAnswers.filter(v => v !== null).length;
    $("quiz-step").textContent = "SPØRGSMÅL " + (quizIndex+1) + " AF " + quiz.length;
    $("quiz-progress-text").textContent = Math.round(100*count/quiz.length) + " % besvaret";
    $("quiz-progress-fill").style.width = (100*count/quiz.length) + "%";
    $("quiz-question").textContent = q.question;
    $("quiz-code").hidden = !q.code;
    if (q.code) $("quiz-code").textContent = q.code;
    const root = $("quiz-options");
    root.innerHTML = "";
    q.options.forEach(function(option, idx) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "quiz-option" + (quizAnswers[quizIndex] === idx ? " selected" : "");
      b.setAttribute("role", "radio");
      b.setAttribute("aria-checked", String(quizAnswers[quizIndex] === idx));
      const letter = document.createElement("span");
      letter.className = "option-letter"; letter.textContent = "ABCD"[idx];
      const label = document.createElement("span"); label.textContent = option;
      b.appendChild(letter); b.appendChild(label);
      b.addEventListener("click", function () {
        quizAnswers[quizIndex] = idx;
        renderQuiz();
      });
      root.appendChild(b);
    });
    $("quiz-prev").disabled = quizIndex === 0;
    $("quiz-next").disabled = quizAnswers[quizIndex] === null;
    $("quiz-next").textContent = quizIndex === quiz.length-1 ? "Se mit resultat →" : "Næste spørgsmål →";
  }
  function showResult() {
    $("quiz-active").hidden = true;
    $("quiz-result").hidden = false;
    const score = quiz.reduce((n,q,i) => n + (quizAnswers[i] === q.correct ? 1 : 0),0);
    $("quiz-score").textContent = score + "/" + quiz.length;
    const title = score >= 9 ? "Du har godt styr på dictionaries!" : score >= 6 ? "Du er godt på vej." : "Der er lidt mere at øve.";
    const detail = score >= 9
      ? "Du kan de vigtigste begreber og kan læse almindelig dictionary-kode. Prøv gerne at skrive dine egne små programmer."
      : score >= 6
      ? "Du har fat i grundideen. Gennemgå især forklaringerne til de spørgsmål, du missede, og prøv de tilsvarende kodeopgaver."
      : "Gå tilbage til lektionerne, og arbejd dig gennem kodeopgaverne igen. Det gør en forskel at skrive koden selv.";
    $("quiz-summary-title").textContent = title;
    $("quiz-summary-text").textContent = detail;
    const root = $("quiz-review"); root.innerHTML = "";
    quiz.forEach(function(q,i) {
      const good = quizAnswers[i] === q.correct;
      const el = document.createElement("div");
      el.className = "review-item " + (good ? "correct" : "wrong");
      const heading = document.createElement("div");
      heading.className = "review-question";
      const mark = document.createElement("span"); mark.className = "review-mark"; mark.textContent = good ? "✓" : "↻";
      const qtext = document.createElement("span"); qtext.textContent = (i+1) + ". " + q.question;
      heading.appendChild(mark); heading.appendChild(qtext);
      const yours = document.createElement("p"); yours.className = "review-answer";
      yours.textContent = "Dit svar: " + q.options[quizAnswers[i]] + (good ? " · Rigtigt" : " · Rigtigt svar: " + q.options[q.correct]);
      const expl = document.createElement("p"); expl.textContent = q.why;
      el.appendChild(heading); el.appendChild(yours); el.appendChild(expl);
      root.appendChild(el);
    });
  }
  function resetQuiz() {
    quizAnswers = new Array(quiz.length).fill(null);
    quizIndex = 0;
    $("quiz-result").hidden = true;
    $("quiz-start").hidden = true;
    $("quiz-active").hidden = false;
    renderQuiz();
  }

  $("prev-lesson").addEventListener("click", function() { if (lessonIndex > 0) { lessonIndex--; renderLessons(); } });
  $("next-lesson").addEventListener("click", function() {
    if (lessonIndex === lessons.length-1) { location.hash = "traen"; }
    else { lessonIndex++; renderLessons(); }
  });
  $("copy-example").addEventListener("click", async function () {
    try {
      await navigator.clipboard.writeText(lessons[lessonIndex].code);
      $("copy-example").textContent = "Kopieret ✓";
      setTimeout(function() { $("copy-example").textContent = "Kopiér kode"; }, 1800);
    } catch (_) {
      $("copy-example").textContent = "Markér og kopiér koden manuelt";
    }
  });
  $("run-example").addEventListener("click", function () { runPython("example", lessons[lessonIndex].code, ""); });
  $("prev-task").addEventListener("click", function() { if (taskIndex > 0) setTask(taskIndex-1); });
  $("next-task").addEventListener("click", function() {
    if (taskIndex === tasks.length-1) { location.hash = "quiz"; }
    else setTask(taskIndex+1);
  });
  $("hint-toggle").addEventListener("click", function () {
    const isHidden = $("task-hint").hidden;
    $("task-hint").hidden = !isHidden;
    $("hint-toggle").setAttribute("aria-expanded", String(isHidden));
    $("hint-toggle").innerHTML = isHidden ? "Skjul hint <span aria-hidden='true'>⌃</span>" : "Få et hint <span aria-hidden='true'>⌄</span>";
  });
  $("code-editor").addEventListener("input", function () {
    drafts[taskIndex] = $("code-editor").value; save(); updateLineCount();
    $("check-feedback").hidden = true;
  });
  $("code-editor").addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
      event.preventDefault();
      const el = $("code-editor"), s = el.selectionStart, e = el.selectionEnd;
      el.value = el.value.slice(0,s) + "    " + el.value.slice(e);
      el.selectionStart = el.selectionEnd = s + 4;
      el.dispatchEvent(new Event("input"));
    }
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      $("run-code").click();
    }
  });
  $("run-code").addEventListener("click", function () { runPython("run", $("code-editor").value, ""); });
  $("check-code").addEventListener("click", function () { runPython("check", $("code-editor").value, tasks[taskIndex].check); });
  $("reset-code").addEventListener("click", function() {
    if (busy) return;
    $("code-editor").value = tasks[taskIndex].starter;
    delete drafts[taskIndex];
    save(); updateLineCount();
    showOutput("Startkoden er gendannet.", false);
    $("check-feedback").hidden = true;
  });
  $("clear-output").addEventListener("click", function () { showOutput("Terminalen er ryddet.", false); $("check-feedback").hidden = true; });
  $("start-quiz").addEventListener("click", resetQuiz);
  $("restart-quiz").addEventListener("click", resetQuiz);
  $("quiz-prev").addEventListener("click", function() { if (quizIndex > 0) { quizIndex--; renderQuiz(); } });
  $("quiz-next").addEventListener("click", function () {
    if (quizAnswers[quizIndex] === null) return;
    if (quizIndex < quiz.length-1) { quizIndex++; renderQuiz(); }
    else showResult();
  });
  document.querySelectorAll(".primary-nav a").forEach(function(a) {
    a.addEventListener("click", function() {
      document.querySelectorAll(".primary-nav a").forEach(n => n.classList.remove("active"));
      a.classList.add("active");
    });
  });
  renderLessons(); setTask(0); startWorker();
})();