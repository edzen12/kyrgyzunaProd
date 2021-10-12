import { API } from './api';
import { newsRoutes, productsRoutes, formRoute } from './routes';

// News
export const getAllNews = params => API.get({
    url: newsRoutes.getAll,
    params,
})

// Single News
export const getSingleNews = id => API.get({
    url: `${newsRoutes.single}/${id}`,
})


// Products
export const getAllProducts = params => API.get({
    url: productsRoutes.getAll,
    params
})

// Single product

export const getSingleProducts = id => API.get({
    url: `${productsRoutes.single}${id}`,
})

// Categories
export const getAllCategory = params => API.get({
    url: productsRoutes.category,
    params
})

// Post a form
export const postNewForm = postData => API.post({
    url: formRoute,
    data: postData
})