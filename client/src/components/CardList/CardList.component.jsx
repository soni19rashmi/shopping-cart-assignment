
import Card from '../Card/Card.component';

import './CardList.style.scss';

const CardList = ({products}) => {

    return (
        <div className='card-list'>
            {products
                .map(product => (
                    <Card key={product.id} product={product} />
                ))}
        </div>
    )
};

export default CardList;
