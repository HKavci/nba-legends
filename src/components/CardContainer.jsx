import {data} from "../helper/data.js"
import PlayerCard from "./PlayerCard.jsx"

const CardContainer = (props) => {
  const { val } = props;

  return (
    <div className="cards-container">
      {data.filter((item, index)=>{
        if (!val) {
            return <PlayerCard key={index} {...item} />
          } 
          else {
            return item.name.toLowerCase().includes(val?.toLowerCase())
          } 
      }).map((item, index) =>(
        <PlayerCard key={index} {...item} />
      ))
      }
    </div>
  );
};

export default CardContainer


