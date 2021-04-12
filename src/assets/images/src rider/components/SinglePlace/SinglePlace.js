
import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePlace.css';


const SinglePlace = (props) => {
    const { token, price, img, id } = props.place;
    // console.log(props);
    return (
        <div className="col-xl-3 col-lg-4 col-md-4 my-5 single-place">
            <Link to={`/bookingPage/${id}`} onClick={() =>{props.handlePlaceContent(props.id)}}>
                <img src={img} alt="" />
                <h5 className="place-name text-dark">{price}</h5>   
                <h3 className="place-name text-white">{token}</h3> 
               

            </Link>
        </div>
    );
};

export default SinglePlace;