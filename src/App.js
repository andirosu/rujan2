import Collapsible from 'react-collapsible';
import PetsIcon from '@mui/icons-material/Pets';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import BiotechIcon from '@mui/icons-material/Biotech';
import MasksIcon from '@mui/icons-material/Masks';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import './App.css';
import {Container, Link} from "@mui/material";
import logo from './static/logos/logo.png';
import logoSmall from './static/logos/logo-small.png';
import logoInverted from './static/logos/logo-inverted.png';
import logoInvertedSmall from './static/logos/logo-small-inverted.png';
import Header from "./Header";
import {Info, LocalHospital, Phone, PunchClock} from "@mui/icons-material";
import GoogleReviews from "./GoogleReviews";
import Tarife from "./Tarife";




const Servicii = () => (

    <Grid container spacing={0} justifyContent="space-evenly" className={"badges"}>
        <Grid item>
            <Item className={"badge"}><PetsIcon fontSize={"large"} htmlColor={"#499fe1ff"}/><h1 className={"swot"}>cabinet <br/>veterinar</h1></Item>
        </Grid>
        <Grid item>
            <Item className={"badge"}><MasksIcon fontSize={"large"} htmlColor={"#4824bcff"}/> <h1 className={"swot"}>chirurgie <br/>veterinara</h1></Item>
        </Grid>
        <Grid item>
            <Item className={"badge"}><ContentCutIcon fontSize={"large"} htmlColor={"#eb5160ff"}/> <h1 className={"swot"}>frizerie<br/> canina</h1></Item>
        </Grid>
        <Grid item>
            <Item className={"badge"}><BiotechIcon fontSize={"large"} htmlColor={"#f49025"}/> <h1 className={"swot"}>analize <br/> laborator</h1></Item>
        </Grid>
        <Grid item>
            <Item className={"badge"}><VaccinesIcon fontSize={"large"} htmlColor={"#019c84"}/><h1 className={"swot"}>tratamente <br/> vaccinari</h1></Item>
        </Grid>
    </Grid>
);
const Footer = () => (
    <footer className="footer">
        <Grid container alignItems="flex-start" justifyContent="center" gap="30px">
            <Grid xs={12} md={2} item>
                <Item>
                    <h4><Phone fontSize="large"/> Telefon</h4>
                    <Link href="tel:0723395545">0723 395 545</Link>
                    <Link href="tel:0723198951">0723 198 951</Link>

                </Item>
            </Grid>
            <Grid xs={12} md={2} item>
                <Item>
                    <h4><LocalHospital fontSize="large"/> Adresa</h4>
                    <p>
                        Bulevardul 1 Mai 309
                        Berceni 077020
                        România
                    </p>
                </Item>
            </Grid>
            <Grid xs={12} md={2} item>
                <Item>
                    <h4><PunchClock fontSize="large"/> Program</h4>
                    <table itemProp="openingHours">
                        <tbody>
                        <tr>
                            <th className="x2TOCf">Luni-Vineri</th>
                            <td className="o0m3Qb"><span className="WF8WNe">09:30–18:00</span></td>
                        </tr>
                        <tr>
                            <th className="x2TOCf">Sâmbata</th>
                            <td className="o0m3Qb"><span className="WF8WNe">09:30–18:00</span></td>
                        </tr>
                        <tr>
                            <th className="x2TOCf">Duminica</th>
                            <td className="o0m3Qb"><span className="WF8WNe">11:00–14:00</span></td>
                        </tr>
                        </tbody>
                    </table>
                </Item>
            </Grid>
            <Grid xs={12} md={2} item>
                <Item>
                    <h4><Info fontSize="large"/> Informatii</h4>
                    <p>RujanVet SRL</p>
                    <p>Cod Fiscal: 44289629</p>
                    <p>J40/8711/2021</p>

                </Item>
            </Grid>
        </Grid>
    </footer>
)
const Acasa = () => (
    <div className="acasa" itemID={'acasa'} id={'acasa'}>
        <h1>Dacă sunteți în căutarea unui cabinet veterinar de încredere în Berceni, suntem aici să vă ajutăm!</h1>
        <p>La cabinetul nostru veterinar, oferim o gamă largă de <strong>servicii medicale pentru
            animalele de companie</strong>, inclusiv îngrijire preventivă, intervenții medicale complexe, cosmetica și farmacie veterinară. Cu o echipă de medici veterinari cu experiență și un
            personal
            dedicat,
            suntem aici pentru a vă oferi cele mai bune servicii pentru animalele dumneavoastră iubite.
            De asemenea, avem un pet-shop unde puteți găsi o gamă variată de produse pentru animalele de
            companie.</p>
        <br/>
        <h2>Contactați-ne astăzi pentru a programa o vizită la clinica noastra!</h2>
    </div>
);
const Preturi = () => (
    <div className="preturi" itemID={'preturi'} id="tarife" style={{marginBottom: 30}}>
        <h3 className="title">Tarife</h3>
      <Tarife/>
    </div>

);
const Contact = () => (
    <div className="contact" itemID={'contact'}>
        <h3 className="title">Contact</h3>
        <p>În pet-shop-ul nostru, puteți găsi o gamă largă de produse pentru animale de companie, inclusiv alimente de înaltă calitate, jucării și accesorii pentru animale de companie. De asemenea,
            suntem pregătiți să vă oferim sfaturi și recomandări pentru alegerea celor mai bune produse pentru animalele dumneavoastră de companie.</p>

        <p>La cabinetul nostru veterinar din Berceni, suntem dedicați să oferim cele mai bune servicii pentru animalele de companie și proprietarii acestora. Pentru programări sau mai multe informații
            despre serviciile noastre, vă rugăm să ne contactați.</p>
        <iframe title={"map"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17417.100074996753!2d26.17932236683499!3d44.31123488807131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae03abc6d0b3df%3A0xc25d96fdd9420f03!2sRujanVet!5e1!3m2!1sen!2sro!4v1682455143654!5m2!1sen!2sro"
                width="100%" height="600" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
);
const Separator = () => (
    <div className="separator">
        <div className="separator-line"/>
        <div className="separator-text">🐾</div>
        <div className="separator-line"/>
    </div>
);


function App() {
    return (
        <div className="RujanVet">

            <Header logo={logo} logoInverted={logoInverted} logoSmall={logoSmall} logoInvertedSmall={logoInvertedSmall}/>

            <picture className={"banner"}>
                <source srcSet={`${process.env.PUBLIC_URL}/banners/banner_mobil.jpg`} media="(orientation: portrait)"/>
                <source srcSet={`${process.env.PUBLIC_URL}/banners/banner_desktop.jpg`} media="(orientation: landscape)"/>
                <img width="1903px" height="595px" src={`${process.env.PUBLIC_URL}/banners/banner_desktop.jpg`} alt="imagine reprezentativa cu banner"/>
            </picture>

            <Container maxWidth="lg">
                <section>
                    <Servicii/>
                </section>
                <Separator/>
                <section>
                    <Acasa/>
                </section>
                <Separator/>
                <section>
                    <GoogleReviews placeId={"ChIJ37PQxqsDrkARAw9C2f2WXcI"} apiKey={"AIzaSyBnE895PwMd-ufYsM4-8d92OtqtmrLE8GI"}/>
                </section>
                <Separator/>
                <section>
                    <Preturi/>
                </section>
                <Separator/>
                <section>
                    <Contact/>
                </section>
                <Separator/>
            </Container>


            <section>
                <Footer/>
            </section>
        </div>
    );
}

export default App;
