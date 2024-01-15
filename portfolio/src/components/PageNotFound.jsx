import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const PageNotFound = () => {

    const rout = useNavigate()
    const [count , setCount] = useState(4)

    if(count > 0 ){
        setTimeout(() => {
            setCount(count - 1)
        }, 1000)
    }else{
        rout("/")
    }

    return (
        <>
            <h1 style={{fontSize : '30px', fontWeight:"600"}}>Page Not Found Redirecting you to the HomePage in {count} sec</h1>
        </>
    )
}

export default PageNotFound