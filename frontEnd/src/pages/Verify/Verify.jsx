import { useNavigate, useSearchParams } from 'react-router-dom'
import './Verify.css'
import { useContext, useEffect } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';

const Verify = () => {


    const [serachParams, seSearchParams] = useSearchParams();
    const success = serachParams.get("success")
    const orderId = serachParams.get("orderId")
    const {url} = useContext(StoreContext)
    const navigate = useNavigate();

    const verifyPayment = async () =>{
        const response = await axios.post(url+"/api/order/verify", {success, orderId});
        if (response.data.success) {
            navigate("/myorders");
        }else{
            navigate("/")
        }
    }

    useEffect(()=>{
        verifyPayment()
    },[])

  return (
    <div className='verify'>
      <div className="spinner"></div>
    </div>
  )
}

export default Verify
