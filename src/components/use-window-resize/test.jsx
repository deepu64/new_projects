import useWindowResize from "."


export default function TestWindowResize () {
    const windowSize = useWindowResize()
    const {width,height} = windowSize
    return(
        <div>
            <h1>Use Window Resize</h1>
            <p>
                width is - {width}
            </p>
            <p>
                height is - {height}
            </p>
        </div>
    )
}