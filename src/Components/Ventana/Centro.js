import React, {Component} from 'react';
import './Ventana.css';

class Centro extends Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        
      }

    componentDidMount() {
        const YTPlayer = require('yt-player')
        const player = new YTPlayer('#videoabsolute')
       
        player.load('nEsu2CGRgwE')
        player.setVolume(100)
         
        player.on('playing', () => {
          console.log(player.getDuration()) // => 351.521
        }) 
        
    }
  
    componentWillUnmount() {
       console.log("paso2");
    }

    render(){
        return (

            <div className="bl-centro column" id="ascenso">
                <div className="lienzo ventana activado" id="pagina1">
                
                    <div className="container">
                    
                        <div className="row h-100 justify-content-center align-items-center">

                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                          <div className="row">
                                            <div className="col-md-5">
                                                <img src="/images/bottle.jpg" className="img-fluid" />
                                            </div>
                                            <div className="col-md-6 textocentro">
                                                <p>En el mundo hay mucho odio, por eso decidimos hackearlo y convertirlo
                                                    en un mensaje de amor. Únete a este movimiento y juntos hagamos de este mundo 
                                                    un lugar con #MasAmorMenosOdio.
                                                </p>
                                            </div>
                                          </div> 
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <img src="/images/bottle.jpg" className="img-fluid" />
                                                </div>
                                                <div className="col-md-6 textocentro">
                                                    <p>En el mundo hay mucho odio, por eso decidimos hackearlo y convertirlo
                                                        en un mensaje de amor. Únete a este movimiento y juntos hagamos de este mundo 
                                                        un lugar con #MasAmorMenosOdio.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <img src="/images/bottle.jpg" className="img-fluid" />
                                                </div>
                                                <div className="col-md-6 textocentro">
                                                    <p>En el mundo hay mucho odio, por eso decidimos hackearlo y convertirlo
                                                        en un mensaje de amor. Únete a este movimiento y juntos hagamos de este mundo 
                                                        un lugar con #MasAmorMenosOdio.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div> 
                        </div>


                        
                    </div>  
                </div>
                <div className="lienzo ventana" id="pagina2">

                    <div className="container">
                                                
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-md-7">
                                <div id="videoabsolute"></div>
                            </div>
                            <div className="col-md-5">
                                <div className="texto2">
                                    Con más amor en nuestras vidas el mundo
                                    puede ser un lugar mejor. Porque el 
                                    amor vence al odio, el amor es Absolute.
                                </div>
                            </div>
                        
                        </div>
                                                   
                    </div>
                
                </div>
               
            </div>
        )
    }

}


export default Centro;