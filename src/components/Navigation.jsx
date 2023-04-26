import {Link as GatsbyLink} from 'gatsby';
import React from 'react';
import CloseMenu from '../images/icons/Scelto–icon-close-hover.svg';
import MenuIcon from '../images/icons/Scelto–icon-menu.svg';
import logo from '../images/logo-green-white-trans.png';
import * as styles from './Navigation.module.less';
import Link from './Link';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(force) {
        this.setState({ open: force !== undefined ? force : !this.state.open });
    }

    render() {
        const menuItems = [
            { href: '/jobbe-i-scelto', title: 'Jobbe i Scelto' },
            { href: '/ansatte', title: 'Menneskene' },
            { href: '/tjenester', title: 'Tjenester' },
            { href: '/samfunn', title: 'Scelto i samfunnet' },
            { href: '/kontakt', title: 'Kontakt' },
        ];

        return (
            <div id="index-banner">
                <nav className={styles.navigation} role="navigation">
                    {this.state.open && (
                        <div className={styles.dropdownMenu}>
                            <div className={styles.dropdownMenu__bar}>
                                <GatsbyLink
                                    onClick={() => {
                                        this.toggleMenu(false);
                                    }}
                                    to="/"
                                >
                                    <img src={logo} alt="Logo for Scelto" />
                                </GatsbyLink>

                                <button
                                    id="mobile-menu-open"
                                    onClick={event => {
                                        this.toggleMenu();
                                        event.stopPropagation();
                                    }}
                                >
                                    <img
                                        src={CloseMenu}
                                        width="50px"
                                        alt={`Lukk meny`}
                                    />
                                </button>
                            </div>
                            <ul className={styles.dropdownMenu__menuItems}>
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            onClick={() => {
                                                this.toggleMenu(false);
                                            }}
                                            to={item.href}
                                            activeStyle={{
                                                backgroundColor: '#C5D200',
                                                borderBottom: 'none',
                                                color: 'black',
                                            }}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className={styles.hideOnMedAndDown}>
                        <GatsbyLink to="/" className="logo">
                            <img src={logo} alt="Logo for Scelto" />
                        </GatsbyLink>
                        <ul className="right">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        onClick={() => {
                                            this.toggleMenu(false);
                                        }}
                                        to={item.href}
                                        activeStyle={{
                                            backgroundColor: '#C5D200',
                                            padding: '0 10px',
                                            borderBottom: 'none',
                                            color: 'black',
                                        }}
                                        style={{
                                            padding: '0 10px',
                                            borderBottom: '2px solid #C5D200',
                                            color: '#C5D200',
                                        }}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {!this.state.open && (
                        <div className={styles.hideOnLargeOnly}>
                            <GatsbyLink to="/" className="logo">
                                <img src={logo} alt="Logo for Scelto" />
                            </GatsbyLink>

                            <button
                                id="mobile-menu-open"
                                onClick={() => {
                                    this.toggleMenu();
                                }}
                                alt="Åpne meny"
                            >
                                <img
                                    src={MenuIcon}
                                    width="50px"
                                    alt="Åpne meny"
                                />
                            </button>
                        </div>
                    )}
                </nav>
            </div>
        );
    }
}

export default Navigation;
