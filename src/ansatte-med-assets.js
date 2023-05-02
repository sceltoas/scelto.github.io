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
import Andreas from './images/mugshots/andreas.jpg';
import AnnKatrin from './images/mugshots/annkatrin.jpg';
import Bard from './images/mugshots/baard.jpg';
import Eirik from './images/mugshots/eirik.jpg';
import Endre from './images/mugshots/endre.jpg';
import Erik from './images/mugshots/erik.jpg';
import ErikE from './images/mugshots/erike.jpg';
import Erlend from './images/mugshots/erlend.jpg';
import Frederik from './images/mugshots/frederik.jpg';
import FredrikB from './images/mugshots/fredrikb.jpg';
import FredrikS from './images/mugshots/fredriks.jpg';
import Gustav from './images/mugshots/gustav.jpg';
import Haaken from './images/mugshots/haaken.jpg';
import Haakon from './images/mugshots/haakon.jpg';
import Hallvard from './images/mugshots/hallvard.jpg';
import Herman from './images/mugshots/herman.jpg';
import Ida from './images/mugshots/ida.jpg';
import Ismar from './images/mugshots/ismar.jpg';
import Ivar from './images/mugshots/ivar.jpg';
import JanErik from './images/mugshots/janerik.jpg';
import Jorgen from './images/mugshots/jorgen.jpg';
import Ken from './images/mugshots/ken.jpg';
import KjellOlav from './images/mugshots/kjellolav.jpg';
import LarsOlav from './images/mugshots/larsolav.jpg';
import Marius from './images/mugshots/marius.jpg';
import OleTommy from './images/mugshots/oletommy.jpg';
import Richard from './images/mugshots/richard.jpg';
import Sean from './images/mugshots/sean.jpg';
import Terje from './images/mugshots/terje.jpg';
import TorAtle from './images/mugshots/toratle.jpg';
import TorEric from './images/mugshots/toreric.jpg';
import Vetle from './images/mugshots/vetle.jpg';
import Music from './images/music_lover.jpeg';

import Skateboard from './images/skateboard.jpg';
import TorEricBackground from './images/tor_eric_fisk.jpg';
import Yoga from './images/yoga.jpeg';
import {showAvailableConsultantsFirst} from './utils';

export const ansatteMedAssets = {
    toreric: {
        ...ansatte.toreric,
        image: TorEric,
        linkToCV: TorEricCV,
        customImage: TorEricBackground,
    },
    oletommy: {
        ...ansatte.oletommy,
        image: OleTommy,
        linkToCV: OleTommyCV,
        customImage: RetroSykkel,
    },
    herman: {
        ...ansatte.herman,
        image: Herman,
        linkToCV: HermanCV,
        customImage: HermanBackground,
    },
    haaken: {
        ...ansatte.haaken,
        image: Haaken,
        linkToCV: HaakenCV,
        customImage: RetroSykkel,
    },
    marius: {
        ...ansatte.marius,
        image: Marius,
        linkToCV: MariusCV,
        customImage: Nerd,
    },
    gustav: {
        ...ansatte.gustav,
        image: Gustav,
        linkToCV: GustavCV,
        customImage: Kode,
    },
    erlend: {
        ...ansatte.erlend,
        image: Erlend,
        linkToCV: ErlendCV,
        customImage: Scooter,
    },
    richard: {
        ...ansatte.richard,
        image: Richard,
        linkToCV: RichardCV,
        customImage: Bybilde,
    },
    erik: {
        ...ansatte.erik,
        image: Erik,
        linkToCV: ErikCV,
        customImage: Skateboard,
    },
    janerik: {
        ...ansatte.janerik,
        image: JanErik,
        linkToCV: JanErikCV,
        customImage: Solbriller,
    },
    ivar: {
        ...ansatte.ivar,
        image: Ivar,
        linkToCV: IvarCV,
        customImage: IvarBackground,
    },
    vetle: {
        ...ansatte.vetle,
        image: Vetle,
        linkToCV: VetleCV,
        customImage: RustenBil,
    },
    sean: {
        ...ansatte.sean,
        image: Sean,
        linkToCV: SeanCV,
        customImage: RustenBil,
    },
    ken: {
        ...ansatte.ken,
        image: Ken,
        linkToCV: KenCV,
        customImage: RustenBil,
    },
    fredrikb: {
        ...ansatte.fredrikb,
        image: FredrikB,
        linkToCV: FredrikbCV,
        customImage: RustenBil,
    },
    fredriks: {
        ...ansatte.fredriks,
        image: FredrikS,
        linkToCV: FredriksCV,
        customImage: RustenBil,
    },
    terje: {
        ...ansatte.terje,
        image: Terje,
        linkToCV: TerjeCV,
        customImage: Music,
    },
    larsolav: {
        ...ansatte.larsolav,
        image: LarsOlav,
        linkToCV: LarsOlavCV,
        customImage: Cards,
    },
    annkatrin: {
        ...ansatte.annkatrin,
        image: AnnKatrin,
        linkToCV: AnnKatrinCV,
        customImage: Music,
    },
    jorgen: {
        ...ansatte.jorgen,
        image: Jorgen,
        linkToCV: JoergenCV,
        customImage: Music,
    },
    baard: {
        ...ansatte.baard,
        image: Bard,
        linkToCV: '#',
        customImage: Music,
    },
    andreas: {
        ...ansatte.andreas,
        image: Andreas,
        linkToCV: AndreasCV,
        customImage: AndreasBackground,
    },
    hallvard: {
        ...ansatte.hallvard,
        image: Hallvard,
        linkToCV: HallvardCV,
        customImage: HallvardBackground,
    },
    ismar: {
        ...ansatte.ismar,
        image: Ismar,
        linkToCV: IsmarCV,
        customImage: Yoga,
    },
    haakon: {
        ...ansatte.haakon,
        image: Haakon,
        linkToCV: HaakonCV,
        customImage: HaakonBackground,
    },
    frederik: {
        ...ansatte.frederik,
        image: Frederik,
        linkToCV: FrederikCV,
        customImage: FrederikBackground,
    },
    eirik: {
        ...ansatte.eirik,
        image: Eirik,
        linkToCV: EirikCV,
        customImage: Nerd,
    },
    erike: {
        ...ansatte.erike,
        image: ErikE,
        linkToCV: ErikeCV,
        customImage: Yoga,
    },
    toratle: {
        ...ansatte.toratle,
        image: TorAtle,
        linkToCv: TorAtleCV,
        customImage: Yoga,
    },
    endre: {
        ...ansatte.endre,
        image: Endre,
        linkToCv: EndreCV,
        customImage: Yoga,
    },
    kjellolav: {
        ...ansatte.kjellolav,
        image: KjellOlav,
        linkToCV: KjellOlavCV,
        customImage: Yoga,
    },
    ida: {
        ...ansatte.ida,
        image: Ida,
        linkToCv: IdaCV,
        customImage: Cards,
    },
};

export const ansatteArray = () =>
    Object.keys(ansatteMedAssets).map(key => {
        let ansatt = ansatteMedAssets[key];
        ansatt.key = key;
        return ansatt;
    });

export const sortedAnsatte = ansatteArray()
    .map(ansatt => ansatt)
    .sort(showAvailableConsultantsFirst);
