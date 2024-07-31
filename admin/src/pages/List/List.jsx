import './List.css'
import { useEffect, useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import PropTypes from "prop-types"
const List = ({url}) => {

  const [list, setList ] = useState([]);


  const fetchList = async () => {
    const responsce = await axios.get(`${url}/api/equip/list`)
    
    if (responsce.data.success){
      setList(responsce.data.data)
    }else{
      toast.error("Error")
    }
  }

  const removeFood = async(foodId)=>{
    const response = await axios.post(`${url}/api/equip/remove`, {id:foodId})
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }else{
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList();
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>No.</b>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index)=>{
          return (
            <div key={index} className='list-table-format' >
              <p>{index + 1}</p>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>removeFood(item._id)}  className='cursor' >X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
List.propTypes = {
  url: PropTypes.string.isRequired, // Adjust type as needed
};
export default List
