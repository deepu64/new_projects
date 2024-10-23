import { useEffect, useState } from "react";
import './scroll_style.css'



export default function ScrollPercentage({ url }) {

    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [value, setValue] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    async function handleGetValue(geturl) {
        try {
            setLoading(true);
            const response = await fetch(geturl);
            const data = await response.json();
            if (data && data.products && data.products.length > 0) {
                setValue(data.products);
                setLoading(false);
            }

        } catch (e) {
            setErrorMessage(e.message)
            setLoading(false);
        }
    }

    function handleScrollPercentage() {
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        )

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100)
    }

    useEffect(() => {
        handleGetValue(url)
    }, [url])

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);

        return () => {
            window.removeEventListener('scroll', () => { })
        }

    }, [])

    console.log(value, scrollPercentage)

    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div
                        className="current-progress-bar"
                        style={{ width: `${scrollPercentage}%` }}
                    ></div>
                </div>
            </div>

            <div className="data-container">
                {
                    value && value.length ?
                        value.map(item => <p key={item.id}>{item.title}</p>)
                        : null
                }
            </div>
        </div>
    )
}