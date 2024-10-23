import { useEffect, useState } from "react"
import './style.css'


function LoadMoreData() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const result = await response.json();
            console.log(result)
            if (result && result.products && result.products.length) {
                if (count === 0) {
                    setProducts(result.products);
                } else {
                    setProducts(prevProducts => [...prevProducts, ...result.products]);
                }
                setLoading(false)
            }

        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()

    }, [count])

    useEffect(() => {
        if (products && products.length === 100) setDisableButton(true)
    }, [products])

    if (loading) {
        return <div>Loading Data Please Wait!...</div>
    }
    return (
        <div className="load-more-container">
            <div className="product-container">
                {products && products.length ?
                    products.map((item, index) => (
                        <div className="product" key={index}>
                            <img src={item.thumbnail} alt={item.title}></img>
                            <p>{item.title}</p>
                        </div>
                    ))
                    : null}
            </div>
            <div className="buttton-container">
                <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
                {disableButton ? <h2>You have reached the limit of 100 products</h2> : null}
            </div>
        </div>
    )
}

export default LoadMoreData