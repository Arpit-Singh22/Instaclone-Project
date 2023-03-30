import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {
    return <>
        <header>
            <nav id='navigation-page'>
                <div className='navigation-logo'>
                    <img src='/Assets/icon.png' alt='navigation logo' />
                    <span>Instaclone</span>
                </div>
                <div className='navigation-logo'>
                    <Link to='/profile-upload'>
                        <img src='/Assets/camera.png' alt='navigation logo' />
                    </Link>
                </div>
            </nav>
        </header>
    </>
}

export default NavigationBar