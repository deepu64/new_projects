import { useEffect, useState } from "react"
import User from "./User";
import './styles.css'



function ProfileFinder () {

    const [serachInput,setSeachInput] = useState('deepu64');
    const [userData,setUserData] = useState(null);
    const [loading,setLoading] = useState(false);

    async function handleFetchUser () {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${serachInput}`);
        const data = await res.json();
        console.log(data)

        if(data){
            setUserData(data)
            setLoading(false)
            setSeachInput('')
        }
    }

    function handleSubmit () {
        handleFetchUser()
    }

    useEffect(()=>{
        handleFetchUser()
    },[])

    if(loading){
        return <h1>Loading Data ! Please wait</h1>
    }

    return(
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input 
                name="search-by-username"
                type="text"
                placeholder="Search Github Username ..."
                value={serachInput}
                onChange={(e)=>setSeachInput(e.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            <div>
                {
                    userData !==null ? <User user={userData}/> : null
                }
            </div>
        </div>
    )
}

export default ProfileFinder