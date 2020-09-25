import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video >
                <source src="videos/video-1.mp4" autoplay></source>
            </video>
            <h1>ADVENTURE AWAITS</h1>
            <p> What are you waitng for?</p>
            <div className='hero-btns'>
                <Button className='btns' 
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        >
                         GET STARTED
                        </Button>
                <Button className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        onClick={console.log('hey')}
                         >
                         WATCH TRAILER <i className='far fa-play-cricle'/>
                         </Button>
            </div>
            
        </div>
    )
}

export default HeroSection;
