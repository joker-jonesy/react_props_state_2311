import {hotwheels} from "./hotwheels.js";
import Car from "./components/Car.jsx";
function App() {

    const eles=hotwheels.map((itm)=>
        <Car key={itm.id} car={itm} product={'short'}/>
    )

    return (
        <>
            <nav>Nav</nav>
            <div id={"wrapper"}>{eles}</div>
        </>
    )
}

export default App
