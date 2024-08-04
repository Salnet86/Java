



    //------------------------------------------------------------------------------



   //button e casella di testo
   const Casella=document.querySelector(".monitor");
   var btn_nove=document.getElementById("btn_nove");
   var btn_otto=document.getElementById("btn_otto");
   var btn_sette=document.getElementById("btn_sette");
   var btn_cinque=document.getElementById("btn_cinque");
   var btn_quattro=document.getElementById("btn_quattro");
   var btn_due=document.getElementById("btn_due");
   var btn_uno=document.getElementById("btn_uno");
   var btn_zero=document.getElementById("btn_zero");
   //------------------------------------------------
    var btn_uguale=document.getElementById("btn_uguale");
    var btn_canc=document.getElementById("btn_canc");
    var btn_somma=document.getElementById("btn_somma");
    var btn_sottrazione=document.getElementById("btn_sottrazione");
    var btn_moltiplicazione=document.getElementById("btn_moltiplicazione");
	var btn_divisione=document.getElementById("btn_divisione");
	
   //----------------------------------------------
   var risulatto=0;
   var operazione="";
   var operatore_uno=0;
   var operatore_due=0;
   //----------------------------------------------
   operatore_uno=eval(Casella.innerText);
   operatore_due=eval(Casella.innerText);
   
    //creazione dei pulsanti della calcolatrice 
    btn_nove.addEventListener("click",function(){
	   
	   
	   Casella.innerText=Casella.innerText + "9";
	  
   });
   
   
   
   

      btn_otto.addEventListener("click",function(){
	   
	   
	    Casella.innerText=Casella.innerText + "8";
	  
   });
   
   
    btn_sette.addEventListener("click",function(){
	   
	   
	    Casella.innerText=Casella.innerText + "7";
	  
   });
   
   
      btn_sei.addEventListener("click",function(){
	   
	   
	    Casella.innerText=Casella.innerText + "6";
	  
   });
   
   
   
      btn_cinque.addEventListener("click",function(){
	   
	   
	    Casella.innerText=Casella.innerText + "5";
	  
   });
   
   
   
      btn_quattro.addEventListener("click",function(){
	   
	   
	    Casella.innerText=Casella.innerText + "4";
	  
   });
   
      btn_tre.addEventListener("click",function(){
	   
	   
	    Casella.innerText=Casella.innerText + "3";
	  
   });
   
   
   
      btn_due.addEventListener("click",function(){
	   
	   
	   Casella.innerText=Casella.innerText + "2";
	  
   });
   


   btn_uno.addEventListener("click",function(){
	   
	   
	   Casella.innerText=Casella.innerText + "1";
	  
   });
   
   
   btn_zero.addEventListener("click",function(){
	   
	   	    Casella.innerText=Casella.innerText + "0";
	   
	   
   });
   

   
   btn_canc.addEventListener("click",function(){
	   
	   	   Casella.innerText = " ";
	   
	   
   });
   
   
   
   btn_somma.addEventListener("click",function(){
	       operazione="+";
	       operatore_uno=eval(Casella.innerText);
	   	   Casella.innerText = " ";
	   
	   
   });
   
   
    btn_sottrazione.addEventListener("click",function(){
	       operazione="-";
	      operatore_uno=eval(Casella.innerText);
	   	   Casella.innerText = " ";
	   
	   
   });
   
   
   btn_moltiplicazione.addEventListener("click",function(){
	       operazione="*";
	       operatore_uno=eval(Casella.innerText);
	   	   Casella.innerText = " ";
	   
	   
   });
   
   
   
    btn_divisione.addEventListener("click",function(){
	       operazione="/";
	       operatore_uno=eval(Casella.innerText);
	   	   Casella.innerText = " ";
	   
	   
   });
   
   
   
   
   //-----------------------------tatso uguale--------------------------------------------------------------------------
   btn_uguale.addEventListener("click",function(){
	   
	   
	   
	   operatore_due=eval(Casella.innerText);
	   switch(operazione){
		   case "+":
		    risulatto = operatore_uno + operatore_due;
			break;
			case "-":
		    risulatto = operatore_uno - operatore_due;
			break;
			case "*":
		    risulatto = operatore_uno * operatore_due;
			break;
			case "/":
		    risulatto = operatore_uno / operatore_due;
			break;
			default:
			alert( "Non hai selezionato nessuna operazione");
			
	   }
	   
       Casella.innerText = " "+  risulatto;
	   
	   
	 });
	   
	 
	 
	 