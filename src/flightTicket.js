import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate , useLocation } from 'react-router-dom';
import World from './asset/world.png';
import Ticket from './asset/ticket.png';
import Transport from './asset/transport.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './css/ticket.css';

const FlightTicket = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { locations } = location.state || { locations: { from: 'Unknown', to: 'Unknown' } }; // Default value if state is empty

    const repeatTicket = 5;
    const imgArray = Array.from({ length: repeatTicket });

    const handleBack = () => {
        navigate('/flight')
    }

    return (
        <Container fluid className="p-0 m-0 full-page-container">
            {/* Header */}
            <Row className="header p-2">
                <Col className="text-center">
                    <img src={World} alt="background" className="worldBG" />
                    <div className="header-content">
                        <ArrowBackIcon className="back-arrow" onClick={handleBack} />
                        <h4 className="page-name">FlightTicket</h4>
                    </div>
                    <h2 className="destination">
                        <h1 className="location-text">{locations.from}</h1>
                        <img src={Transport} alt='transport' className="to-text" />
                        <h1 className="location-text">{locations.to}</h1>
                    </h2>
                </Col>
            </Row>

            {/* Body */}
            <Row className="body p-4">
                <Col className='bodyChild'>
                    <h2 className="body-title">Welcome to the Body Section</h2>
                    <div className="TicketParrent">
                        {imgArray.map((index) => (
                            <div className="Ticket" key={index}>
                                <img src={Ticket} alt="background" className="TicketImg" />
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FlightTicket;
