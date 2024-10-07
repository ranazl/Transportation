import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
// import { AppBar, Toolbar, Typography } from '@mui/material';
import { SwapVert } from '@mui/icons-material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './css/flight.css';

const Flight = () => {

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate('/flightTicket', { state: { locations } });
};

  const [tripType, setTripType] = useState('roundtrip');
  const [locations, setLocations] = useState({ from: '', to: '' });

  const handleSwitch = () => {
    setLocations((prev) => ({
      from: prev.to,
      to: prev.from,
    }));
  };

  return (
    <Container fluid className="p-0 m-0 full-width-container">
      {/* Header */}
      {/* <AppBar position="static" className="header">
        <Toolbar>
          <Typography variant="h6" component="div">
            {tripType === 'roundtrip' ? 'Round Trip' : 'One Way'} Page
          </Typography>
        </Toolbar>
      </AppBar> */}

      {/* Body */}
      <Row className="body p-5">

        <Col xs={12} className="d-flex justify-content-center">
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

        {/* Location Input Box */}
        <Col xs={12}>
          <Row className="locationBox bg-light p-4 rounded align-items-center">
            <Col xs={10} className="locationInput">
              <div className="d-flex align-items-center mb-3 inputGroup">
                <i className="fas fa-map-marker-alt me-2 locationPng"></i>
                <Form.Control
                  type="text"
                  placeholder="From"
                  className="transparent-input"
                  value={locations.from}
                  onChange={(e) => setLocations({ ...locations, from: e.target.value })}
                />
              </div>

              <hr className="divider" />

              <div className="d-flex align-items-center inputGroup">
                <i className="fas fa-map-marker-alt me-2 locationPng"></i>
                <Form.Control
                  type="text"
                  placeholder="To"
                  className="transparent-input"
                  value={locations.to}
                  onChange={(e) => setLocations({ ...locations, to: e.target.value })}
                />
              </div>
            </Col>

            {/* Switcher Button */}
            <Col xs={2} className="switcherBtn">
              <Button variant="outline-primary" onClick={handleSwitch} className="switcherButton">
                <SwapVert />
              </Button>
            </Col>
          </Row>
        </Col>

        {/* DatePicker */}
        <Col xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Row className="justify-content-center align-items-center datepicker-row">
              <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
                <div className="d-flex date-pickers">
                  <DatePicker
                    label="Departure"
                    views={['year', 'month', 'day']}
                    value={null}
                    onChange={(newValue) => {
                      console.log(newValue);
                    }}
                    className="date-picker Departure"
                  />
                  <DatePicker
                    label="Arrival"
                    views={['year', 'month', 'day']}
                    value={null}
                    onChange={(newValue) => {
                      console.log(newValue);
                    }}
                    className="date-picker Arrival"
                  />
                </div>
              </Col>
            </Row>
          </LocalizationProvider>
        </Col>

        {/* TextField */}
        <Col xs={12} className="d-flex justify-content-center">
          <Box sx={{ width: 500, maxWidth: '100%' }}>
            <TextField fullWidth label="Passengers" id="fullWidth" className="passenger" />
          </Box>
        </Col>

      </Row>

      {/* Footer */}
      <Row className="footer mt-4 p-3 d-flex justify-content-center align-items-center">
        <Col xs={12} className="text-center">
          <Button className="search-button" onClick={handleSearch}>Search</Button>
        </Col>
      </Row>

    </Container>
  );
};

export default Flight;
