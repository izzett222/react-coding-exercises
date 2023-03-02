import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div className="flex flex-col items-center gap-5">
            <p>Button has been clicked: {count} times</p>
            <button className="px-4 py-1 bg-pink-200 rounded" onClick={handleClick}>Click me</button>
        </div>
    )
}