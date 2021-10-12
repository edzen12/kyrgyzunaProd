import './News.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllNewsAction } from '../../redux/actions/newsActions';
import { parsedDate } from '../../utils/dateParser';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const News = () => {
    const [limit, setLimit] = useState(6);
    const dispatch = useDispatch();
    const {data} = useSelector(s => s.news);
    const {selectedLang: {newsPage}, selectedLangSlug} = useSelector(s => s.langs);

    const news = data !== null ? data.results : null;

    useEffect(() => {
        dispatch(getAllNewsAction({
            limit,
            offset: 0
        }))
    }, [dispatch, limit])

    const moreNews = e => {
        e.preventDefault();
        if(data.count >= limit){
            setLimit(prev => prev + 3);
        }
    }

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

    };

    return (
        <main>
            {
                (news !== null && news.length > 2) ? (
                    <div>
                        <Slider {...settings}>
                            {
                                news.slice(0, 3).map(item => (
                                    <div key={item.id} >
                                        <div className="slider-item" style={{background: `url('${item.image}') top center / cover`, width: '100%', height: '80vh'}}>
                                            <h1 className='news_slider_title'>{item.title}</h1>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                ) : (
                    <div className="news_top_banner">
                        <div className="news_top_banner_content">
                            <Zoom bottom>
                                <h1 className='text-center'>{newsPage.title}</h1>
                            </Zoom>
                        </div>
                    </div>
                )
            }



            {/* <!-- Новости карточки --> */}


            <div className="news">
                <div className="generalNew">
                    <Fade left>
                        <h1>{newsPage.all}</h1>
                    </Fade>
                </div>
            </div>
            <div className="centerNew">
                <div className="inlineNews">
                    {
                        (news !== null && news.length !== 0 ) ? (
                            news.map(item => (
                                <Zoom key={item.id} bottom>
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
                                                        <Link to={`/news/${item.id}`}>{newsPage.more}</Link>
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
                                                        <Link to={`/news/${item.id}`}>{newsPage.more}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    
                                </Zoom>
                            ))
                        ) : news === null ? (
                            <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                                <span className="visually-hidden">{newsPage.loading}</span>
                            </div>
                        ) : (
                            <h1 className='text-center'>{newsPage.emptyNews}</h1>
                        )
                    }
                </div>
                {
                    data?.count > 6 ? (
                        <div className="more text-center mt-5">
                            <button onClick={moreNews} disabled={data?.count >= limit ? false : true} className="btn btn-danger btn-lg">{newsPage.moreBtn}</button>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
        </main>
    )
}

export default News