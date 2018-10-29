import React ,{Component} from 'react';



class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="footer">
                    <div className="container-fluid">
                        <div className="row justify-content-end text-right">
                             <div className="col-md-4">
                               <div className="social">
                                    <a href="#">Facebook</a>
                                    <a href="#" >Twitter</a>
                                </div>
                                <div className="textofoot">
                                    <p>2018 Imported by Absolut Spirits Co., New York, NY</p>
                                </div>
                             </div> 

                        </div>

                        <div className="row justify-content-center text-center">
                            <div className="col-md-10 bloque">
                                <p>
                                    Tomar Bebidas Alcohólicas en exceso es Daniño
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer;