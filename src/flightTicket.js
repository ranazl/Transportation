import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import World from './asset/world.png';
import Ticket from './asset/ticket.png';
import Transport from './asset/transport.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './css/ticket.css';
import axios from 'axios';

const FlightTicket = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { locations } = location.state || { locations: { from: 'Unknown', to: 'Unknown' } }; // Default value if state is empty

  const handleBack = () => {
    navigate('/flight');
  };

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/ticket")
      .then(response => {
        const tickett = response.data
        setTickets(tickett)
      }).catch(error => {
        console.log(error)
      }
      )
  }, []);

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
        <Col className="bodyChild">
          <h2 className="body-title">Available Flights</h2>
          <div className="TicketParrent">
            {tickets.map((ticket, index) => (
              <div className="Ticket" key={index}>
                <img src={Ticket} alt="ticket" className="TicketImg" />
                {/* Ticket Content */}
                <div className="ticket-content">
                  {/* Part 1 */}
                  <div className="ticket-part">
                    <h5 className="flight-name">{ticket.flightName}</h5>
                    <p className="time">{ticket.timeFrom} - {ticket.timeTo}</p>
                  </div>
                  {/* Part 2 */}
                  <div className="ticket-part">
                    <h5 className="flight-name">{ticket.flightName}</h5>
                    <p className="time">{ticket.timeFrom} - {ticket.timeTo}</p>
                  </div>
                  {/* Part 3 */}
                  <div className="ticket-part-horizontal">
                    <h5 className="flight-type">{ticket.flightType}</h5>
                    <p className="cost">{ticket.cost}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FlightTicket;
