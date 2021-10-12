import './NavBar.css';
import LogoWhite from '../../assets/logowhite.png';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { enLangAction, ruLangAction } from '../../redux/actions/languageAction';
import { getAllCategoriesAction } from '../../redux/actions/productsActions';
import { HashLink } from 'react-router-hash-link'
import { useEffect } from 'react';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';
import { phones } from '../../business';

const NavBar = () => {
    const dispatch = useDispatch();
    const {selectedLangSlug, selectedLang: {navbar}} = useSelector(s => s.langs);
    const {categories, categorySuccess} = useSelector(s => s.categories);

    const handleChangeLangEn = e => {
        e.preventDefault();
        dispatch(enLangAction());
        localStorage.setItem('kyrgyzUnaaLang', 'RU')

        closeCollase(e);
    }

    const handleChangeLangRu = e => {
        e.preventDefault();
        dispatch(ruLangAction());
        localStorage.setItem('kyrgyzUnaaLang', 'EN')

        closeCollase(e);
    }

    useEffect(() => {
        dispatch(getAllCategoriesAction({
            limit: 50
        }));
    }, [dispatch])

    useEffect(() => {
        const languageState = localStorage.getItem('kyrgyzUnaaLang');
        languageState === 'RU' ? dispatch(enLangAction()) : dispatch(ruLangAction());
    }, [dispatch])

    const closeCollase = e => {
        e.preventDefault();

        const collapse = document.querySelector('#navbarSupportedContent');
        collapse.classList.remove('show');
    }

    const showDropdown = () => {
        document.querySelector('.productDropDown').classList.add('show')
    }

    const closeDropdown = () => {
        document.querySelector('.productDropDown').classList.remove('show')
    }


    return (
        <Bounce top>
            <header>
                <nav id="nav" className=" navbar navbar-expand-lg navbar-dark">
                    <div className="container containerFluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" to="/">
                            <img src={LogoWhite} width="60px" alt="Logo" />
                        </Link>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li onClick={closeCollase} className="nav-item">
                                    <NavLink exact className="nav-link" aria-current="page" to='/'>{navbar.main}</NavLink>
                                </li>
                                {
                                    categorySuccess === false ? (
                                        null
                                    ) : (
                                        categories?.results.length === 0 ? (
                                            null
                                        ) : (
                                            <li onMouseOut={closeDropdown} onMouseOver={showDropdown} onClick={closeCollase} className="nav-item productsLink">
                                                <NavLink exact className="nav-link dropdown-toggle" aria-current="page" to='/products' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{navbar.products}</NavLink>
                                                <Flip top>
                                                    <ul className="dropdown-menu productDropDown" aria-labelledby="navbarDropdown">
                                                        {
                                                            categories?.results.map(item => (
                                                                <li onClick={closeDropdown} key={item.id}>
                                                                    <Link className='dropdown-item productDropdownLink' to={`/products/${item.id}`}>
                                                                        {selectedLangSlug === 'RU' ? item.name : item.name_en}
                                                                    </Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </Flip>
                                            </li>
                                        )
                                        
                                    )
                                }
                                <li onClick={closeCollase} className="nav-item">
                                    <NavLink exact className="nav-link" aria-current="page" to='/about'>{navbar.about}</NavLink>
                                </li>
                                <li onClick={closeCollase} className="nav-item">
                                    <NavLink exact className="nav-link" aria-current="page" to='/news'>{navbar.news}</NavLink>
                                </li>
                                <li onClick={closeCollase} className="nav-item">
                                    <NavLink exact className="nav-link" aria-current="page" to='/certificate'>{navbar.certificate}</NavLink>
                                </li>
                                <li onClick={closeCollase} className="nav-item">
                                    <NavLink exact className="nav-link" aria-current="page" to='/contacts'>{navbar.contacts}</NavLink>
                                </li>
                            </ul>
                            <ol className="navbar-nav rightSideNavigation">
                                <li className="nav-item dropdown">
                                    <button className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        {selectedLangSlug}
                                    </button>
                                    <ul className="dropdown-menu"  aria-labelledby="navbarDropdown">
                                        <li>
                                            <button onClick={handleChangeLangEn} className="dropdown-item">
                                                ENG
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={handleChangeLangRu} className="dropdown-item">
                                                RU
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <HashLink to="/contacts/#map-content" className="nav-link">
                                        <i className="fa fa-clock"></i>
                                        08:00 - 18:00
                                    </HashLink>
                                </li>
                                <li className="nav-item">
                                    <a href={`tel:${phones.first}`} className="nav-link tel">
                                        <i className="fa fa-phone"></i>
                                        <span>
                                            {phones.first}
                                        </span>
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </nav>
            </header> 
        </Bounce>

    )
}

export default NavBar;