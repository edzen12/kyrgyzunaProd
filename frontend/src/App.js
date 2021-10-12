import { Redirect, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import cls from './App.module.css';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import About from './pages/About';
import Certificate from './pages/ Сertificate';
import News from './pages/News';
import Contacts from './pages/Contacts';
import { Provider } from 'react-redux';
import store from './redux/store';
import SingleNews from './pages/News/SingleNews';
import NewProducts from './pages/NewProducts';
import SingleProduct from './pages/NewProducts/SingleProduct/SingleProduct';



const App = () =>{
    return(
        <div className={cls.root}>
            <Provider store={store}>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/products/:categoryId" exact component={NewProducts} />
                    <Route path='/product/:id' exact component={SingleProduct} />
                    <Route path="/about" component={About} />
                    <Route path="/news" exact component={News} />
                    <Route path="/news/:id" component={SingleNews} />
                    <Route path="/certificate" component={Certificate} />
                    <Route path="/contacts" component={Contacts} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </Provider>
        </div>
    )
}

export default App