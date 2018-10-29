import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
class HomeContainer extends Component{
    handClick(event){
        event.preventDefault();
        window.location.href='/secciones';
    }
    render(){
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">BIENVENIDO</h1>
                            <p className="text-center">Coloca tu fecha de nacimiento y empieza a darle al mundo más 
                                amor y menos odio.
                            </p>
                            <div className="row justify-content-md-center">
                                <form className="form-inline">
                                
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="exampleInputEmail3" placeholder="YYYY"/>
                                            <button type="submit" className="btn btn-primary" onClick={this.handClick}>OK</button>
                                        </div>   
                                
                                </form>
                               
                            </div>
                            <div className="row justify-content-md-center">
                                <p>Tienes que ser mayor de 18 años</p>
                            </div>
                            <div className="row justify-content-md-center">
                                <div className="iremenber">
                                    <form className="form">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="1" id="recordar"/>
                                            <label className="form-check-label" >
                                                Recuérdame
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-12">
                            <div className="titulo text-center">Absolut.</div>
                        </div>

                         <div className="col-md-12">
                            <div className="legal">
                                <p>
                                  By entering this site, you are agreeing to our Terms & Conditions found here, Privacy Policy found here and Cookies Policy found here.
                                  By continuing to browse this site you are agreeing to accept our use of cookies. Read our Privacy Policy to find out more. Read the Absolut
                                  responsibility statement here. Absolut endorses responsible and moderate drinking. For this reason, we would like to recommend the following reading: 
                                  Distilled Spirits Council of the United States (DISCUS), and the spirits EUROPE Guidelines for the Development of Responsible Marketing Communications. 
                                  ABSOLUT® Vodka Product of Sweden. Absolut, Absolut Vodka country of Sweden & Logo, ENJOY RESPONSIBLY and Absolut Bottle Designs are trademarks owned by 
                                  The Absolut Company AB. ©2000-2014 The Absolut Company AB. All rights reserved. Imported in the US by Absolut Spirits Co. New York, NY. Enjoy responsibly.
                                </p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default HomeContainer;