import { useSelector } from 'react-redux';
import './Contacts.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { useState } from 'react';
import { postNewForm } from '../../API/index';
import { phones } from '../../business';

const Contacts = () => {
    const {selectedLang: {contacts}} = useSelector(s => s.langs);
    const [fullname, setFullname] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState();
    const [formLoading, setFormLoading] = useState(false);

    const formSubmit = e => {
        e.preventDefault();
        setFormLoading(true);
        if(fullname !== '' && number !== '' && email !== ''){
            postNewForm({
                fullname,
                number,
                email,
                comment
            }).then(res =>{
                if(Math.floor(res.status / 100) === 2){
                    console.log(res);
                    alert('Отправлено успешно!');
                    setFormLoading(false);
                    setFullname('');
                    setNumber('');
                    setEmail('');
                    setComment('');
                }
            }).catch(() => {
                alert('Что-то пошло не так!')
            })
        }else{
            alert('Все поля должны быть заполнены!')
        }
    }
    

    return (
        <main>
            <section>
               <div className="bannerContacts">
                    <Fade left>
                        <div className="bannerText_contacts">
                            <div className="child">
                                <h1>
                                    <a href="/contacts#form">{contacts.title}</a>
                                </h1>
                            </div>
                        </div>
                    </Fade>
               </div>
            </section>

            <section>
                <div className="diller">
                    <Zoom bottom>
                        <h1 id="connect">{contacts.subTitle}</h1>
                    </Zoom>
                </div>
            </section>

            <section id="map-content">
                <div className="mapsCenter_contacts">
                    <div className="mapsInline_contacts">
                        <div className="leftSide_contacts">
                            <Fade bottom>
                                <div className='leftSide_contacts_content card p-3'>
                                    <div>
                                        <h3>{contacts.address.title}</h3>
                                    </div>
                                    <hr />
                                    <ul className="contacts_ul">
                                        <li>
                                            <a href="#map">
                                                {contacts.address.content}
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`tel:${phones.first}`}>{phones.first}</a>
                                        </li>
                                        <li>
                                            <a href={`tel:${phones.first}`}>{phones.second}</a>
                                        </li>
                                        <li>
                                            {contacts.address.time}
                                        </li>
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                        <Fade bottom>
                            <div className="rightSide_contacts" id="map">
                                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37429.259140643546!2d72.79490478429737!3d40.50326509877585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdad8b50695a91%3A0x60a3a13dc15c586e!2z0JrRi9GA0LPRi9C3INCj0L3QsNCwINCa0YPRgNGD0LvRg9GI!5e0!3m2!1sru!2skg!4v1615664409325!5m2!1sru!2skg" width="100%" height="600" style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>



        {/* <!-- АВТОРИЗАЦИЯ --> */}




            <section>
                <div className="contBack" id="contacts-us">
                    <div className="center" id="form">
                        <Zoom bottom>
                            <div className="login-box">
                                <h2>{contacts.form.title}</h2>
                                <form onSubmit={formSubmit}>
                                    <div className="user-box">
                                        <input value={fullname} onChange={e => setFullname(e.target.value)} type="text" name="" required="" />
                                        <label>{contacts.form.fullName}</label>
                                    </div>
                                    <div className="user-box">
                                        <input value={number} onChange={e => setNumber(e.target.value)} type="text" name="" required="" />
                                        <label>{contacts.form.contacts}</label>
                                    </div>
                                    <div className="user-box">
                                        <input value={email} onChange={e => setEmail(e.target.value)} type="text" name="" required="" />
                                        <label>{contacts.form.email}</label>
                                    </div>
                                    <div className="user-box">
                                        <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder={contacts.form.comment}></textarea>
                                        <label></label>
                                    </div>
                                    <button disabled={formLoading} type="submit">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        {contacts.form.submit}
                                    </button>
                                </form>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contacts