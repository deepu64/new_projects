import { useState } from "react"
import QRCode from "react-qr-code"


function QrCodeGenerator () {

    const [qrCode,setQrCode] = useState('')
    const [input,setInput] = useState('')

    function handleQrCodeGenerate () {
        setQrCode(input)
        setInput('')
    }

    return(
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input type="text" placeholder="type here" name="qr-code-value" value={input} onChange={(e)=>setInput(e.target.value)}></input>
                <button disabled = {input && input.trim() !== '' ? false : true} onClick={handleQrCodeGenerate}>Generate QR Code</button>
            </div>
            <div>
                <QRCode id="qr-code-value" value={qrCode} size={80} bgColor="#fff"/>
            </div>
        </div>
    )
}

export default QrCodeGenerator