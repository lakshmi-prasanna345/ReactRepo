import { Bar } from "react-chartjs-2";
import {Link} from "react-router-dom";
import { Chart,LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip} from "chart.js";
Chart.register(
    LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip
)
const labels=['jan','feb','mar','apr','may','june','july','aug','sept','oct','nov','dec'];
const options={
    plugins:{
        legend:{
            position:"top"
        },
        title:{
            display:true,
            text:"expense Tracker"
        }
    }
}
const data={
    labels,
    datasets:[
        {label:"2020 expense",
        data:[1000,5000,2000,9000,5000,8000,6000,2000,6000,7000,10000,5000],
        backgroundColor:"blue"

        },
        {
            label:"2021 expense",
            data:[2000,3000,9000,8000,4000,7000,1000,2800,9000,5000,7000,10000],
            backgroundColor:"green"

        }
    ]
}
function Barchart(){
    return(
        <div>
             <nav class="navbar navbar-dark bg-dark text-white">
                <ul className="navbar-nav">
                    <Link to="/" className="mx-4 style-type-none nav-link" ><li>Home</li></Link>
                    <Link to="/images" className="mx-4 style-type-none nav-link" ><li>Images</li></Link>
                    <Link to="/data" className="mx-4 style-type-none nav-link" ><li>Employee</li></Link>
                    <Link to="/counter" className="mx-4 style-type-none nav-link" ><li>Counter</li></Link>
                    <Link to="/products_watch" className="mx-4 style-type-none nav-link" ><li>Products_watch</li></Link>
                    <Link to="/signup" className="mx-4 style-type-none nav-link" ><li>Signup</li></Link>
                    <Link to="/charts" className="mx-4 style-type-none nav-link" ><li>charts</li></Link>
                    <Link to="/products_table" className="mx-4 style-type-none nav-link" ><li>products_table</li></Link>
                </ul>
            </nav>
        <div>
            <Bar options={options} data={data}/>
        </div>
        </div>
    )
}
export default Barchart;