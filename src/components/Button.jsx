import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as styles from './Button.module.less';

const buttonProps = {
    text: PropTypes.string,
    children: PropTypes.string,
    className: PropTypes.string,
    to: PropTypes.string,
};

export const LightButton = ({ text, to, className, children, ...rest }) => (
    <button
        to={to}
        className={`${className ? className : ''} ${styles.buttonLight}`}
        {...rest}
    >
        {text || children}
    </button>
);
LightButton.propTypes = buttonProps;

export const LightButtonLink = ({ text, to, className, children, ...rest }) => (
    <Link
        to={to}
        className={`${className ? className : ''} ${styles.buttonLight}`}
        {...rest}
    >
        {text || children}
    </Link>
);
LightButtonLink.propTypes = buttonProps;

export const LightButtonAnchor = ({
    text,
    href,
    className,
    children,
    ...rest
}) => (
    <a
        href={href}
        className={`${className ? className : ''} ${styles.buttonLight}`}
        {...rest}
    >
        {text || children}
    </a>
);
LightButtonAnchor.propTypes = buttonProps;

export const DarkButtonLink = ({ text, to, className, children, ...rest }) => (
    <Link
        to={to}
        className={`${className ? className : ''} ${styles.buttonDark}`}
        {...rest}
    >
        {text || children}
    </Link>
);
DarkButtonLink.propTypes = buttonProps;