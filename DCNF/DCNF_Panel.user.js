// ==UserScript==
// @name         DCNF Panel
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://sorder.dcn.com.tw/dachang/html/menu_2/sub_1.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dcn.com.tw
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Panel setting ----------------------------

  // Hotkey for submit order
  document.addEventListener("keydown", function(event) {
      if (event.which === 16)    // key_code : Shift(16), Ctrl(17), Alt(18), y(89), n(78)
      { submitAction1(); }
  });

  // Order panel style
  $('#order_2_orpr').css('width', 130).css('font-size', '1.2em').css('font-weight', 'bolder');  //PRICE
  $('#order_2_orsh').css('font-size', '1.2em').css('font-weight', 'bolder');  // QTY
  $('#order_2_symb').css('font-size', '1.2em');        // Product Name
  $('#order_2_exdt').css('font-size', '1.2em');        // Product Due
  $('.ButtonNormal').css('font-size', '1.2em');        // submit button

  // When price change, cursor auto focus on QTY (System original design)
  $('#order_2_orsh').focus(
    function() {
      /* when focus set QTY=1 */
      $('#order_2_orsh').val("1");

      /* Copy current price into clipboard */
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($('#order_2_orpr').val()).select();
      document.execCommand("copy");
      $temp.remove();
    }
  );

})();