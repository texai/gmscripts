// ==UserScript==
// @name          My Test Script
// @namespace     Test
// @description   Scripting test
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js
// @include       http://redmine.ec.pe/projects/*/issues/new*
// ==/UserScript==

alert('test2');

$(function(){
    $('#q').click(function(){
        $('#issue_descr_fields').slideUp(2000);;
    });
});

