import PropTypes from 'prop-types';
import './CardItem.css'

import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import { assert } from '../../assets/assets';
import TextTruncator from './TextTruncator';
const CardItem = ({ id, name, price, description, image }) => {


  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className='card-item'>
      <div className="card-item-img-container">
        <img className='card-item-image' src={url + "/images/" + image} alt='' />
        {!cartItems[id]
          ? <img src={assert.plus} className="img-icons add" onClick={() => addToCart(id)} />
          : <div className='card-item-counter'>
            <img src={assert.minus} onClick={() => removeFromCart(id)} className="img-icons minus" />
            <p>{cartItems[id]}</p>
            <img src={assert.plus} onClick={() => addToCart(id)} className="img-icons plus" />
          </div>

        }
      </div>
      <div className="card-item-info">
        <div>

          <div className="card-item-name-rating">
            <p>{name}</p>
            {/* <img src={assert.menu_3} alt=''/> */}

          </div>
          
          <p className="card-item-desc"><TextTruncator text={description} /></p>
        </div>
        <p className="card-item-price">${price}</p>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CardItem;
