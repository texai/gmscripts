// ==UserScript==
// @name          My Test Script
// @namespace     Test
// @description   Scripting test
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js
// @include       http://redmine.ec.pe/projects/*/issues/new*
// ==/UserScript==

alert('test4');

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

function base64_decode (data) {
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
        ac = 0,        dec = "",
        tmp_arr = [];
 
    if (!data) {return data;}
 
    data += '';
 
    do { // unpack four hexets into three octets using index points in b64        h1 = b64.indexOf(data.charAt(i++));
        h2 = b64.indexOf(data.charAt(i++));
        h3 = b64.indexOf(data.charAt(i++));
        h4 = b64.indexOf(data.charAt(i++));
         bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
 
        o1 = bits >> 16 & 0xff;
        o2 = bits >> 8 & 0xff;
        o3 = bits & 0xff; 
        if (h3 == 64) {
            tmp_arr[ac++] = String.fromCharCode(o1);
        } else if (h4 == 64) {
            tmp_arr[ac++] = String.fromCharCode(o1, o2);        } else {
            tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
        }
    } while (i < data.length);
     dec = tmp_arr.join('');
    dec = this.utf8_decode(dec);
 
    return dec;
}

$(function(){
    $('#q').click(function(){
        $('#issue_descr_fields').slideUp(2000);;
    });
    
    console.log('1');
    console.log(getUrlVars().q);
    console.log('2');
    console.log(base64_decode(getUrlVars().q));
    console.log('3');
    console.log(eval(base64_decode(getUrlVars().q)));
    
});

