import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CardList from '../../components/CardList/CardList.component';
import Sidebar from '../../components/Sidebar/Sidebar.component';

import './Products.style.scss';

const ProductPage = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        Promise.allSettled([
            fetchProducts(),
            fetchCategories()
        ]).finally(() => setLoading(false));
    }, []);

    function fetchProducts(category) {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(products => setProducts(products));
    }

    function fetchCategories() {
        fetch('http://localhost:5000/categories')
            .then(response => response.json())
            .then(categories => setCategories(categories
                .filter(category => category.enabled)
                .sort((category1, category2) => category1.order - category2.order)
            ));
    }

    return (
        <div className='page product-page'>
            {loading && <div>Loading</div>}
            <div className='products-container'>
                <Sidebar categories={categories} />
                {!!products.length && (
                    <CardList
                        products={category ? products.filter(product => product.category === category) : products} />
                )}
            </div>
        </div>
    );
}

export default ProductPage;