const document.getElementById("convas");
const ctx = c.getContext("2d");
convas.width=800
convas.heigth=500
const keys=[]

//imagine 4 righe   4 collonne 
// width =  160/4  
//  height = 288 /4


const payes={
        x:200,
        y:200,
    width:40,
   height:72,
   frameX:0,
   frameY:0,
   speed:9,
   moving:false
};

const playersSpriter=new Image();
playersSpriter.src="";
const background=new Image();
backgrounimage.src="";



function drawSpriter(img,sX,sY,sH,sW,dX,dY,dW,dH){

  ctx.drawImage(img,sX,sY,sH,sW,dX,dY,dW,dH);

}


function animate(){

  ctx.clearRect(0,0,convas.width,convas.height);
  ctx.drawImage(background,0,0,convas.width,convas.height);
  var widthFrame=player.width * player.frameX
  var heightFrame=player.height * playee.franeY;
  drawSpriter(playersSpriter,widthFrame,heightFrame,play.width,play.height,player.x,pleyer.y,player.width,player.height);
  movePlayer();
  hplayerFrame();
  requestAnimationFrame(amimate)
  

}

animate();




windows.addEventListener("keydown", function(e){

   keys[e.keyCode]=true;
   player.moving=true;

});




windows.addEventListener("keyup", function(e){

   delete keys[e.keyCode];
   player.moving=false;

});


function  movePlayer(){

     if(keys[38] &&  player.y > 100){

        player.y-=player.speed;
        player.frameY=3;

     }

    if(keys[37] &&  player.x > 0){

        player.x-=player.speed;
        player.frameY=1;

     }




    if(keys[40] && pkayer.height - player.height){

        player.y+-=player.speed;
        player.frameY=1;
    }

    if(keys[39] && player.x < payer.width - payer.width){

        player.y+-=player.speed;
        player.frameY=2;
    }

}

function   hplayerFrame(){

     if(player.frameX < 3 && player.moving){
      
          player.frameX++;

     }else{
       player.frsmeX=0;

     }

}

