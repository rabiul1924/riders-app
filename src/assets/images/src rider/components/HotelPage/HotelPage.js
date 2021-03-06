import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import HeaderBlack from '../HeaderBlack/HeaderBlack';
import fakeDataHotel from '../../fakeDataHotel';
import { useParams } from 'react-router-dom';
import HotelDetails from '../HotelDetails/HotelDetails';
import { UserContext } from '../../App';
import GoogleMap from '../GoogleMap/GoogleMap';

const HotelPage = () => {
    const hotels = fakeDataHotel;
    // console.log(fakeDataHotel)

    const { id } = useParams();
    const filteredHotel = fakeDataHotel.filter(hotel => parseInt(hotel.TrainId) === parseInt(id));

    // console.log(id, filteredHotel[id])
    // console.log(filteredHotel[id].placeName)

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Container bg="light">
            <HeaderBlack></HeaderBlack>
            <Container>
                <div className="col-md-7">
                   
                    {
                        filteredHotel.map(hotelDetails => <HotelDetails key={hotelDetails.key} hotelDetails={hotelDetails}></HotelDetails>)
                    }
                </div>
                <div className="col-md-5">
                    <GoogleMap></GoogleMap>
                </div>
            </Container>
        </Container>
    );
};

export default HotelPage;