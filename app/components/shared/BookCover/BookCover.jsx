import React from "react";
import config from "../../../config";
const {API: {protocols, domain, imagePath}} = config;

const BookCover = (props) => (
    <div className="col-md-4">
        <div className="thumbnail">
            <img className="cover"
                 src={`${protocols.HTTP}${domain.BOOKS_CONNECT_LOCAL}${imagePath}${props.image}`}/>
        </div>
    </div>
)

export default BookCover;