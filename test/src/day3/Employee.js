import React from "react";
const Employee=(props)=>{
    if(props.name == "nagabushan reddy" || props.name == "manu"){
        return(
            <>
            {
            <div id="spl" class="card bg-success mt-4">
                <div class="card-body">
                <h5 class="card-title">Welcome To {props.name}</h5>
                <h6 class="card-text">Course:MBBS</h6>
                <p>"name":{props.name},"course":"MBBS"</p>
                </div>
            </div>
    } 
        </>
        )
    }
    
}
export default Employee;