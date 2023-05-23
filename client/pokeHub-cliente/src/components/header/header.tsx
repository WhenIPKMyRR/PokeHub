import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ContainerGlobal } from '../../styles/globalStyle';
import './header.css'

import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
    
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
        const isMobileSize = window.matchMedia('(max-width: 768px)').matches;
        setIsMobile(isMobileSize);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const shouldRenderHeader = (location.pathname === '/' && isMobile) || !isMobile;

    if (!shouldRenderHeader) {
        return null; 
    }


    return (
        <header>
        <ContainerGlobal>
            <Link to={'/'}>
            <img src={logo} alt="logo" className='header-logo' />
            </Link>
        </ContainerGlobal>
        </header>
    );
}

export default Header;
