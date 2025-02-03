# Global npm scripts at ~/npm

Purpose & how to call

BROWSER:
List node_modules/ for *.min.js and *.min.css which are likely browser compatible scripts and stylesheets for your external scripts and external stylesheet:
```
npm run browser --prefix ~/npm/
```

------------------------------------------

GREP:
Find recursively text and list files and their line of code where the text is found, excluding .git and node_modules:
```
npm run gr --prefix ~/npm/ -- `pwd` SEARCH_TERM
```

------------------------------------------

SED:
Replace all STRING_1 with STRING_2 recursively at the current folder, excluding .git and node_modules:
```
npm run sed --prefix ~/npm/ -- `pwd` STRING_1 STRING_2
```