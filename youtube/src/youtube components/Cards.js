import React from "react";
import Home from "./home";
import Images from "./images";
export default function Cards(props) {
    return (
        <div>
            <div className="card card-image" style={{ width: "19rem", borderRadius: "15px", border: "1px solid white" }}>
                <img className="card-img-top" src={props.pic} alt="Card image cap" style={{ borderRadius: "15px", height: "190px" }} />
                <div className="card-body img-body" >
                    <div className='img-profile'>
                        <img src='https://e7.pngegg.com/pngimages/269/275/png-clipart-gemini-logo-gemini-tv-television-show-television-channel-gemini-movies-gemini-miscellaneous-television-thumbnail.png' className='profile'></img>
                        {/* <AccountCircleIcon className='profile'/> */}
                    </div>
                    <div className='img-data'>
                        <span>This Page belongs to the kushi |created by Lucky</span><br></br>
                        <span className='text-muted'  >Star MAA</span><br></br>
                        <span className='text-muted'>98M views.2 months ago</span>
                    </div>
                    <div className='img-dots'>
                        {/* <MoreVertIcon /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}