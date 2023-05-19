import {Route,Routes} from "react-router-dom";
import Home from '../pages/Home';


export default function Routies({isDarkMode}) {
    return (
        <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode}/>}/>
        </Routes>
    )
}
