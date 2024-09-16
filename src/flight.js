import React, { useState } from 'react';
import { Container, Row, Col, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './css/flight.css';

const Flight = () => {
  const [tripType, setTripType] = useState('roundtrip'); // State to manage the selected trip type

  return (
    <Container fluid className="p-0 m-0 full-width-container">
      {/* Header */}
      <AppBar position="static" className="header">
        <Toolbar>
          <Typography variant="h6" component="div">
            {tripType === 'roundtrip' ? 'Round Trip' : 'One Way'} Page
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Body */}
      <Row className="body p-5">
        <Col xs={12} className="d-flex justify-content-center">
          {/* Use ToggleButtonGroup to manage the toggle state */}
          <ToggleButtonGroup
            type="radio"
            name="tripType"
            value={tripType}
            className='toggleColorParent'
            onChange={(value) => setTripType(value)}
          >
            <ToggleButton
              id="roundtrip"
              value="roundtrip"
              variant="outline-primary"
              className={`toggleColorChild ${tripType === 'roundtrip' ? 'active' : ''}`}
            >
              Round Trip
            </ToggleButton>
            
            <ToggleButton
              id="oneway"
              value="oneway"
              variant="outline-primary"
              className={`toggleColorChild ${tripType === 'oneway' ? 'active' : ''}`}
            >
              One Way
            </ToggleButton>
          </ToggleButtonGroup>
        </Col>
      </Row>

      {/* Footer */}
      <Row className="footer p-3 bg-light d-flex justify-content-center">
        <Col xs={12} className="text-center">
          <p>&copy; 2024 Travel App. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Flight;
