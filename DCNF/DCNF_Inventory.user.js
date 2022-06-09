// ==UserScript==
// @name         DCNF Inventory
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://sorder.dcn.com.tw/dachang/html/menu_2/sub_wt4.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dcn.com.tw
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Inventory list ----------------------------
    $('body').css('font-size', '1.1em');
    $("#dataTable").css('font-size', '1em');
    $("#searchBtn").css('font-size', '1em');

})();