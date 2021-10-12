import './About.css';
import Buss from '../../assets/О нас/buss.png';
import Item5 from '../../assets/О нас/galleryItem5.jpg';
import { useSelector } from 'react-redux';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const About = () => {
    const {selectedLang: {about}} = useSelector(s => s.langs);

    return (
        <>
            <div className="LightBanner">
                <div className="bannerCenterAbout">
                    <div className="bannerAbout">
                        <Zoom left>
                            <div className="firstAbout" >
                                <h1>{about.title} <br /> {about.title2}</h1>
                            </div>   
                        </Zoom>
                    </div>
                </div>
            </div>
            
            {/* <!-- БЛОКИ О нас цель - миссия  --> */}

            <main id='about-content'>
                <div className="onasCenter">
                    <div className="textO">
                        <Zoom left>
                            <h1>{about.subTitle}</h1>
                            <p className="TextWithDate">{about.brand}  </p>
                        </Zoom>
                        <div className="text">
                            <span>
                                <Fade left>
                                    {about.content1}
                                </Fade>
                                <br />
                                
                                <Fade right>
                                    <img className='w-100 mt-5 mb-5 rounded' src={Item5} alt="Kyrgyz Unaa Kurulush" />
                                </Fade>

                                <br />
                                <Fade left>
                                    <p className="border-left">{about.content2}</p>
                                </Fade>
                                <br /><br />     
                            </span>
                            <Fade right>
                                <p>
                                    {about.content3}
                                </p>
                            </Fade>
                        </div>
                    </div>
                </div>

                {/* <!-- Видео о нас --> */}

                

                <Fade left>
                    <div id="video" className="vidos">
                        <div>
                            <iframe title="Video" width="700" height="415" src="https://www.youtube.com/embed/m6n2YnPd8nA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </Fade>

                {/* <!-- Миссия блок --> */}

                <Fade right>
                    <div className="centerMission">
                        <div className="inlineMission">
                            <div className="textM" >
                                <h1>{about.missionTitle}</h1>
                                <div className="Lorem">
                                    <p>{about.missionContent}</p>
                                </div>
                            </div>
                            <div className="buss">
                                <div className="hiddImg">
                                    <img src={Buss} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>

                {/* <!-- Цель блок --> */}

                <div className="centerGoal">
                    <div className="inlineGoal">
                        <div className="leftImg">
                            <div className="scale " >
                                <div className="goalText">
                                    <Zoom bottom>
                                        <div>
                                            <h1>{about.goal}</h1>
                                            <p>
                                                {about.goalContent}
                                            </p>
                                        </div>
                                    </Zoom>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Ценности - качество --> */}

                <div className="cenT">
                    <h1>{about.values}</h1>
                </div>

                <div className="cardBlockCenter">
                    <div className="cardBlockInline">
                        {
                            about.valuesData.map(({id, iconCls, title, content}) => (
                                <Zoom bottom key={id}>
                                    <div className="cardBlockCennoct">
                                        <div className="content">
                                            <i className={iconCls}></i>
                                            <div>
                                                <h1>    
                                                    {title}
                                                </h1>
                                                <p>
                                                    {content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                            ))
                        }
                    </div>
                </div>
            </main>

        </>
    )
}

export default About;