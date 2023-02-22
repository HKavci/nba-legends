import {useState} from 'react'

const PlayerCard = (props) => {
    const {name, img, statistics} = props
    
    const [showStatistics, setShowStatistics] = useState(false)

    const handleClick = () => {
        setShowStatistics(!showStatistics)
    }

  return (
    <div onClick={handleClick} className="cards">
        {showStatistics
            ? <ul>
                <li> {statistics[0]} </li>
                <li> {statistics[1]} </li>
                <li> {statistics[2]} </li>
                <li> {statistics[3]} </li>
            </ul>
            : <img src={img} alt="" />
        }
        <h3>{name}</h3>
    </div>
  )
}

export default PlayerCard

