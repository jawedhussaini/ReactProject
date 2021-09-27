import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted ></video>
            <h1>ADVENTURE AWAITE</h1>
            <p>what are you waiting for</p>
            <div className='hero-btn'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--primary '
                buttonSize='btn--large'>
                    WATCH TRAILER
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
