import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Sidebar.style.scss';

const Sidebar = ({categories}) => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='sidebar'>
            <div></div>
            <ul>
                {categories.map(category => (
                    <li key={category.key}>
                        <NavLink
                            to={`/products/${category.id}`}
                            className={({isActive}) => 'category' + (isActive ?' active' : '')}
                        >
                            {category.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;