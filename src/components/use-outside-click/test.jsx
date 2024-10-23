import { useRef, useState } from "react"
import useOutsideClick from "."


export default function ClickOutSide() {
    const [showContent, setShowContent] = useState(false)
    const ref = useRef()
    useOutsideClick(ref,()=>{
        setShowContent(false)
    }) 

    return (
        <div ref={ref}>
            {
                showContent ? <div>
                    <h1>This is a Random Text</h1>
                    <p>You have to click ouside.
                    in order to close it.</p>
                </div> : <button onClick={() => setShowContent(true)}>Show Content</button>
            }
        </div>
    )
}