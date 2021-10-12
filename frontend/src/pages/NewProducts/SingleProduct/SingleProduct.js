import './SingleProduct.css';
import Zoom from 'react-reveal/Zoom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSingleProductsAction } from '../../../redux/actions/productsActions';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const {data, productsSuccess} = useSelector(s => s.singleProducts);
    const {id} = useParams();
    const {selectedLang: {singleProducts}, selectedLangSlug} = useSelector(s => s.langs)

    useEffect(() => {
        dispatch(getSingleProductsAction(id))
    }, [id, dispatch])

    return (
        <div>
            <div className="banner">    
                <div className="mai singleProductsTitleContainer">
                    <div className="bannerT singleProductTitleContainer">
                        <Zoom bottom>
                            {
                                selectedLangSlug === 'RU' ? (
                                    <h1>{data?.title_ru}</h1>
                                ) : (
                                    <h1>{data?.title_en}</h1>
                                )
                            }
                        </Zoom>
                    </div>
                </div>
            </div>


            {
                productsSuccess ? (
                    <>
                        {
                            selectedLangSlug === 'RU' ? (
                                <div className='singleProductContainer'>
                                    <div className="singleProductImage">
                                        <h1>{data?.title}</h1>
                                        <img width='80%' src={data?.image} alt={data?.title} />
                                    </div>
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    {singleProducts.productDesc}
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">{data?.description}</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    {singleProducts.appArea}
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">{
                                                    data?.application_area
                                                }</div>
                                            </div>
                                        </div>
                                        {
                                           data?.technical_data.length !== 0 ? (
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                        {singleProducts.techData}
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <table className="table table-hover">
                                                            <tbody>
                                                                {
                                                                    data?.technical_data.map(item => (
                                                                        <tr className='text' key={item.id}>
                                                                            <td><strong>{item.key}</strong></td>
                                                                            <td style={{textAlign: 'right'}}>{item.value}</td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                           ) : null
                                        }
                                    </div>
                                </div>
                            ) : (
                                <div className='singleProductContainer'>
                                    <div className="singleProductImage">
                                        <h1>{data?.title_en}</h1>
                                        <img width='80%' src={data?.image} alt={data?.title_en} />
                                    </div>
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    {singleProducts.productDesc}
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">{data?.description_en}</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    {singleProducts.appArea}
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">{
                                                    data?.application_area_en
                                                }</div>
                                            </div>
                                        </div>
                                        {
                                           data?.technical_data.length !== 0 ? (
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                        {singleProducts.techData}
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <table className="table table-hover">
                                                            <tbody>
                                                                {
                                                                    data?.technical_data.map(item => (
                                                                        <tr className='text' key={item.id}>
                                                                            <td><strong>{item.key_en}</strong></td>
                                                                            <td style={{textAlign: 'right'}}>{item.value_en}</td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                           ) : null
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </>
                ) : productsSuccess === null ? (
                    <div className='text-center mt-5'>
                        <div className="spinner-border text-center" style={{width: '3rem', height: '3rem'}} role="status">
                            <span className="visually-hidden">{singleProducts.loading}</span>
                        </div> 
                    </div>
                ) : (
                    <h1 className='text-center mt-5'>{singleProducts.errorPage}</h1>
                )
            }
        </div>
    )
}

export default SingleProduct