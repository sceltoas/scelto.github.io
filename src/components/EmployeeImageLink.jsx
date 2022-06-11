import React from 'react';
import './EmployeeImageLink.less';
import { Link as GLink } from 'gatsby';
import Img from 'gatsby-image';

const EmployeeImageLink = ({ name, title, image, to }) => (
    <GLink to={to} className="employee-image-link">
        <div className="image">
            <Img fixed={image} alt={`Bilde av ${name}`} />
        </div>
        <div className="employee-image-link__text-container">
            <h5 className="link">
                {name}
            </h5>
            <p>{title}</p>
        </div>
    </GLink>
);

export default EmployeeImageLink;
