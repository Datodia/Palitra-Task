import { useState } from "react"

function MyButton() {
    const [count, setCount] = useState(0)

    return (
        <>
            <button onClick={() => {
                setCount(count + 1)
            }}>click me</button>
            <h1>{count}</h1>
        </>

    )
}

export default MyButton