#!/bin/sh
ng build angular-elements-app --prod --output-hashing=none
cat dist/angular-elements-app/runtime.js dist/angular-elements-app/polyfills.js dist/angular-elements-app/scripts.js dist/angular-elements-app/main.js > preview/angularapp.js
