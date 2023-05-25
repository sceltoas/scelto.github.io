import PropTypes from 'prop-types';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

import * as styles from './Section.module.less';

const Section = ({
    id,
    title,
    ingress,
    children,
    dark = false,
    style,
    icon,
    className,
    useStyles = true,
}) => (
    <section
        id={id}
        className={`${styles.section} ${className}`}
        style={
            useStyles
                ? {
                      backgroundColor: dark ? '#333' : '#fff',
                      color: dark ? '#fff' : '#333',
                      ...style,
                  }
                : {}
        }
    >
        <div
            style={{
                height: 'auto',
                margin: 'auto',
                width: '100%',
                maxWidth: '1024px',
            }}
        >
            {icon && (
                <img
                    style={{
                        maxWidth: '200px',
                    }}
                    src={icon}
                    alt={`Ikon for ${title}`}
                />
            )}
            {title && (
                <Fade>
                    <h1 className={styles.section__header}>{title}</h1>
                </Fade>
            )}
            {ingress && (
                <Fade>
                    <h5>{ingress}</h5>
                </Fade>
            )}
            {children}
        </div>
    </section>
);

Section.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    ingress: PropTypes.string,
    children: PropTypes.element,
    dark: PropTypes.bool,
    className: PropTypes.string,
};

export default Section;
