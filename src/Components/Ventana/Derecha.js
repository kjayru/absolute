import React from 'react';


const Derecha = () => (
    <div className="bl-right column">
        <div className="lienzo ventana" id="pagina1-r">
           <div className="container">
                <div className="row h-100 justify-content-center align-items-center">
                   
                        <div className="col-md-6 bloquetexto">
                            <h1>Unete a este movimiento</h1>
                            <p>
                                Ayudanos a acabar con los 
                                mensajes de odio. Cuando veas uno,
                                coloca el #MasAmorMenosOdio y nosotros
                                responderemos con un tweetrigami de amor.
                            </p>
                        </div>

                        <div className="col-md-6 text-center">
                                <img src="/images/holder.png" className="img-fluid"/>
                        </div>
                     
                </div>
           
                <div className="row justify-content-center">
                      <div className="col-md-10 text-center bloquemedio">
                       
                        <h3>¿Como estamos hackeando el odio?</h3>
                       
                        <p>
                            Para lograr esto creamos el tweetigrami, una acción en la que 
                            intervenimos todos los tweets de odio y les respondemos con un mensajes
                            de amor.
                        </p>
                      </div>
                </div>
            </div>

        </div>
    </div> 
);

export default Derecha;