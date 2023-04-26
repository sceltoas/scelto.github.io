import React, {Fragment} from 'react';
import Helmet from 'react-helmet';
import Footer from "../../components/Footer";
import FullPageImageWithHeader from '../../components/FullPageImageWithHeader';
import Navigation from '../../components/Navigation';
import Section from '../../components/Section';
import Fn1 from '../../images/fn/1.png';
import Fn10 from '../../images/fn/10.png';
import Fn11 from '../../images/fn/11.png';
import Fn12 from '../../images/fn/12.png';
import Fn13 from '../../images/fn/13.png';
import Fn14 from '../../images/fn/14.png';
import Fn15 from '../../images/fn/15.png';
import Fn16 from '../../images/fn/16.png';
import Fn17 from '../../images/fn/17.png';
import Fn2 from '../../images/fn/2.png';
import Fn3 from '../../images/fn/3.png';
import Fn4 from '../../images/fn/4.png';
import Fn5 from '../../images/fn/5.png';
import Fn6 from '../../images/fn/6.png';
import Fn7 from '../../images/fn/7.png';
import Fn8 from '../../images/fn/8.png';
import Fn9 from '../../images/fn/9.png';
import FnWheel from '../../images/fn/fn-wheel.png';

import LaptopHands from '../../images/laptop-hands-floating-boxes.jpg';
import HeaderImage from '../../images/silver-laptop-computer-next-to-ceramic-cup-42408.jpg';
import {createMetadata} from '../../utils';

import './index.less';

const IndexPage = () => {
    const title = 'Scelto i samfunnet';
    return (
        <Fragment>
            <Helmet
                title="Scelto AS"
                meta={createMetadata({
                    title,
                    image: HeaderImage,
                })}
            />
            <Navigation />
            <FullPageImageWithHeader
                image={LaptopHands}
                title={title}
                description={''}
                link="/samfunn/#fn"
            ></FullPageImageWithHeader>
            <Section dark={true}>
                <p id={'fn'}>
                    Scelto har en ambisjon om å gjøre en positiv forskjell i
                    samfunnet. Vi er ikke store, men vi ønsker å gjøre mer enn
                    vår del og ta vårt samfunnsansvar.
                </p>
                <p>
                    Vi har valgt oss ut tre områder vi brenner for og som
                    tilsvarer FNs bærekraftsmål: nr 5. "Likestilling mellom
                    kjønnene", nr 10. "Mindre ulikhet" og nr 13. "Stoppe
                    klimaendringene". Vårt program Scelto i samfunnet er noe
                    alle ansatte bidrar inn i og er stolte av å være en del av.
                    Følgende målsettinger gjelder for Scelto i Samfunnet:
                </p>
                <ol className={'fn-list'}>
                    <li>
                        <p>Klima og miljø - FNs bærekraftsmål nr 13</p>
                        <p>
                            Scelto er Miljøfyrtårn-sertifiserte og skal bidra
                            til å bidra til å stoppe klimaendringene. Noen av
                            hovedaktivitetene vi gjør i den forbindelse er:{' '}
                            <br />
                            Å satse på lokale oppdrag for å reise mindre <br />
                            Ha en klimavennlig reise- og kontorpolicy
                            <br />
                            Redusere co2 utslipp pr ansatt
                            <br />
                            Se vår klima- og miljørapport for ytterligere
                            detaljer.
                        </p>
                    </li>
                    <li>
                        <p>Mangfold og likestilling - FNs bærekraftsmål nr 5</p>
                        <p>
                            Scelto skal jobbe for et økt antall kvinner i tech
                            og spesielt utviklere. Disse tiltakene er gjort:
                            <br />
                            Medlemskap i Ada. Ada er et prosjekt ved NTNU som
                            bidrar til at det uteksamineres flere kvinner fra
                            teknologiutdanninger på NTNU som har lav
                            kvinneandel.
                            <br />
                            Et bevisst språk i bilde og tekstbruk i ekstern
                            kommunikasjon.
                            <br />
                            Støtte TENK tech camp og stille med mentor. Målet er
                            at flere jenter skal interessere seg for teknologi
                            og få kunnskap om hvordan de kan være med på å
                            utvikle verdiskapende teknologi i fremtiden.
                        </p>
                    </li>
                    <li>
                        <p>
                            Mindre ulikhet, integrering og inkludering - FNs
                            bærekraftsmål nr 10
                        </p>
                        <p>
                            Scelto skal være med å bidra til mindre ulikhet, økt
                            integrering og inkludering i samfunnet. Gratis
                            sykkelservice for de ansatte fra På hjul
                            sykkelverksted en gang pr år, et sykkelverksted med
                            mening. Paahjul er et profesjonelt sykkelverksted
                            eid av Kirkens Bymisjon. I tillegg til å reparere
                            sykler, gir Paahjul arbeidstrening til mennesker med
                            tidligere rusutfordringer. Velger du å reparere
                            sykkelen din hos Paahjul, er du med på å gjøre noe
                            godt for både miljøet og samfunnet.
                        </p>
                    </li>
                </ol>

                <div className={'fn-header'}>
                    <div>FNs&nbsp;BÆREKRAFTSMÅL</div>
                </div>
                {/*
                    Declare the list-role to make sure it's exposed as a list to assistive
                    technologies using Firefox even though we've removed hte list-style-type.
                    https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html
                    jsx-a11y complains about this so disable it for the line.
                */}
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                <ol className={'fn-image-list'} role={'list'}>
                    <li className={'fn-image-list-item'}>
                        <img src={Fn1} alt={'1: Utrydde fattigdom'} />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img src={Fn2} alt={'2: Utydde sult'} />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img src={Fn3} alt={'3: God helse'} />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img src={Fn4} alt={'4: God utdanning'} />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img
                            src={Fn5}
                            alt={'5: Likestilling mellom kjønnene'}
                        />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img
                            src={Fn6}
                            alt={'6: Rent vann og gode sanitærforhold'}
                        />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img src={Fn7} alt={'7: Ren energi for alle'} />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img
                            src={Fn8}
                            alt={'8: Anstendig arbeid og økonomisk vekst'}
                        />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img src={Fn9} alt={'9: Innovasjon og infrastruktur'} />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img src={Fn10} alt={'10: Mindre ulikhet'} />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img
                            src={Fn11}
                            alt={'11: Bærekraftige byer og samfunn'}
                        />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img
                            src={Fn12}
                            alt={'12: Ansvarlig forbruk og produksjon'}
                        />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img src={Fn13} alt={'13: Stopp klimaendringene'} />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img src={Fn14} alt={'14: Liv under vann'} />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img src={Fn15} alt={'15: Liv på land'} />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img src={Fn16} alt={'16: Fred og rettferdighet'} />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img src={Fn17} alt={'17: Samarbeid for å nå målene'} />
                    </li>
                    <li className={'fn-image-list-item'}>
                        <img src={FnWheel} alt={''} />
                    </li>
                </ol>
            </Section>
            <Footer />
        </Fragment>
    );
};

export default IndexPage;
