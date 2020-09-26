const path = require('path');
var version = location.search.split('version=')[1]; //core

var namespace = 'QuickStart.' + version.charAt(0).toUpperCase() + version.substr(1);
//console.log(namespace)  QuickStart.Core
if(version === 'core') version = 'coreapp';

const baseNetAppPath = path.join(__dirname, '/src/'+ namespace +'/bin/Debug/net'+ version +'2.0');
console.log(baseNetAppPath)    //D:\Prograde-poc-vgs\src\QuickStart.Core\bin\Debug\netcoreapp2.0

process.env.EDGE_USE_CORECLR = 1;  //This repo contains the .NET Core runtimeCoreCLR

if(version !== 'standard')
   process.env.EDGE_APP_ROOT = baseNetAppPath;
    

var edge = require('electron-edge-js');

var baseDll = path.join(baseNetAppPath, namespace + '.dll');  //dll= D:\Prograde-poc-vgs\src\QuickStart.Core\bin\Debug\netcoreapp2.0\QuickStart.Core.dll


var localTypeName = namespace + '.LocalMethods';   //QuickStart.Core.LocalMethods
var name="Monika";

var card = edge.func({
    assemblyFile: baseDll,
    typeName: localTypeName,
    methodName: 'monitorHealthCard'
});

var sanitize = edge.func({
    assemblyFile: baseDll,
    typeName: localTypeName,
    methodName: 'sanitizeHeatlCard'
});




window.onload = function() {
    var healthBtn=document.getElementById('healthBtn');
    const sanitizeBtn=document.getElementById('sanitizeBtn');

    healthBtn.addEventListener('click',cardHealth);
    sanitizeBtn.addEventListener('click',sanitizeCard);

   
    function cardHealth(){
        
        card('', function(error, result) {
                if (error) throw error;
                 //document.getElementById("display").innerHTML = result;
                 alert(result);
             });
    }

    function sanitizeCard(){
        
        sanitize('', function(error, result) {
                if (error) throw error;
                 //document.getElementById("display").innerHTML = result;
                 alert(result);
             });
    }

    


};
