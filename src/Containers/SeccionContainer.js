import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Contenido from '../Components/Contenido/Contenido';
import Footer from '../Components/Footer/Footer';
import {TweenMax,Power4} from 'gsap';

class SeccionContainer extends Component{
   constructor(props){
       super(props)
       
       if(!localStorage.getItem('session') ){
          if(!localStorage.getItem('remember')){
               window.location.href="/";
          }
          
       }
      
        
   }
   componentDidMount(){
    
    const contenedor = document.getElementById("marco");
    let ancho = contenedor.clientWidth;
    const lienzo = ancho*3;
    const ccright = ancho*2;
    contenedor.style.width = `${lienzo}px`;

    contenedor.style.left=`-${ancho}px`;
    console.log(this.props.location.pathname+' ancho '+ancho,' lienzo '+lienzo);
    if(this.props.location.pathname==='/secciones'){ 
        TweenMax.to(contenedor,1,{left:`-${ancho}px`,ease:Power4.easeIn});
    }
    if(this.props.location.pathname==='/secciones/conoce-la-botella'){ 
        TweenMax.to(contenedor,1,{left:0,ease:Power4.easeIn});
    }
    if(this.props.location.pathname==='/secciones/Mira-lo-que-hicimos-con-todo-el-odio'){ 
        TweenMax.to(contenedor,1,{left:`-${ccright}px`,ease:Power4.easeIn});
    }
   }
    render(){
        return (
            <div>
           
                <Header></Header>
                <Contenido></Contenido>
                <Footer></Footer>
            </div>
        );
    }
}



export default SeccionContainer;