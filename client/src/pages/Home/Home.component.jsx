import React, { useEffect, useState } from 'react';

import ActionButton from '../../components/ActionButton/ActionButton.component';

import './Home.style.scss';

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const [banners, setBanners] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        Promise.allSettled([
            fetchBanners(),
            fetchCategories()
        ]).finally(() => setLoading(false));
    }, []);

    function fetchBanners() {
        fetch('http://localhost:5000/banners')
            .then(response => response.json())
            .then(banners => setBanners(banners));
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
        <div className="page home-page">
            {loading && <div>Loading</div>}
            
            {!!banners.length && <div className="banner">
                <img src={banners[0].bannerImageUrl} alt="banner Img" className="banner-image" />
            </div>}
            {
                categories.map(category => (
                    <div className="category-card" key={category.key}>
                        <div className="content">
                            <h2>{category.name}</h2>
                            <div className="description">{category.description}</div>
                            <ActionButton>Explore&nbsp;{category.key}</ActionButton>
                        </div>
                        <img src={category.imageUrl} alt={category.key} className="category-image" />
                    </div>
                ))
            }
        </div>
    );
}

export default HomePage;