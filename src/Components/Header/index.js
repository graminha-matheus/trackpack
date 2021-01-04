import React from 'react';
import './style.css';
import Logo from '../../Assets/logotp.png'

const Header = () => {
    
    return (
        <div className="img-logo-header">
{            <img src={Logo} alt="TrackPack - By BCR"></img>
}        </div>
    )
}

export default Header;