import useFetch from "./usefetch"


function TestFetch() {
    const { data, loading,error} = useFetch(`https://jsonplaceholder.typicode.com/posts`)

    console.log(data)
    return (
        <div>
            <h1>Use Fetch Hook</h1>
            {
                loading ? <h3>Pending ! Please wait</h3> : null
            }
            {
                error ? <h3>{error}</h3> : null
            }
            {
                data && data.length ? data.map(item => <p key={item.id}>{item.title}</p>) : null
            }
        </div>
    )
}

export default TestFetch