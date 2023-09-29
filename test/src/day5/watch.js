import React from "react"
var Watch = (props) => {
    if (props.quality >= 10) {
        return (
            <div>
                <center>
                    <div class="card watch shadow-lg mt-4 product" style={{ width: "450px" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={props.watch} class="img-fluid rounded-start mt-5 mx-5" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body product">
                                    <h4 className="card-text">{props.name}</h4>
                                    <h5 className="card-text">{"₹"}{props.price}</h5>
                                    <h5 className="card-text text-success">Available</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
    else if (props.quality <= 10 && props.quality >= 1) {
        return (
            <div>
                 <center>
                    <div class="card watch shadow-lg mt-4" style={{width:"450px"}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={props.watch} class="img-fluid rounded-start mt-5" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body product">
                                    <h4 className="card-text">{props.name}</h4>
                                    <h5 className="card-text">{"₹"}{props.price}</h5>
                                    <h5 className="card-text text-warning">Almost out of stock</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
    else if (props.quality === 0) {
        return (
            <div>
                <center>
                <div class="card watch shadow-lg mt-4" style={{width:"450px"}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={props.watch} class="img-fluid rounded-start mt-5" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body product">
                                    <h4 className="card-text">{props.name}</h4>
                                    <h5 className="card-text">{"₹"}{props.price}</h5>
                                    <h5 className="card-text text-danger">out of stock</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        )
    }

}

export default Watch;