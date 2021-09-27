import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
function Navbar() {
    const [click,setCLick]=useState(false);
    const [button,setButton]= useState(true);
    const handelClick = () => setCLick(!click);
    const closeMobileMenu= () =>setCLick(false);

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
      
        
    },[])
    window.addEventListener('resize',showButton); 
    return (
        <>
          <nav className="navbar">
            <div className="navbar-container">
             <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                 TRVL <i className="fab fa-typo3"></i>
             </Link>
             <div className="menu-icon" onClick={handelClick}>
                 <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
             </div>
             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                 <li className="nav-items">
                    <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                 </li>
                 <li className="nav-items">
                    <Link to='/Services' className="nav-links" onClick={closeMobileMenu}>
                        Services
                    </Link>
                 </li>
                 <li className="nav-items">
                    <Link to='/Product' className="nav-links" onClick={closeMobileMenu}>
                        Product
                    </Link>
                 </li>
                 <li className="nav-items">
                    <Link to='/Sing-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                        Sing up
                    </Link>
                 </li>
             </ul>
             {button && <Button buttonStyle='btn--outline'>SING UP</Button>}
            </div>   
              
           </nav>  
        </>
    )
}

export default Navbar
