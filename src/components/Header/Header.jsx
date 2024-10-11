import { Link } from "react-router-dom";
import canto from '../../assets/images/Gaia Garden.png';
import './Header.css';

const Header = ({goto, title}) => {

    return (
        <div id="ulala" className="d-flex justify-content-start align-content-center p-3 shadow rounded">
            <div>
                <img src={canto} alt="gaiagarden" id="imggaiagarden" />
            </div>
            <div>
                <span className="fw-bold h2 ms-4">{title}</span>
            </div>
            
        </div>
    )
}

export default Header