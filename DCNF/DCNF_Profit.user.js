// ==UserScript==
// @name         DCNF Profit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://sorder.dcn.com.tw/dachang/html/menu_4/sub_6.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dcn.com.tw
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Realized Profit  ----------------------------
    $("body").css('font-size', '1.1em');
    $(".ButtonNormal").css('font-size', '1.1em');
    $("#dataTable").css('font-size', '1.1em');

    // Auto show realized list , set query range begin from day 1st
    $("#day").val("01");
    searchAction();

})();