// ==UserScript==
// @name          My Test Script
// @namespace     Test
// @description   Scripting test
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js
// @include       http://redmine.ec.pe/projects/*/issues/new*
// ==/UserScript==

alert('test3');

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$(function(){
    $('#q').click(function(){
        $('#issue_descr_fields').slideUp(2000);;
    });
    
    console.log('1');
    console.log(getUrlVars().q);
    
    console.log('2');
    console.log(getUrlVars()['q']);
    
    console.log('3');
    console.log(getUrlVars()['q'].q);
    
    console.log('4');
    console.log(getUrlVars()['q']['q']);
    
});

