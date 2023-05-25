import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import ansatte from './ansatte';
import AndreasCV from './cvs/Andreas_Sagen_Aspaas.pdf';
import AnnKatrinCV from './cvs/Ann-Katrin_Gagnat.pdf';
import EirikCV from './cvs/Eirik_Bergande.pdf';
import EndreCV from './cvs/Endre_Ron_Arntsen.pdf';
import ErikeCV from './cvs/Erik_Eiesland.pdf';
import ErikCV from './cvs/Erik_Salhus.pdf';
import ErlendCV from './cvs/Erlend_Nilsen.pdf';
import FrederikCV from './cvs/Frederik_Skytte.pdf';
import FredrikbCV from './cvs/Fredrik_Bjørnøy.pdf';
import FredriksCV from './cvs/Fredrik_Svensen.pdf';
import GustavCV from './cvs/Gustav_Andrè_Bilben.pdf';
import HallvardCV from './cvs/Hallvard_Andreas_Stark.pdf';
import HermanCV from './cvs/Herman_Crawfurd_Svensen.pdf';
import HaakenCV from './cvs/Håken_Stark.pdf';
import HaakonCV from './cvs/Håkon_Hobæk.pdf';
import IdaCV from './cvs/Ida_Hveding_Huse.pdf';
import IsmarCV from './cvs/Ismar_Slomic.pdf';
import IvarCV from './cvs/Ivar_Nilsen.pdf';
import JanErikCV from './cvs/Jan_Erik_Svendsen.pdf';
import JoergenCV from './cvs/Joergen_Ringen.pdf';
import KenCV from './cvs/Ken_Gullaksen.pdf';
import KjellOlavCV from './cvs/Kjell_Olav_Dale.pdf';
import LarsOlavCV from './cvs/Lars_Olav_Torvik.pdf';
import MariusCV from './cvs/Marius_Aune_Gravdal.pdf';
import OleTommyCV from './cvs/Ole_Tommy_Lid-Strand.pdf';
import RichardCV from './cvs/Richard_Rennemo.pdf';
import SeanCV from './cvs/Sean_Erik_Scully.pdf';
import TerjeCV from './cvs/Terje_Lonoy.pdf';
import TorAtleCV from './cvs/Tor_Atle_Lunde.pdf';

import TorEricCV from './cvs/Tor_Eric_Sandvik.pdf';
import VetleCV from './cvs/Vetle_Valebjørg.pdf';
import AndreasBackground from './images/andreas-background.jpg';
import RustenBil from './images/background2.jpg';
import Scooter from './images/background4.jpg';
import RetroSykkel from './images/bicycle_sea.jpeg';
import Cards from './images/cards.jpeg';
import Bybilde from './images/city-panorama.jpeg';
import Kode from './images/code_background.jpeg';
import FrederikBackground from './images/frederik-background.jpg';
import Nerd from './images/geek-dark.jpeg';
import HaakonBackground from './images/haakon-background.jpg';
import HallvardBackground from './images/hallvard-background.jpg';
import HermanBackground from './images/herms-background.jpg';
import IvarBackground from './images/ivar_background.jpg';
import Solbriller from './images/man-person-sunglasses-relaxing.jpeg';
import Music from './images/music_lover.jpeg';

import Skateboard from './images/skateboard.jpg';
import TorEricBackground from './images/tor_eric_fisk.jpg';
import Yoga from './images/yoga.jpeg';
import { showAvailableConsultantsFirst } from './utils';

const imageProps = {
    width: 300,
    height: 450,
    alt: '',
};

export const ansatteMedAssets = {
    toreric: {
        ...ansatte.toreric,
        image: (
            <StaticImage
                src={'../static/mugshots/toreric.jpg'}
                {...imageProps}
            />
        ),
        linkToCV: TorEricCV,
        customImage: TorEricBackground,
    },
    oletommy: {
        ...ansatte.oletommy,
        image: (
            <StaticImage
                src={'../static/mugshots/oletommy.jpg'}
                {...imageProps}
            />
        ),
        linkToCV: OleTommyCV,
        customImage: RetroSykkel,
    },
    herman: {
        ...ansatte.herman,
        image: (
            <StaticImage src={'../static/mugshots/herman.jpg'} {...imageProps} />
        ),
        linkToCV: HermanCV,
        customImage: HermanBackground,
    },
    haaken: {
        ...ansatte.haaken,
        image: (
            <StaticImage src={'../static/mugshots/haaken.jpg'} {...imageProps} />
        ),
        linkToCV: HaakenCV,
        customImage: RetroSykkel,
    },
    marius: {
        ...ansatte.marius,
        image: (
            <StaticImage src={'../static/mugshots/marius.jpg'} {...imageProps} />
        ),
        linkToCV: MariusCV,
        customImage: Nerd,
    },
    gustav: {
        ...ansatte.gustav,
        image: (
            <StaticImage src={'../static/mugshots/gustav.jpg'} {...imageProps} />
        ),
        linkToCV: GustavCV,
        customImage: Kode,
    },
    erlend: {
        ...ansatte.erlend,
        image: (
            <StaticImage src={'../static/mugshots/erlend.jpg'} {...imageProps} />
        ),
        linkToCV: ErlendCV,
        customImage: Scooter,
    },
    richard: {
        ...ansatte.richard,
        image: (
            <StaticImage
                src={'../static/mugshots/richard.jpg'}
                {...imageProps}
            />
        ),
        linkToCV: RichardCV,
        customImage: Bybilde,
    },
    erik: {
        ...ansatte.erik,
        image: (
            <StaticImage src={'../static/mugshots/erik.jpg'} {...imageProps} />
        ),
        linkToCV: ErikCV,
        customImage: Skateboard,
    },
    janerik: {
        ...ansatte.janerik,
        image: (
            <StaticImage
                src={'../static/mugshots/janerik.jpg'}
                {...imageProps}
            />
        ),
        linkToCV: JanErikCV,
        customImage: Solbriller,
    },
    ivar: {
        ...ansatte.ivar,
        image: (
            <StaticImage src={'../static/mugshots/ivar.jpg'} {...imageProps} />
        ),
        linkToCV: IvarCV,
        customImage: IvarBackground,
    },
    vetle: {
        ...ansatte.vetle,
        image: (
            <StaticImage src={'../static/mugshots/vetle.jpg'} {...imageProps} />
        ),
        linkToCV: VetleCV,
        customImage: RustenBil,
    },
    sean: {
        ...ansatte.sean,
        image: (
            <StaticImage src={'../static/mugshots/sean.jpg'} {...imageProps} />
        ),
        linkToCV: SeanCV,
        customImage: RustenBil,
    },
    ken: {
        ...ansatte.ken,
        image: (
            <StaticImage src={'../static/mugshots/ken.jpg'} {...imageProps} />
        ),
        linkToCV: KenCV,
        customImage: RustenBil,
    },
    fredrikb: {
        ...ansatte.fredrikb,
        image: (
            <StaticImage
                src={'../static/mugshots/fredrikb.jpg'}
                {...imageProps}
            />
        ),
        linkToCV: FredrikbCV,
        customImage: RustenBil,
    },
    fredriks: {
        ...ansatte.fredriks,
        image: (
            <StaticImage
                src={'../static/mugshots/fredriks.jpg'}
                {...imageProps}
            />
        ),
        linkToCV: FredriksCV,
        customImage: RustenBil,
    },
    terje: {
        ...ansatte.terje,
        image: (
            <StaticImage src={'../static/mugshots/terje.jpg'} {...imageProps} />
        ),
        linkToCV: TerjeCV,
        customImage: Music,
    },
    larsolav: {
        ...ansatte.larsolav,
        image: (
            <StaticImage
                src={'../static/mugshots/larsolav.jpg'}
                {...imageProps}
            />
        ),
        linkToCV: LarsOlavCV,
        customImage: Cards,
    },
    annkatrin: {
        ...ansatte.annkatrin,
        image: (
            <StaticImage
                src={'../static/mugshots/annkatrin.jpg'}
                {...imageProps}
            />
        ),
        linkToCV: AnnKatrinCV,
        customImage: Music,
    },
    jorgen: {
        ...ansatte.jorgen,
        image: (
            <StaticImage src={'../static/mugshots/jorgen.jpg'} {...imageProps} />
        ),
        linkToCV: JoergenCV,
        customImage: Music,
    },
    baard: {
        ...ansatte.baard,
        image: (
            <StaticImage src={'../static/mugshots/baard.jpg'} {...imageProps} />
        ),
        linkToCV: '#',
        customImage: Music,
    },
    andreas: {
        ...ansatte.andreas,
        image: (
            <StaticImage
                src={'../static/mugshots/andreas.jpg'}
                {...imageProps}
            />
        ),
        linkToCV: AndreasCV,
        customImage: AndreasBackground,
    },
    hallvard: {
        ...ansatte.hallvard,
        image: (
            <StaticImage
                src={'../static/mugshots/hallvard.jpg'}
                {...imageProps}
            />
        ),
        linkToCV: HallvardCV,
        customImage: HallvardBackground,
    },
    ismar: {
        ...ansatte.ismar,
        image: (
            <StaticImage src={'../static/mugshots/ismar.jpg'} {...imageProps} />
        ),
        linkToCV: IsmarCV,
        customImage: Yoga,
    },
    haakon: {
        ...ansatte.haakon,
        image: (
            <StaticImage src={'../static/mugshots/haakon.jpg'} {...imageProps} />
        ),
        linkToCV: HaakonCV,
        customImage: HaakonBackground,
    },
    frederik: {
        ...ansatte.frederik,
        image: (
            <StaticImage
                src={'../static/mugshots/frederik.jpg'}
                {...imageProps}
            />
        ),
        linkToCV: FrederikCV,
        customImage: FrederikBackground,
    },
    eirik: {
        ...ansatte.eirik,
        image: (
            <StaticImage src={'../static/mugshots/eirik.jpg'} {...imageProps} />
        ),
        linkToCV: EirikCV,
        customImage: Nerd,
    },
    erike: {
        ...ansatte.erike,
        image: (
            <StaticImage src={'../static/mugshots/erike.jpg'} {...imageProps} />
        ),
        linkToCV: ErikeCV,
        customImage: Yoga,
    },
    toratle: {
        ...ansatte.toratle,
        image: (
            <StaticImage
                src={'../static/mugshots/toratle.jpg'}
                {...imageProps}
            />
        ),
        linkToCv: TorAtleCV,
        customImage: Yoga,
    },
    endre: {
        ...ansatte.endre,
        image: (
            <StaticImage src={'../static/mugshots/endre.jpg'} {...imageProps} />
        ),
        linkToCv: EndreCV,
        customImage: Yoga,
    },
    kjellolav: {
        ...ansatte.kjellolav,
        image: (
            <StaticImage
                src={'../static/mugshots/kjellolav.jpg'}
                {...imageProps}
            />
        ),
        linkToCV: KjellOlavCV,
        customImage: Yoga,
    },
    ida: {
        ...ansatte.ida,
        image: (
            <StaticImage src={'../static/mugshots/ida.jpg'} {...imageProps} />
        ),
        linkToCv: IdaCV,
        customImage: Cards,
    },
};

export const ansatteArray = () =>
    Object.keys(ansatteMedAssets).map((key) => {
        let ansatt = ansatteMedAssets[key];
        ansatt.key = key;
        return ansatt;
    });

export const sortedAnsatte = ansatteArray()
    .map((ansatt) => ansatt)
    .sort(showAvailableConsultantsFirst);
