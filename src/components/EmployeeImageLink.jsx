import { Link as GLink } from 'gatsby';
import React from 'react';
import * as styles from './EmployeeImageLink.module.less';
import * as linkStyles from './Link.module.less';

const EmployeeImageLink = ({ name, title, image, to }) => {
    return (
        <GLink to={to} className={styles.employeeImageLink}>
            <div className="image">{image}</div>
            <div className={styles.employeeImageLink__textContainer}>
                <h5>
                    <span className={linkStyles.link}>{name}</span>
                </h5>
                <p>{title}</p>
            </div>
        </GLink>
    );
};

export default EmployeeImageLink;
