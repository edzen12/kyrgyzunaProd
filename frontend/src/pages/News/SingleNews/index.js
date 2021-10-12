import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleNewsAction } from '../../../redux/actions/newsActions';
import cls from './SingleNews.module.css';

const SingleNews = () => {
    const dispatch = useDispatch();
    const {data, newsSuccess} = useSelector(s => s.singleNews);
    const {id} = useParams();
    const {selectedLang: {newsPage}, selectedLangSlug} = useSelector(s => s.langs);

    useEffect(() => {
        dispatch(getSingleNewsAction(id))
    }, [dispatch, id])


    return(
        <main>
            <div className={cls.news_top_banner}>
                <div className={cls.news_top_banner_content}>
                    <h1 className='text-center'>{newsPage.title}</h1>
                </div>
            </div>

            {
                newsSuccess ? (
                    <>
                        {
                            selectedLangSlug === 'RU' ? (
                                <div className={cls.card + " card"}>
                                    <h3 className="text-center mt-2">{data.title}</h3>
                                    <div className={"card-body"}>
                                        <div className="text-center">
                                            <img alt={data.title} className={cls.image} src={data.image} />
                                        </div>
                                        <p>{data.description}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className={cls.card + " card"}>
                                    <h3 className="text-center mt-2">{data.title_en}</h3>
                                    <div className={"card-body"}>
                                        <div className="text-center">
                                            <img alt={data.title} className={cls.image} src={data.image} />
                                        </div>
                                        <p>{data.description_en}</p>
                                    </div>
                                </div>
                            )
                        }
                        
                    </>
                ) : newsSuccess === null ? (
                    <div className='text-center mt-5'>
                        <div className="spinner-border text-center" style={{width: '3rem', height: '3rem'}} role="status">
                            <span className="visually-hidden">{newsPage.loading}</span>
                        </div> 
                    </div>
                ) : (
                    <h1 className='text-center mt-5'>{newsPage.errorPage}</h1>
                )
            }
            
            
        </main>
    )
}

export default SingleNews