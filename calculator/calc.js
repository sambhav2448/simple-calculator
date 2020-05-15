window.onload = function (){
	var elements = document.getElementsByTagName("li");
	var screen = document.querySelectorAll('p')[0];
	var clear =   document.getElementsByClassName('clear')[0];
	

for(var i=0;i<elements.length;i=i+1){


		  if(elements[i].textContent === '='){
			    elements[i].addEventListener("click", calculate(i));
		  }else{
			   elements[i].addEventListener("click", addtocurrentvalue(i));
		  }
	}


	
	
function addtocurrentvalue (i){
		return function(){
			if (elements[i].textContent === "÷") {
               screen.textContent  +=  "/ " ;
      }
      else if(elements[i].textContent === "x"){
			      screen.textContent += "*";
		   }
		    else{
			   screen.textContent  += elements[i].textContent;
		   }
	  };
   }
 


 function calculate(i) {
    return function () {
        screen.textContent = eval(screen.textContent);
    };
  }
};

   clear.onclick = function () {
    screen.textContent = '';
  }; 