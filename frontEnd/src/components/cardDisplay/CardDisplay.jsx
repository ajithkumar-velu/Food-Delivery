import { useContext } from 'react'
import './CardDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import CardItem from '../CardItem/CardItem'
import PropTypes from 'prop-types';

const CardDisplay = ({ category }) => {
  const { card_list } = useContext(StoreContext)

  return (
    <div className='card-display' id='card-display'>
      <h1>Equipment</h1>
      <div className="card-display-list">
        {card_list.map((item, index) => {
          if(category==="All" || category===item.category){

            return <CardItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
        })}
      </div>
    </div>
  )
}

CardDisplay.propTypes = {
  category: PropTypes.string, // Allow category to be optional (or specify a specific type if needed)
}

export default CardDisplay
