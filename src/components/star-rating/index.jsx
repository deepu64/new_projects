import { useState } from "react"
import { FaStar } from "react-icons/fa"
import "./style.css"



function StarRating ({noOfStar=5}) {

    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);

    function handleClick (index) {
        setRating(index)
        console.log("click",index)
    }

    function handleMouseEnter (index) {
        setHover(index)
        console.log("mouse enter",index)
    }

    function handleMouseLeave () {
        setHover(rating)
        console.log("mouse leave", rating)
    }
    return(
        <div>
            {
                [...Array(noOfStar)].map((_,index) => {
                    index += 1
                    return <FaStar
                    key={index}
                    className={index <= (hover || rating) ? "active" : "inactive"}
                    onClick={()=> handleClick(index)}
                    onMouseEnter={()=> handleMouseEnter(index)}
                    onMouseLeave={()=> handleMouseLeave()}
                    size={40}
                    />
                })
            }
        </div>
    )
}

export default StarRating