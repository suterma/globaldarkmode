// ==UserScript==
// @name         Global Darkmode Widget
// @namespace    darkmode-js
// @version      0.2
// @description  Shows the Darkmode Widget all over the place
// @author       marcel@qrys.ch
// @include      *
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/darkmode-js@1.5.6/lib/darkmode-js.min.js
// @updateURL    https://github.com/suterma/globaldarkmode/raw/master/Global-Darkmode-Widget.user.js
// @downloadURL  https://github.com/suterma/globaldarkmode/raw/master/Global-Darkmode-Widget.user.js
// @supportURL   https://github.com/suterma/globaldarkmode/issues

// ==/UserScript==

(function() {
    'use strict';
    new Darkmode().showWidget();
})();
