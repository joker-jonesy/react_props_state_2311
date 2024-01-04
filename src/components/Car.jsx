import {useState} from "react";

function Car({car, product}){

    const [speed, setSpeed] = useState(0)

    const speedUp=()=>{
        if(speed>car.tf||isNaN(speed)){
            setSpeed("You crashed");
        }else{
            setSpeed(speed+car.ts);
        }
    }

    const seriesColor =()=>{
        if(car.type==="classics"){
            return {
                backgroundColor: "green",
                color:"white"
            }
        }else{
            return {
                backgroundColor: "yellow",
            }
        }
    }

    return(
        <div className={"car"} style={seriesColor()}>
            <h1>{car.name}</h1>
            <h3>Series:{car.type}</h3>
            <h3>Packaging: {product}</h3>
            {/*<button onClick={()=>setSpeed(speed+car.ts)}>Speed Up</button>*/}
            <button onClick={speedUp}>Speed Up</button>
            <p>Speed: {speed}</p>
        </div>
    )
}

export default Car;