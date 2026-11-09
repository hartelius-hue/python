# DictLab – Lær Python dictionaries

Et dansk, interaktivt træningssite til voksne begyndere i Python.

## Indhold

- **5 lektioner** med korte forklaringer og eksempler.
- **8 kodeopgaver** i browseren, med hints, automatisk kontrol og feedback.
- **10 quizspørgsmål** med score, gennemgang og forklaringer.
- **Fremgang** gemmes lokalt i den aktuelle browser.

## Sådan bruges sitet

Åbn det via GitHub Pages (når Pages er aktiveret), eller start en lokal webserver i projektmappen:

```bash
python -m http.server 8000
```

Åbn derefter http://localhost:8000 i browseren.

Python-koden køres lokalt i din browser via [Pyodide](https://pyodide.org/) (WebAssembly) i en separat Web Worker. Første indlæsning kræver internetforbindelse til Pyodides CDN. Web Worker bruges også til at stoppe kode, der kører for længe. Bemærk, at en statisk HTML-fil åbnet direkte med file:// ikke nødvendigvis tillader Web Workers; brug en webserver.

## Filer

- index.html – sidens opbygning og indholdsområder
- styles.css – responsivt Python-inspireret design
- app.js – lektioner, øvelser, svar, progress og quiz
- runner-worker.js – afvikling og automatisk kontrol af Python-kode
- .github/workflows/pages.yml – udgivelse via GitHub Pages

Sitet sender ikke kursistens kode til en ekstern server for at rette den; selve Python-runtime hentes dog fra et eksternt CDN. Fremskridt og kladder gemmes via browserens localStorage.

## Udgivelse med GitHub Pages

Åbn repositoryets **Settings → Pages → Build and deployment**, og vælg **GitHub Actions** som Source, hvis det ikke allerede er valgt. Gå derefter til **Actions → Udgiv DictLab → Run workflow**. Sitet får typisk adressen:

https://hartelius-hue.github.io/python/

Den adresse er først aktiv, når GitHub Pages har gennemført udgivelsen.
