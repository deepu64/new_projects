import { useEffect, useState } from "react"


const RandomColor = () => {

    const [typeOfColor,setTypeOfColor] = useState('hex')
    const [color,setColor] = useState("#000000")

    

    const randomNumber = (length) => {
        return Math.floor(Math.random() * length)
    }
    
    const generateRandomHexColor = () => {
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = '#'
        for(let i = 0; i < 6; i++){
            hexColor= hexColor + hex[randomNumber(hex.length)]
        }
        setColor(hexColor)
        console.log(hexColor)
    }

    const generateRandomRgbColor = () => {
        const r = randomNumber(256);
        const g = randomNumber(256);
        const b = randomNumber(256);

        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(()=>{
        if(typeOfColor === 'rgb')generateRandomRgbColor()
        else generateRandomHexColor()
    }, [typeOfColor])

    return (
        <div style={{
            height:"100vh",
            width:"100vw",
            background: color
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Hex color</button>
            <button onClick={() => setTypeOfColor('rgb')}>RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? generateRandomHexColor : generateRandomRgbColor}>Generate Random Color</button>
            <div style={{
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '60px',
                color: '#fff',
                marginTop: '50px',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <h3>{typeOfColor === 'rgb' ?'RGB Color' : 'HEX Color'}</h3>
                <h4>{color}</h4>
            </div>
        </div>
    )
}

export default RandomColor