/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function() {
    document.addEventListener("deviceready", onDeviceReady, false);
    //(fired when cordova/phonegap is loaded)
}

function onDeviceReady() {
    var parentElement = document.getElementsById("deviceready");
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector(".received");
    
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;')
}

//DEVICE****************************************************************************
/*
$("#info").html('Cordova Version: '+device.cordova+'<br>');
$("#info").append(device.model+'<br>');
$("#info").append(device.platform+' '+device.version+'<br>');
*/