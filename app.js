var total=document.querySelector("#cantidad");
var tam=document.querySelector("#tamaño");
var vtotal=document.querySelector("#vcantidad");
var refresco=document.querySelector("#p1");
var papas=document.querySelector("#p2");
var alitas=document.querySelector("#p3");
var res=document.querySelector("#res");
var extras=0;

var vtotal=document.querySelector("#vcantidad");
var uno=document.querySelector("#uno");
var dos=document.querySelector("#dos");
var tres=document.querySelector("#tres");

total.oninput=()=>{calcular()}
tam.onchange=()=>{ calcular()}
refresco.onchange=()=>{ calcular()}
papas.onchange=()=>{ calcular()}
alitas.onchange=()=>{ calcular()}

uno.onchange=()=>{ calcular()}
dos.onchange=()=>{ calcular()}
tres.onchange=()=>{ calcular()}
const calcular=()=>{ 
    n=parseInt(total.value);
    vtotal.innerHTML=n;
    let costopizza=0; let totalPago=0; let extras=0;
    let costoextra=0;
    switch(tam.value){
        case "1":costopizza=100;break
        case "2":costopizza=120;break
        case "3":costopizza=180;break
        case "4":costopizza=150;break
    }

        if(refresco.checked){
            extras+=40;
        }
        if(papas.checked){
            extras+=50;
        }
        if(alitas.checked){
            extras+=75;
        }
        if(dos.checked){
            costoextra+=20;
        }
        if(tres.checked){
            costoextra+=35;
       
    
        }
        costopizza=costopizza+costoextra
        totalPago=(costopizza*n)+extras;
        res.innerHTML=totalPago.toFixed(2);
    }
