import './Header.css';
import logoFull from '../../assets/images/header/logo-accent-full.png';

function Header({onWidgetToggle}) {

    return (
        <div className="section-wrapper">
            <div className="header-wrapper">
                <img className="header-logo" src={logoFull} alt="streamiverse"/>
                <button className="button button-gradient header-button" onClick={onWidgetToggle}>
                    <span>
                        Join the Waitlist
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Header;
