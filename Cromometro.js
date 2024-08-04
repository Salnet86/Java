var t;
var millisecondi=0;
var secondi=0;
var minuti=0;
var ora=0;
var txt ;
  function timedCount(){
  var canvas = document.getElementById("CR");
  var ctx = canvas.getContext("2d");

     
	  
	   millisecondi=millisecondi+1;
		
	  if(millisecondi==100){
	         millisecondi=0;
	      secondi=secondi+1;
	  }
	  else if(secondi==60){
	                secondi = 0;
					minuti=minuti+1; 
	  }else if(minuti==60){
	       minuti=0;
		   ora=ora+1;
	  }
             
   document.getElementById("cronometro").innerHTML= ora+":"+minuti+":"+ secondi +":" + millisecondi;
	 
	                     
	  
	
	
	
	
	
	
	
ctx.beginPath();
ctx.arc(200, 200, 150, 0, 2 * Math.PI, false);
ctx.closePath();
ctx.fillStyle = "#EEEEFF";
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = "#000055";
ctx.stroke();
	
	
	
	
	
//lancentta dei millisecondi
var MSangolo = millisecondi * Math.PI / 30;
var MSx = 200 + 140 * Math.sin(MSangolo);
var MSy = 200 - 140 * Math.cos(MSangolo);
ctx.beginPath();
ctx.moveTo(MSx,  MSy);
ctx.lineTo(200, 200);
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;
ctx.stroke();	
	
	
	
	
	
	
//lancentta dei secondi
var Sangolo = secondi * Math.PI / 30;
var Sx = 200 + 140 * Math.sin(Sangolo);
var Sy = 200 - 140 * Math.cos(Sangolo);
ctx.beginPath();
ctx.moveTo(Sx, Sy);
ctx.lineTo(200, 200);
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;
ctx.stroke();

	
	
	
	
	
// Lancetta dei minuti
var Mangolo = minuti * Math.PI / 30;
var Mx = 200 + 145 * Math.sin(Mangolo);
var My = 200 - 145 * Math.cos(Mangolo);
ctx.beginPath();
ctx.moveTo(Mx, My);
ctx.lineTo(200, 200);
ctx.strokeStyle = "#FFD700";
ctx.lineWidth = 2;
ctx.stroke();

	
	
	
	
// Lancetta delle ore
var Hangolo =  ora* Math.PI / 6;
var Hx = 200 + 100 * Math.sin(Hangolo);
var Hy = 200 - 100 * Math.cos(Hangolo);
ctx.beginPath();
ctx.moveTo(Hx, Hy);
ctx.lineTo(200, 200);
ctx.strokeStyle = "#A52A2A";
ctx.lineWidth = 3;
ctx.stroke();
txt= ora+":"+minuti+":"+ secondi +":" + millisecondi;
ctx.font = "20px Verdana";
ctx.strokeText(txt, 200,200);
	
	
	
	
	
	
	

t = setTimeout(timedCount, 9);

	  
  }
  
function stopCount() {
  clearTimeout(t);
 
}


function deleteCount() {
  millisecondi=0;
 secondi=0;
 minuti=0;
 ora=0;
 
}
