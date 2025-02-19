import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import Header from "../../components/Header/Header"
import "./Home.css"
import CardDisplay from "../../components/cardDisplay/CardDisplay"
import AppDownload from "../../components/AppDownload/AppDownload"

const Home = () => {

    const [category, setCategory] = useState("All");
   
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <CardDisplay category={category}/>
      {/* <AppDownload/> */}
    </div>
  )
}

export default Home
