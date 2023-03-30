import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return <>
        <div className='landing-page'>
            <div className='landing-img'>
                <img src='/Assets/lens.png' alt='landing' />
            </div>
            <div className='landing-content'>
                <div className='text'>10x Team 04</div>
                <Link to='/post-view'>
                    <div className='btn'>
                        <button>Enter</button>
                    </div>
                </Link>
            </div>
        </div>
    </>
}

export default LandingPage