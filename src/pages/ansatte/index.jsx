import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { sortedAnsatte } from '../../ansatte-med-assets';
import EmployeeImageLink from '../../components/EmployeeImageLink';
import Footer from '../../components/Footer';
import FullPageImageWithHeader from '../../components/FullPageImageWithHeader';
import Navigation from '../../components/Navigation';
import Favicon from '../../images/favicon.png';
import SmartPeople from '../../images/smart-people.jpg';
import { createMetadata } from '../../utils';

const IndexPage = (props) => {
    const title = 'Hva kjennetegner en Scelto-konsulent?';
    const description =
        'Vi er en gruppe positive og kunnskapsrike mennesker som bruker vår ekspertise for at din bedrift skal kunne yte best mulig. Våre konsulenters evne til å samarbeide tett med våre kunder og kolleger gjør at alle våre tjenester og produkter blir skreddersydd etter kundens ønske.';
    return (
        <Fragment>
            <Helmet
                title="Ansatte i Scelto AS"
                meta={createMetadata({
                    title,
                    description,
                    image: SmartPeople,
                })}
                link={[{ rel: 'icon', href: Favicon }]}
            />
            <Navigation />
            <FullPageImageWithHeader
                image={SmartPeople}
                title={title}
                subtitle={description}
                link="/ansatte/#ansatte"
            >
                Se alle våre konsulenters biografi for mer utdypende informasjon
                om vår kompetanse!
            </FullPageImageWithHeader>

            <div
                id="#ansatte"
                style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    justifyContent: 'center',
                    margin: '50px 20px 0',
                }}
            >
                {sortedAnsatte.map(({ name, image, title, key }) => (
                    <EmployeeImageLink
                        key={key}
                        image={image}
                        name={name}
                        title={title}
                        to={`/ansatte/${key}`}
                    />
                ))}
            </div>
            <Footer />
        </Fragment>
    );
};

export default IndexPage;
