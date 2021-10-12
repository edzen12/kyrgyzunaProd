import news from './news/newsReducer'
import singleNews from './news/singleNewsReducer';
import products from './products/productsReducer';
import categories from './products/categoryReducer';
import langs from './languages/languagesReducer';
import singleProducts from './products/singleProductsReducer'

const mainReducer = {
    news,
    singleNews,
    products,
    categories,
    langs,
    singleProducts
}

export default mainReducer