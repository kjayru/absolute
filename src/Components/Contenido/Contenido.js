import React, { Component } from 'react';

import Ventana from '../Ventana/Ventana';
import Centro from '../Ventana/Centro';
import Derecha from '../Ventana/Derecha';
import './Contenido.css';



class Contenido extends Component{
    render (){
          return (
          <div id="contenedor">
            <ul id="marco">
              <li><Ventana/></li>
               <li><Centro/></li>
               <li id="postfeed"><Derecha/></li>
            </ul>
          </div>
          )
   
     }
}

export default Contenido;