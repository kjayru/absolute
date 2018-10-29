var currPos='';
var _scrollTimeout = null;
var act = 0;
var maxslide = 2;
var current = '';
var estado = false;
let actual = '';
let result = '';

window.onload = function(c) {

    
    

/*
    if(ascenso.addEventListener){
        document.addEventListener('DOMMouseScroll', moveObject, false);
    }
    document.onmousewheel = moveObject;
     currPos = document.querySelector('.activado');
    ///////////
*/
};


function moveObject(event)
{
    
    var f = ((typeof event.wheelDelta != "undefined") ? (-event.wheelDelta) : event.detail);
    f = 100 * ((f>0)?1:-1);

   if(f == -100){ 
       if(estado ==false){
        direccion = 'UP'; 
        estado = true;
        
        efectuar(direccion);
       }      
    }

    if(f == 100){
        if(estado ==false){
          direccion = 'DOWN';
          estado = true;
          
        efectuar(direccion);
        }
    }
   
   
    window.clearTimeout(_scrollTimeout);

    _scrollTimeout = window.setTimeout(function() {
        console.log("Haven't scrolled in 250ms");  
        estado = false;
    }, 250);

    
}

function efectuar(direcc){
    
    if(direcc=='DOWN'){
        if(act<maxslide){
            
            act = act + 1;
            
        }
        result = act;
    }

    if(direcc=='UP'){
        if(act>0){
           
            act = act - 1;
        }
        
    }    
    console.log(act+" "+direcc);

    actual = document.getElementById(`pagina${act}`);
    actualp = document.getElementById(`pagina${act+1}`);
    

        //console.log(current+" "+actual);
    
    
   try {
    var mc = document.querySelectorAll('.ventana');
    mc.forEach(function(u) {
       
        u.classList.remove('activado');
        actualp.classList.add("activado");
      });
   } catch (error) {
       console.error(error);
   }
    
   
    
   
    if(direcc=='UP'){
        TweenMax.to(actualp, 1, 
            {top:0,
            onComplete: function(){
                console.log('done');
            },
            ease:Power2.easeOut
        });
    }

    if(direcc=='DOWN'){
        TweenMax.to(actual, 1, 
            {top:-850,
            onComplete: function(){
                console.log('done');
            },
            ease:Power2.easeOut
        });
    }
}

