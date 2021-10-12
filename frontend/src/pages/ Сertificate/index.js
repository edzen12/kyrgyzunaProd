import './Certificate.css';
import Certificate1 from '../../assets/Сертификаты/kyrgyzunaacertificate-2048x1448.png';
import Certificate2 from '../../assets/Сертификаты/Торгово-промышленная-палата-2048x1456.png';
import Certificate3 from '../../assets/Сертификаты/смарт-счетчик-scaled.png';
import Certificate4 from '../../assets/Сертификаты/ТРАНСФОРМАТОР-1-scaled.png';
import { useSelector } from 'react-redux';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
// Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Autoplay, Navigation } from 'swiper';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';
import Media from 'react-media';

SwiperCore.use([EffectCoverflow, Autoplay, Navigation]);

const certificatesData = [
    {
        id: 1,
        img: Certificate1
    },
    {
        id: 2,
        img: Certificate2
    },
    {
        id: 3,
        img: Certificate3
    },
    {
        id: 4,
        img: Certificate4
    }
]

const Certificate = () => {
    const {selectedLang: {certificate}} = useSelector(s => s.langs);

    return(
        <main>
            <section className="sertBanner">
                <div className="textS">
                    <Zoom bottom>
                        <h1>{certificate.title}</h1>
                    </Zoom>
                </div>
            </section>


            {/* <!-- Сертификаты кыргыз унаа --> */}


            <Fade>
                <Media
                    queries={{
                        medium: "(max-width: 1100px)"
                    }}
                >
                    {
                        matches => (
                            <section className='certificate_carousel'>
                                <Swiper
                                    effect='coverflow'
                                    navigation
                                    slidesPerView={matches.medium ? 1 : 2}
                                    spaceBetween={50}
                                    centeredSlides={true}
                                    autoHeight={true}
                                    loop={true}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: true
                                    }}
                                >
                                    {
                                        certificatesData.map(item => (
                                            <SwiperSlide key={item.id} className='certificate_slide'>
                                                <img src={item.img} alt='Certificate' />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </section>
                        )
                    }
                </Media>
            </Fade>


            {/* <section>
                <div className="paperBlock">
                    <div className="firstInline">
                        <Fade left>
                            <div className="left">
                                <h3>{certificate.certificate1.title} <b className='certificateColor'>{certificate.certificate1.type}</b></h3>
                                <p className="aw">
                                    <i className=" fa fa-award"></i>
                                </p>
                                <p>
                                    {certificate.certificate1.content1}

                                    {certificate.certificate1.content2}
                                </p>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="right">
                                <img src={Certificate1} alt="" />
                            </div>
                        </Fade>
                    </div>

                    <div className="secondInline">
                        <Fade left>
                            <div className="right">
                                <img src={Certificate2} alt="" />
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="left">
                                <h3>{certificate.certificate2.title} <b className='certificateColor'>{certificate.certificate2.type}</b></h3>
                                <p className="aw">
                                    <i className=" fa fa-award"></i>
                                </p>
                                <p>
                                    {certificate.certificate2.content1}

                                    {certificate.certificate2.content2}
                                </p>
                            </div>
                        </Fade>
                    
                    </div>
                    <div className="threeInline">
                        <Fade left>
                            <div className="left">
                                <h3>{certificate.certificate3.title} <b className='certificateColor'>{certificate.certificate3.type}</b></h3>
                                <p className="aw">
                                    <i className=" fa fa-award"></i>
                                </p>
                                <p>
                                    {certificate.certificate3.content1}

                                    {certificate.certificate3.content2}
                                </p>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="right">
                                <img src={Certificate3} alt="" />
                            </div>
                        </Fade>
                    </div>
                    <div className="secondInline">
                        <Fade left>
                            <div className="right">
                                <img src={Certificate4} alt="" />
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="left">
                                <h3>{certificate.certificate4.title} <b className='certificateColor'>{certificate.certificate4.type}</b></h3>
                                <p className="aw">
                                    <i className=" fa fa-award"></i>
                                </p>
                                <p>
                                    {certificate.certificate4.content1}

                                    {certificate.certificate4.content2}
                                </p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section> */}
        </main>
    )
}

export default Certificate