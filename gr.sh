#!/bin/bash

clear

# Check if at least two arguments are provided
if [ $# -lt 2 ]; then
    echo "Error. Must provide a path and a string to search for."
    return
fi

SEARCH_PATH=$1
SEARCH_STRING=$2
shift 2

VAR1=""
# Process additional arguments for exclusions
for ARG in "$@"; do
    if [[ $ARG == /* ]]; then
        VAR1+=" --exclude-dir \"${ARG:1}\""
    else
        VAR1+=" --exclude \"${ARG}\""
    fi
done

VAR0="grep -nriI $SEARCH_PATH --exclude={.git,\*.sql,package-lock.json,webpack.config.js,composer.lock,\*.chunk.css,\*.chunk.js,\*.css.map,\*.js.map} --exclude-dir={.git,.git/index,bower_components,node_modules,.sass-cache,vendor\*,\*backup\*,\*cached\*}${VAR1} -e \"${SEARCH_STRING}\""

echo "* Running: $VAR0
Eg. gr ./ \"= new\"

* Tip: If you are searching a phrase or sentence, place the expression in quotation marks:
gr ./ \"fox jumps over fence\"
* Tip: If excluding directories, prepend with forward slash /. If excluding files, do not prepend. These are additional arguments after the expression argument. There is no restriction on the number of arguments.
gr ./ \"fox jumps over fence\" /cached .gitignore README.md
Btw, the cached folder and .gitignore file is automatically ignored because I know how common those are in projects.
* Tip: Go to top of results on Macs with CMC+Up, or Ctrl+Home on Windows.
* Tip: Open the file and line in Visual Code:
code -g filepath:line
"

eval $VAR0
