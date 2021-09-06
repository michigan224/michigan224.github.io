// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://nexus.hosted.panopto.com/*
// @icon         https://www.google.com/s2/favicons?domain=panopto.com
// @grant        none
// ==/UserScript==

function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

(function() {
    'use strict';
    GM_addStyle('#leftPane { display: none!important; }');
    GM_addStyle('#rightPlayersContainer { width: 100%!important; height: 100%!important; }');
    GM_addStyle('.secondaryPlayer { display: block!important; }');
    GM_addStyle('#secondaryScreen { width: 100%!important; height: 100%!important; margin: 0!important; left: 0!important; top: 0!important; }');
    console.log('ran');
    // Your code here...
})();