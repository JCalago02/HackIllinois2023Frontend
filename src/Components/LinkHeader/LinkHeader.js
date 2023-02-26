
import "../../Components/LinkHeader/LinkHeader.css";
import headerLogo from "../../Images/logo.png"

import {React} from "react";

function LinkHeader() {
    return (
        <nav className="link-header">
            <h3 className="title">Keebuy (Working Title)</h3>
            <a href={`/`} className="item one">Home</a>
            <a href={`/keycaps`} className="item two">Keycaps</a>
            <a href={`/switches`} className="item three">Switches</a>
            <a href={`/about`} className="item four">About</a>    
        </nav>
    )
}
export default LinkHeader;
    