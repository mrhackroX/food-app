import logo from './food.png'
import { useState } from 'react'
export const Header = () => {
    const [btnName, setBtnName] = useState('Login')
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Other</li>
                    <button
                        className="login"
                        onClick={() => {
                            btnName === 'Login' ? setBtnName('Log Out') : setBtnName('Login')
                        }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}
