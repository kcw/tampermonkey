// ==UserScript==
// @name         IBFS Wisdom OCO
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://itrade.ibfs.com.tw/WisdomH5.aspx
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ibfs.com.tw
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $("#w_txtQty").val("1");
    $("#w_selPF1").val("L"); // use Limited price
    $("#w_selPF2").val("L");

    $("#w_txtPrice1").prop('disabled', false);
    $("#w_txtPrice2").prop('disabled', false);

    $("#w_btnROD1").prop('disabled', false);
    $("#w_btnROD2").prop('disabled', false);

    $("#w_txtTPrice1").blur( function(){$("#w_txtPrice1").val($("#w_txtTPrice1").val());} );
    $("#w_txtTPrice2").blur( function(){$("#w_txtPrice2").val($("#w_txtTPrice2").val());} );

    $("#w_btnIOC1").removeClass('active');
    $("#w_btnIOC2").removeClass('active');

    $("#w_btnROD1").addClass('active');
    $("#w_btnROD2").addClass('active');


})();