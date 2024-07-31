import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Add.css'

import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {

    
    const [image, setImage] = useState(false);

    const [data, setData] = useState({
        name: '',
        description: '',
        price: "",
        category: "Salad"
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]:value}))
    }
    
    const onSubitHandle = async (event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)
        const response = await axios.post(`${url}/api/equip/add`, formData)
        if (response.data.success){
            setData({
                name: '',
                description: '',
                price: "",
                category: "Salad"
            })
            setImage(false)
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubitHandle} >
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label className='label' htmlFor="image">
                        {image?<img className='add-img-upload' src={URL.createObjectURL(image)}/>:<div><i className="fa-solid fa-cloud-arrow-up"></i><p>Upload</p></div>}
                        
                        
                    </label>
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Procuct name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Pr oduct category</p>
                        <select onChange={onChangeHandler} name="category">
                            <option value="">Select</option>
                            <option value="tractors">Tractors</option>
                            <option value="harvesting">Harvesting</option>
                            <option value="planting">Planting</option>
                            <option value="seeding">Seeding</option>
                            <option value="Advance">Advance</option>
                            <option value="tillage">Tilage</option>
                            <option value="others">Others</option>

                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product price</p>
                        <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='20' />
                    </div>
                </div>
                <button type='submit' className='add-btn'>Add</button>
            </form>
        </div>
    )
}

export default Add
