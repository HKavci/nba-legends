import logo from "../assets/nba-logo.png"
import { useState } from "react"
import CardContainer from "./CardContainer"

const Header = () => {

  const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
      setInputValue(e.target.value)
    }

  return (
    <div className="header-container">
        <img src={logo} alt="" />
        <h1>NBA Legends</h1>
        <form action="">
            <input onChange={handleChange} className="input" type="search" value={inputValue} placeholder="Search player..." />
        </form>
        <CardContainer val={inputValue} />
    </div>
  )
}

export default Header