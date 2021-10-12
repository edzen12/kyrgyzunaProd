import moment from 'moment';
import { useSelector } from 'react-redux';
import { NavHashLink } from 'react-router-hash-link'
import LiveContacts from '../LiveContacts/LiveContacts';
import './Footer.css';
import Facebook from '../../assets/Footer/facebook.svg';
import Youtube from '../../assets/Footer/youtube.svg';
import Instagram from '../../assets/Footer/instagram.svg';
import Whatsapp from '../../assets/Footer/whatsapp.svg';
import { phones } from '../../business';

const socialNetwork = [
    {
        id: 1,
        title: 'Facebook',
        img: Facebook,
        link: 'https://www.facebook.com/kyrgyzunaakurulush/'
    },
    {
        id: 2,
        title: 'YouTube',
        img: Youtube,
        link: '/'
    },
    {
        id: 3,
        title: 'Instagram',
        img: Instagram,
        link: 'https://www.instagram.com/kyrgyzuna.kg/'
    },
    {
        id: 4,
        title: 'WhatsApp',
        img: Whatsapp,
        link: `https://api.whatsapp.com/send?phone=${phones.first}`
    }
]

const Footer = () => {
    const currentYear = moment().format('YYYY');
    const {selectedLang: {footer}} = useSelector(s => s.langs)


    return (
        <footer>
            <LiveContacts />
            <div className="centerFooter">
                <div className="foot">
                    {/* <ol>
                        {
                            footer.links.map(({id, title, link}) => (
                                <li key={id}>
                                    <NavHashLink activeClassName='bolds' to={link}>
                                        {title}
                                    </NavHashLink>
                                </li>
                            ))
                        }
                    </ol> */}
                    <hr />
                    <ol>
                        <li>
                            <b>
                                {footer.about.title}
                            </b>
                        </li>
                        <li>
                            <NavHashLink activeClassName="bolds" to="/about/#about-content">
                                {footer.about.history}
                            </NavHashLink>
                        </li>
                    </ol>

                    <hr />
                    {/* <ol>
                        <li>
                            <b>
                                {footer.products.title}
                            </b>
                        </li>
                        <li>
                            <NavHashLink to="/products/#product-categories" activeClassName='bolds'>
                                {footer.products.all}
                            </NavHashLink>
                        </li>
                    </ol> */}
                    <hr />
                    <ol>
                        <li>
                            <b>
                                {footer.news.title}
                            </b>
                        </li>
                        <li>
                            <NavHashLink activeClassName='bolds' to="/news/#nav">
                            {footer.news.all}
                            </NavHashLink>
                        </li>
                    </ol>
                    <hr />
                    <ol>
                        <li>
                            <b>
                            {footer.contacts.title}
                            </b>
                        </li>
                        <li>
                            <NavHashLink activeClassName='bolds' to="/contacts/#map-content">
                            {footer.contacts.address}
                            </NavHashLink>
                        </li>
                        <li>
                            <NavHashLink activeClassName='bolds' to="/contacts/#contacts-us">
                            {footer.contacts.form}
                            </NavHashLink>
                        </li>
                    
                    </ol>
                    <hr />
                    <ol>
                        <li>
                            <b>
                                {footer.hotline}
                            </b>
                        </li>
                        <li>
                            <a href={`tel:${phones.first}`}>
                                <i className="fa fa-phone"></i>
                                {phones.first}
                            </a>
                        </li>
                        <li>
                            <a href={`tel:${phones.second}`}>
                                <i className="fa fa-phone"></i>
                                {phones.second}
                            </a>
                        </li>
                    </ol>
                </div>
                <hr />
                <div className="polit">
                    <ul className="osoo">
                        <li>
                            {footer.footTitle} 2018 - {currentYear}
                        </li>
                    </ul>
                    <ul className="icons">
                        {
                            socialNetwork.map(({id, title, img, link}) => (
                                <li key={id}>
                                    <a title={title} href={link}>
                                        <img className='social-icons' src={img} alt={title} />
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;