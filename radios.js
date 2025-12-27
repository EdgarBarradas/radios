var delta=0;
var crono=0;
var xo=0;
var xf=0;


function longitud(){
	stream=document.getElementById("miaudio");
	document.getElementById("texto").innerText=stream.currentTime;
}

function seek(x){
	stream=document.getElementById("miaudio");
	stream.currentTime=stream.currentTime+x;
	delta=delta+x;
	document.getElementById("delta").innerText=formato(delta);
}

function cronometro(){
	crono_b=document.getElementById("crono").innerText;
	switch(crono_b){
		case "▶": {document.getElementById("crono").innerText="◼";xo=Date.now();
			document.getElementById("cronom").innerText="...";
			break;
		}
		case "◼": {document.getElementById("crono").innerText="⟳";xf=Date.now();
			document.getElementById("cronom").innerText=formato((xf-xo)/1000);
			break;
		}
		case "⟳": {
			document.getElementById("crono").innerText="▶";xo=0;xf=0;
			document.getElementById("cronom").innerText=formato(0);
			break;
		}
	}
}

function formato(xs){
	signo="";
	dias="";
	horas="";
	minutos="";
	segundos="00";
	x=Math.abs(xs);

	if (xs<0){signo="-";}
	if (x>=86400){dias=Math.floor(x/86400)+"d ";x=x-86400*Math.floor(x/86400);}
	if (x>=3600){horas=" "+Math.floor(x/3600)+":";x=x-3600*Math.floor(x/3600);}
	if (x>=60) {if (x>=600){minutos=Math.floor(x/60)+":";x=x-60*Math.floor(x/60);}
					else{minutos="0"+Math.floor(x/60)+":";x=x-60*Math.floor(x/60);}
				}
	if (x>=10){segundos=x.toFixed(2);}else{segundos="0"+x.toFixed(2)}
				
	return signo+dias+horas+minutos+segundos;
}

function tune(){

        const requestWakeLock = async () => {  // rutina para evitar boqueo de pantalla
            try {
	       const wakeLock = await navigator.wakeLock.request("screen");
	       } catch (err) {}
        }

	x=document.getElementById("selector").value;
	document.getElementById("miaudio").src=x;
	delta=0;
	document.getElementById("delta").innerText=formato(0);
}