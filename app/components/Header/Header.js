import React from "react";
import config from '../../config'
const { API: { protocols, domain , imagePath} } = config;

const Header = () => (
    <div>
        <div id="bar">
            <img src={`${protocols.HTTP}${domain.BOOKS_CONNECT_LOCAL}${imagePath}bar.jpg`} />
        </div>
    </div>
);

export default Header