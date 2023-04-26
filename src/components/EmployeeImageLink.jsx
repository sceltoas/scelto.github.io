import {Link as GLink} from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import * as styles from './EmployeeImageLink.module.less';
import * as linkStyles from './Link.module.less';

const EmployeeImageLink = ({ name, title, image, to }) => (
    <GLink to={to} className={styles.employeeImageLink}>
        <div className="image">
            <Img fixed={image} alt={`Bilde av ${name}`} />
        </div>
        <div className={styles.employeeImageLink__textContainer}>
            <h5>
                <span className={linkStyles.link}>{name}</span>
            </h5>
            <p>{title}</p>
        </div>
    </GLink>
);

export default EmployeeImageLink;
