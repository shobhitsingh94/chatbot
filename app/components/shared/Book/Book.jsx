import React from "react";
import config from '../../../config'
const { API: { protocols, domain , imagePath} } = config;
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Book = (props) =>  (
    <div className="col-md-3 col-sm-12" key={`${props.book.id}${props.index}`}>
        <Link to={`/details/${props.book.id}`}>
            <div className="col-md-12 col-sm-12">
                <div className="thumbnail">
                    <img className="cover"
                         src={`${protocols.HTTP}${domain.BOOKS_CONNECT_LOCAL}${imagePath}${props.book.imageUrl}`}/>

                    <div className="hover">
                        <h3 className="text-center">{props.book.title}</h3>
                        <br/>
                    </div>
                </div>
                <div className="content bg-orange">
                    <p>
                        <b>Author : {props.book.author}</b>
                    </p>
                    <button type="button" className="btn btn-default btn-sm">Read More</button>
                </div>
            </div>
        </Link>
    </div>
)

Book.propTypes = {
    book : PropTypes.object.isRequired,
    index : PropTypes.number.isRequired
}

export default Book;

