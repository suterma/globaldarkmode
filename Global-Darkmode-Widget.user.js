// ==UserScript==
// @name         Global Darkmode Widget
// @namespace    darkmode-js
// @version      0.1
// @description  Shows the Darkmode Widget all over the place
// @author       qrys.ch
// @include      *
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/darkmode-js@1.5.6/lib/darkmode-js.min.js
// ==/UserScript==

(function() {
    'use strict';
    new Darkmode().showWidget();
})();