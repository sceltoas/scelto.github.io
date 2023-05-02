import {Link as GLink} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import * as styles from './Link.module.less';

const Link = ({ to, children }) => (
    <GLink to={to} className={styles.link}>
        {children}
    </GLink>
);

Link.propTypes = {
    to: PropTypes.string.isRequired,
};

export default Link;
