import {menu_list} from "../../assets/assets.js"
import './ExploreMenu.css'
import PropTypes from "prop-types"

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Equipment Categories</h1>
            <p className='explore-menu-text'>You&#39;ll see a list of different equipment categories, such as Tractors, Tillage Equipment, Seeding Equipment, and more.Clicking on a category will display the specific equipment items we have available under that category</p>

            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev=>prev===item.menu_name?"All": item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name? "active" : ""} src={item.menu_image} alt="" />

                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}
ExploreMenu.propTypes = {
    category: PropTypes.string.isRequired, // Define category prop as required string
    setCategory: PropTypes.func.isRequired, // Define setCategory prop as required function
  };
export default ExploreMenu
