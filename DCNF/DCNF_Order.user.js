// ==UserScript==
// @name         DCNF Order
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://sorder.dcn.com.tw/dachang/html/menu_2/sub_wt2.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dcn.com.tw
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Order status block ----------------------------
    $('body').css('font-size', '1.1em');
    $(".ButtonNormal").css('font-size', '1.1em');
    $('#sett').css('width', 150);
    $('#searchBtn').css('background-color', 'white');

    toHideShow();  //auto show current order

})();