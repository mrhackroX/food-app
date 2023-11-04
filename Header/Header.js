import logo from './food.png'
export const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}
