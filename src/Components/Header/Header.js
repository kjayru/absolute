import React,{Component} from 'react';
import './Header.css';
import {TweenMax,Power4} from 'gsap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

  class Header extends Component {
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false
          };
          
         
        }

        handleClick(event) {
          event.preventDefault();
          const contenedor = document.getElementById("marco");
          window.history.pushState(null, '', '/secciones/conoce-la-botella');
          TweenMax.to(contenedor,1,{left:0,ease:Power4.easeIn});
        }
        handleClickInicio(event){
          event.preventDefault();
          const contenedor = document.getElementById("marco");
          window.history.pushState(null, '', '/secciones');
         
          TweenMax.to(contenedor,1,{left:`-${ window.innerWidth}px`,ease:Power4.easeIn});

        }
        handleClickMirar(event){
          event.preventDefault();
          const contenedor = document.getElementById("marco");
          window.history.pushState(null, '', '/secciones/Mira-lo-que-hicimos-con-todo-el-odio');
          const ccright = window.innerWidth*2;
          
          TweenMax.to(contenedor,1,{left:`-${ccright}px`,ease:Power4.easeIn});
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
        componentDidMount(){
         
        }
        render() {
          return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <Nav className="ml-auto" navbar>
              
                    <NavItem>
                      
                      <NavLink href="/secciones" onClick={this.handleClick}>Conoce la botella</NavLink>
                    </NavItem> 
                    <NavItem>
                      <NavLink href="/secciones" onClick={this.handleClickInicio}>Inicio</NavLink>
                    </NavItem>
                  </Nav>

                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <NavbarBrand href="/secciones">ABSOLUTE</NavbarBrand>

                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/secciones/" onClick={this.handleClickMirar}>Mira lo que hicimos con todo el odio</NavLink>
                    </NavItem>
                    
                  </Nav>

                </Collapse>
              </nav>
            </div>
          );
        }
      }

      export default Header;
