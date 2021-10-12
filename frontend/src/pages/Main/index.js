import './Main.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNewsAction } from '../../redux/actions/newsActions';
import { parsedDate } from '../../utils/dateParser';
import { NavHashLink } from 'react-router-hash-link'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { getAllCategoriesAction } from '../../redux/actions/productsActions';

const Main = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(s => s.news);
    const {selectedLang: {main}, selectedLangSlug} = useSelector(s => s.langs);
    const {categories, categorySuccess} = useSelector(s => s.categories);

    useEffect(() => {
        dispatch(getAllCategoriesAction({
            limit: 50
        }));
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllNewsAction())
    }, [dispatch])

    const news = data !== null ? data.results.slice(0, 3) : null;

    return (
        <main id="mainPage">
            <div className="GeneralBanner">
                <div className="bannerCenterContent">
                    <div className="bannerText">
                        <Zoom left>
                            <h1>{main.mainTitle}</h1>
                        </Zoom>
                        <Zoom right>
                            <div className="firstComp">
                                <h1>{main.second1} <br /> {main.second2}</h1>
                            </div>
                        </Zoom>
                        <Zoom bottom>
                            <div className="btns">
                                <a href="#blocks">{main.moreBtn}</a>
                            </div> 
                        </Zoom>
                    </div>
                </div>
            </div>



            {/* <!-- ЧЕТЫРЕ БЛОКА СКЕЙЛ --> */}




            <section>
                <div className="inlineBanner" id="blocks">
                    <div className="rightBanner">
                        <div className="flexBlock">
                            <div className="one">
                                <div className="oneImg">
                                    <div className="mt-5">
                                        <Zoom bottom>
                                            <h4>{main.productionTitle}</h4>
                                            {
                                                (!categorySuccess || categories?.results.length === 0) ? (
                                                    <NavHashLink to="/products/#nav" >{main.knowMoreBtn}</NavHashLink>
                                                )  : (
                                                    <NavHashLink to={`/products/${categories?.results[0].id}/#nav`} >{main.knowMoreBtn}</NavHashLink>
                                                )
                                            }
                                        </Zoom>
                                    </div>
                                </div>
                            </div>
                            <div className="two">
                                <div className="twoImg">
                                    <div className="mt-5">
                                        <Zoom left>
                                            <h4>{main.newsTitle}</h4>
                                            <NavHashLink to="/news/#nav">{main.knowMoreBtn}</NavHashLink>
                                        </Zoom>
                                    </div>
                                </div>
                            </div>
                            <div className="three">
                                <div className="threeImg">
                                    <div className="mt-5">
                                        <Zoom right>
                                            <h4>{main.contactsTitle}</h4>
                                            <NavHashLink to="/contacts/#nav">{main.knowMoreBtn}</NavHashLink>
                                        </Zoom>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about">
                    <div className="aboutUsMain text-center">
                        <div className="abinline">
                            <div className="title bl">
                                <Fade left>
                                    <h1>{main.aboutTitle}</h1>
                                    <p>      
                                    {main.aboutContent}
                                    </p>
                                </Fade>
                            </div>
                            <div className="mt-4 bl righ">
                                <Fade right>
                                    <NavHashLink to="/about/#nav">
                                        {main.knowMoreBtn}
                                    </NavHashLink>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- Новости --> */}




            <div className="news">
                <div className="generalNew">
                    <Fade left>
                        <h1>{main.lastNews}</h1>
                    </Fade>
                    <Fade right>
                        <p><NavHashLink to="/news/#nav">{main.allNews}</NavHashLink> <i className=" fa fa-arrow-right"></i></p>
                    </Fade>
                </div>
            </div>
            <div className="centerNew">
                <div className="inlineNews">
                    {
                        (news !== null && news.length !== 0) ? (
                            news.map(item => (
                                <Zoom bottom key={item.id}>
                                    {
                                        selectedLangSlug === 'RU' ? (
                                            <div className="cards">
                                                <div className="imgcard">
                                                    <div className='news_image' style={{background: `url('${item.image}') center / cover`}}>

                                                    </div>
                                                </div>
                                                <div className="cards-body">
                                                    <p>{parsedDate(item.created)}</p>
                                                    <p>
                                                        {item.title}
                                                    </p>
                                                    <div className="bt">
                                                        <NavHashLink to={`/news/${item.id}/#nav`}>{main.moreBtn}</NavHashLink>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="cards">
                                                <div className="imgcard">
                                                    <div className='news_image' style={{background: `url('${item.image}') center / cover`}}>

                                                    </div>
                                                </div>
                                                <div className="cards-body">
                                                    <p>{parsedDate(item.created)}</p>
                                                    <p>
                                                        {item.title_en}
                                                    </p>
                                                    <div className="bt">
                                                        <NavHashLink to={`/news/${item.id}/#nav`}>{main.moreBtn}</NavHashLink>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    
                                </Zoom>
                            ))
                        ) : news === null ? (
                            <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                                <span className="visually-hidden">{main.loading}</span>
                            </div>
                        ) : (
                            <h1 className='text-center'>{main.emptyNews}</h1>
                        )
                    }
                </div>
            </div>
        </main>

    )
}

export default Main