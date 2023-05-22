import { ContainerGlobal } from '../../styles/globalStyle';
import './header.css'

import logo from '../../assets/images/logo.png';


const Header: React.FC = () =>{
    return(
        <header>
            <ContainerGlobal>
                <img src={logo} alt="logo" />
            </ContainerGlobal>
        </header>
    )
}

export default Header;