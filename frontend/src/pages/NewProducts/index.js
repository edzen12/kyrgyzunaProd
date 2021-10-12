import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction, getAllCategoriesAction } from '../../redux/actions/productsActions';
import { postNewForm } from '../../API/index'
import './NewProducts.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { HashLink } from 'react-router-hash-link'
import { NavLink, useParams } from 'react-router-dom';


const NewProducts = () => {
    const [limit, setLimit] = useState(6);
    const dispatch = useDispatch();
    const {data} = useSelector(s => s.products);
    const {selectedLang: {products}, selectedLangSlug} = useSelector(s => s.langs);
    const {categories, categorySuccess} = useSelector(s => s.categories);
    // router
    const {categoryId} = useParams();
    // Form inputs
    const [fullname, setFullname] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState();
    const [formLoading, setFormLoading] = useState(false);

    useEffect(() => {
        dispatch(getAllProductsAction({
            category: categoryId,
            limit
        }));
        dispatch(getAllCategoriesAction({
            limit: 50
        }));
    }, [dispatch, limit, categoryId]);

    const cuttedStr = str => {
        if(str){
            const splittedStr = str.split(' ');
            if(splittedStr.length > 4){
                const slicedStr = splittedStr.slice(0, 4);
                return slicedStr.join(' ');
            }else{
                return str;
            }
        }else{
            return str;
        }
    }

    const cuttedDescription = str => {
        if(str){
            const splittedStr = str.split('');
            if(splittedStr.length > 100){
                const slicedStr = splittedStr.slice(0, 100);
                return slicedStr.join('') + "...";
            }else{
                return str;
            }
        }else{
            return str
        }
    }

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

    const moreProducts = e => {
        e.preventDefault();
        if(data.count >= limit){
            setLimit(prev => prev + 3);
        }
    }

    return (
        <>
            <div className="banner">    
                <div className="mai">
                    <div className="bannerT">
                        <Zoom bottom>
                            <h1>{products.title}</h1>
                        </Zoom>
                    </div>
                </div>
            </div>















            
            <main className='products_bg'>
                <div className='products_row m-0'>
                    <div className='product_layout'>
                        <div className="product_container">
                            {
                                (data !== null && data?.results.length !== 0) ? (
                                    data?.results.map(item => (
                                        <Zoom bottom key={item.id}>
                                            {
                                                selectedLangSlug === 'RU' ? (
                                                    <div className="product_item mb-5">
                                                        <div className="product_title">
                                                            <p title={item.title}>{cuttedStr(item.title)}</p>
                                                        </div>
                                                        <div className="product_img" style={{background: `url('${item.image}') center / cover no-repeat`}}>
                                                        </div>
                                                        <div className="product_info">
                                                            <p>{cuttedDescription(item.description)}</p>
                                                            <div className="text-center pt-3">
                                                                <HashLink to={`/product/${item.id}/#nav`}>Подробнее...</HashLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="product_item mb-5">
                                                        <div className="product_title">
                                                            <p title={item.title_en}>{cuttedStr(item.title_en)}</p>
                                                        </div>
                                                        <div className="product_img" style={{background: `url('${item.image}') center / cover no-repeat`}}>
                                                        </div>
                                                        <div className="product_info">
                                                            <p>{cuttedDescription(item.description_en)}</p>
                                                            <div className="text-center pt-3">
                                                                <HashLink to={`/product/${item.id}/#nav`}>More...</HashLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            
                                        </Zoom>
                                    ))
                                ) : (data === null) ? (
                                    <div className="spinner-border m-auto" style={{width: '3rem', height: '3rem'}} role="status">
                                        <span className="visually-hidden">{products.loading}</span>
                                    </div>
                                )
                                : (
                                    <h1 className='text-center m-auto'>{products.emptyProducts}</h1>
                                )
                            }
                        </div>
                    </div>
                    <div className='mt-5 categoryMenu'>
                        <div className='card widthCard'>
                            <div className='card-body'>
                                <h4 className='text-center mb-4 categoryTitle'>{products.categoriesTitle}</h4>
                                <ul className="list-group list-group-flush">
                                    {
                                        categorySuccess === null ? (
                                            <div className="spinner-border m-auto" style={{width: '3rem', height: '3rem'}} role="status">
                                                <span className="visually-hidden">{products.loading}</span>
                                            </div>
                                        ) : !categorySuccess ? (
                                            <div>
                                                <h5 className='text-center'>{products.error}</h5>
                                            </div>
                                        ) : (
                                            categories.results.length !== 0 ? (
                                                categories?.results.map(({name, name_en, id}) => (
                                                    <li className="list-group-item categoryLinkItem" key={id}>
                                                        <NavLink to={`/products/${id}`}>
                                                            {selectedLangSlug === 'RU' ? name : name_en}
                                                        </NavLink>
                                                    </li>
                                                ))
                                            ) : (
                                                <p className='text-center'>{products.emptyCategories}</p>
                                            )
                                        )
                                    }
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                

                {
                    data?.count > 6 ? (
                        <div className="more text-center pb-5">
                            <button onClick={moreProducts} disabled={data?.count >= limit ? false : true} className="btn btn-lg product_more_btn">{products.moreProductsBtn}</button>
                        </div>
                    ) : (
                        null
                    )
                }
            </main>

















            {/* Form */}
            <div className="contBack">
                <div className="center mt-0" id="form">
                    <Fade bottom>
                        <div className="login-box">
                            <h2>{products.form.title}</h2>
                            <form onSubmit={formSubmit}>
                                <div className="user-box">
                                    <input value={fullname} onChange={e => setFullname(e.target.value)} type="text" name="" required="" />
                                    <label>{products.form.fullName}</label>
                                </div>
                                <div className="user-box">
                                    <input value={number} onChange={e => setNumber(e.target.value)} type="text" name="" required="" />
                                    <label>{products.form.contacts}</label>
                                </div>
                                <div className="user-box">
                                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" name="" required="" />
                                    <label>{products.form.email}</label>
                                </div>
                                <div className="user-box">
                                    <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder={products.form.comment}></textarea>
                                    <label></label>
                                </div>
                                <button disabled={formLoading} type="submit">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    {products.form.submit}
                                </button>
                            </form>
                        </div>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default NewProducts