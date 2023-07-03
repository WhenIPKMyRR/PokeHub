import { useNavigate } from "react-router";
import DropdownExampleImage from "../DropdownModal";
import './headerMobile.css'

interface IHeaderMobile {
    title: string;
    handleFunction?: void;
}


const HeaderMobile: React.FC<IHeaderMobile> = (props) => {

    const navigate = useNavigate();

    return (
        <div className="headerMobile-container">
            <button onClick={() => navigate(-1)} className="pokemonPage-header_buttonBackPage">
                <svg width={35} height={35} fill="none" stroke="#a3a3a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path d="m15 4-8 8 8 8" />
                </svg>
            </button>
            <h1>{props.title}</h1>
            <DropdownExampleImage />
        </div>
    )
}

export default HeaderMobile