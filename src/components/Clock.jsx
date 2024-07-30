import { useState } from "react"

function Clock() {
    const [time,setTime] = useState(new Date().toLocaleTimeString())
    

    setInterval(()=>{
        setTime(new Date().toLocaleTimeString())
    },1000) //Anotar sobe o toLocaleTimeString
    
    
    return (
        <div id="clock">
            {time}
        </div>
    )
}

export default Clock