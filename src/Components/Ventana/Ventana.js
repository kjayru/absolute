import React ,{ Component } from 'react';


class Ventana extends Component{
    render(){
        return(
            <div className="bl-left column">
                <div className="lienzo ventana" id="pagina1-l">
                    <div className="container">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-md-4">
                                    <img src="/images/slogan.png" className="img-fluid"/>
                                </div>
                                <div className="col-md-3">
                                    <img src="/images/botella.png" className="img-fluid"/>
                                </div>
                                <div className="col-md-4 texto-ab">
                                    <p>Absolut Drop of love, mismo sabor.
                                        pero con más amor. Una Botella de 
                                        edición limitada hecha con la tinta 
                                        extraída de mensajes de odio de 
                                        todo el mundo.
                                    </p>
                                    <div className="cambioescena">
                                        Prende el amor
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="lienzo ventana" id="pagina2-l">
                    <div className="container">
                         <div className="row h-100 justify-content-center align-items-center text-center">
                            <div className="col-md-12">
                                <h1>Encuentra la Botella</h1>
                                <p>Brindemos con amor. Encuentra nuestra edición limitada
                                    Drop of love en cualquiera de nuestros puntos de venta.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h2>Supermercados y tiendas</h2>
                                <p>Ubícalos en todos estos establecimientos:</p>
                                    <ul>
                                        <li><img src="/images/logo1.png" className="img-fluid"/></li>
                                        <li><img src="/images/logo2.png" className="img-fluid"/></li>
                                        <li><img src="/images/logo3.png" className="img-fluid"/></li>
                                        <li><img src="/images/logo4.png" className="img-fluid"/></li>
                                        <li><img src="/images/logo5.png" className="img-fluid"/></li>
                                    </ul>
                            </div>
                            <div className="col-md-6">
                                <h2>Licorerías</h2>
                                <p>Ubícalos en las siguientes licorerías:</p>

                                <form>

                                    <div className="form-group">
                                       
                                        <select className="form-control" id="lugares">
                                            <option>Seleccione</option>
                                            <option value="mimar">Mimar</option>
                                            <option value="sumon">Sumon</option>
                                            <option value="nuevo mundo">Nuevo Mundo</option>
                                            <option value="Almendariz">Almendariz</option>
                                            <option value="Pozito">Pozito</option>
                                        </select>
                                    </div>
                                </form>

                                <div className="resultado text-center" id="resultado">
                                    <address>
                                    <strong>SAN ISIDRO</strong><br/>
                                      Av. Arenales 289 (A media Cdra. de la Av. javier Prado)
                                    </address>
                                    <address>
                                    <strong>SAN BORJA</strong> <br/>
                                    Av. Aviación 2842
                                    </address>
                                    
                                </div>
                            </div>
                         </div>

                         <div className="row">
                                <div className="col-md-12 barra-azul">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src="/images/botella.png" className="img-fluid"/>
                                        </div>
                                        <div className="col-md-5 bq1">
                                            <h1>a Drop  of Love</h1>
                                            <p>Coloca tus datos y obtén acceso a
                                                material exclusivo, información de
                                                eventos y promociones especiales.
                                            </p>
                                        </div>
                                        <div className="col-md-5 bq1">
                                            <form>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="nombres" placeholder="Nombre y apellido"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="email" placeholder="Correo electrónico"/>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="1" id="suscripcion"/>
                                                    <label className="form-check-label">
                                                        Desea recibir información y noticias de ABSOLUT.
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="1" id="terminos"/>
                                                    <label className="form-check-label">
                                                        Acepto los términos y condiciones y políticas de privacidad.
                                                    </label>
                                                </div>
                                                <div className="form-group text-right">
                                                    <a href="#" className="btn btn-light">Enviar</a>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                
                                </div>
                         </div>
                         
                    </div>
                </div>


            </div> 
        )
    }
}

export default Ventana;