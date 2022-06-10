// ==UserScript==
// @name         IBFS Disable Price Auto Clean
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://itrade.ibfs.com.tw/QuoteV2/Default.aspx
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ibfs.com.tw
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /* hide popup info panel */
    $(".order-panel-infoPanel").hide();

    /* remove clean action when focus(FUT+STK) */
    $("#qtyf_A, #qty_A").val("1");
    $("#pricef_A, #price_A").off("focus");

    /* FIX: clean MARKET PRICE after cancel order(FUT) */
    $("#pricef_A").click(function() {
        $("#btnFF1_A").removeClass('active');
        $("#qtyf_A").val("1");
    });

    /* set default qty=1 (STK) */
    $("#price_A").click(function() {
        $("#qty_A").val("1");
    });

    /* mouse right for clean price(FUT) */
    $("#pricef_A").mousedown(function(e) {
        if (e.which === 3) { $("#pricef_A").val(""); }
    });

})();