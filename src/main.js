import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 
import './css/main.css';
import Profile from './asset/profile.jpg';
import Aurora from './asset/aurora.png';
import Bali from './asset/bali.jpg';
import Qeshm from './asset/qeshm.jpg';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Airplane from './asset/airplane.png';
import Backpack from './asset/backpack.png';
import Hotel from './asset/hotel.png';
import Train from './asset/train.png';

function Main() {

    return (
        <Container fluid className="container">
            {/* Header */}
            <Row className="headerStyle text-white p-3 align-items-center">
                <Col xs={9} className="d-flex align-items-center">
                    <img src={Profile} alt="Profile" className="profile" />
                    <p className="ms-2 profileTitle">Rana Zolfaghari</p>
                </Col>
                <Col xs={3} className="d-flex justify-content-end">
                    <Badge badgeContent={4} className='badgeStyle'>
                        <MailIcon />
                    </Badge>
                </Col>
            </Row>

            {/* Floating Stats Box */}
            <Row className="floating-stats justify-content-center">
                <Col xs={6} className="text-center floatingCard p-2 bg-light rounded shadow">
                    <Row>
                        <Col>
                            <h6 className='fontFloat'>Charge</h6>
                            <p className='fontFloatCost'>$890</p>
                        </Col>
                        <Col>
                            <h6 className='fontFloat'>Total Trips</h6>
                            <p className='fontFloatCost'>7</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* First Body Section with 4 Boxes */}
            <Row className="bg-light p-4 firstBody">
                {/* First Row: Train & Flight */}
                <Row className="mb-4">
                    <Col xs={6} sm={6} className="mb-3">
                        <Card className="text-center">
                            <Card.Body className='cardBody'>
                                <img src={Train} alt="Train" />
                                <Card.Title>Train</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} sm={6} className="mb-3">
                        <Link to="/flight">
                            <Card className="text-center flighStyle">
                                <Card.Body className='cardBody'>
                                    <img src={Airplane} alt="Airplane" />
                                    <Card.Title>Flight</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>

                {/* Second Row: Tour & Hotel */}
                <Row>
                    <Col xs={6} sm={6} className="mb-3">
                        <Card className="text-center">
                            <Card.Body className='cardBody'>
                                <img src={Backpack} alt="Backpack" />
                                <Card.Title>Tour</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} sm={6} className="mb-3">
                        <Card className="text-center">
                            <Card.Body className='cardBody'>
                                <img src={Hotel} alt="Hotel" />
                                <Card.Title>Hotel</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Row>

            {/* Second Body Section */}
            <Row className="p-4">
                <h1>Popular places</h1>
                <Col xs={12} className="scrollable-container">
                    <div className="scroll-box">
                        <img src={Aurora} alt="Aurora" className="location-img" />
                    </div>
                    <div className="scroll-box">
                        <img src={Bali} alt="Bali" className="location-img" />
                    </div>
                    <div className="scroll-box">
                        <img src={Qeshm} alt="Qeshm" className="location-img" />
                    </div>
                </Col>
            </Row>

            {/* Footer */}
            <Row className="footer mt-4 p-3 d-flex justify-content-between">
                <Col xs={3} className="d-flex justify-content-center">
                    <i className="fas fa-credit-card"></i>
                </Col>
                <Col xs={3} className="d-flex justify-content-center">
                    <i className="fas fa-redo"></i>
                </Col>
                <Col xs={3} className="d-flex justify-content-center">
                    <i className="fas fa-home"></i>
                </Col>
                <Col xs={3} className="d-flex justify-content-center">
                    <i className="fas fa-user"></i>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;
