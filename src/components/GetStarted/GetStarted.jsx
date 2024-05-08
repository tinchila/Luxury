import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <section className="g-wrapped" id="get-started">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Luxury</span>
                <span className='secondaryText'>Suscribe and find super attractive price quotes from us.
                    <br />
                    Find your residence soon
                </span>
                <button className="button">
                    <a href='mailto:tincho.dotto@gmail.com'>Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted
