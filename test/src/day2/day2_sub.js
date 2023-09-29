import React from "react";
import {link} from "react-router-dom";

const Fun=(props)=>{
    if(props.image === "./assests/assests/img1.jpg"){
    return(
        <>
        <div className="card"  style={{marginLeft:"300px"}}>
            <img className="card-img-top" src={props.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">PARIS</h5>
                <p className="card-text">Paris is the department with the highest proportion of highly educated people</p>
                <a href="#" className="btn btn-dark">Read More</a>
            </div>
        </div>
        </>
    );
}
if(props.image === "./assests/assests/img2.jpg"){
    return(
        <>
        
        <div className="card">
            <img className="card-img-top" src={props.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Bangkok</h5>
                <p className="card-text">Paris is the department with the highest proportion of highly educated people</p>
                <a href="#" className="btn btn-dark">Read More</a>
            </div>
        </div>
        </>
    );
}
if(props.image === "./assests/assests/img3.jpg"){
    return(
        <>
        <div className="card">
            <img className="card-img-top" src={props.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Malaysia</h5>
                <p className="card-text">Paris is the department with the highest proportion of highly educated people</p>
                <a href="#" className="btn btn-dark">Read More</a>
            </div>
            </div>
        </>
    );
}
if(props.image === "./assests/assests/img4.jpg"){
    return(
        <>
       
        <div className="card">
            <img className="card-img-top" src={props.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Indonesia</h5>
                <p className="card-text">Paris is the department with the highest proportion of highly educated people</p>
                <a href="#" className="btn btn-dark">Read More</a>
            </div>
        </div>
        </>
    );
}
}



export default Fun;