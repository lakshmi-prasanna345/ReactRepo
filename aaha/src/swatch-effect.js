import React, { useState } from "react";

export default function SwatchBook() {
    const [carddisplay, setcarddisplay] = useState({
        card1: "none",
        card2: "none",
        card3: "none",
        card4: "none",
        card5: "none",
        card6: "none",
        card7: "none",
        card8: "none",
        card9: "none",
        card10: "none",
        card11: "none",
        card12: "none",
    });
    const [cardtransform, setcardtransform] = useState({
        start: "",
        card1: "",
        card2: "",
        card3: "",
        card4: "",
        card5: "",
        card6: "",
        card7: "",
        card8: "",
        card9: "",
        card10: "",
        card11: "",
        card12: ""
    })
    const handleeffect = () => {
        setcarddisplay({
            card1: "block",
            card2: "block",
            card3: "block",
            card4: "block",
            card5: "block",
            card6: "block",
            card7: "block",
            card8: "block",
            card9: "block",
            card10: "block",
            card11: "block",
            card12: "block"
        });
        setcardtransform({

            card12: "rotate(-180deg)",
            card11: "rotate(-165deg)",
            card10: "rotate(-150deg)",
            card9: "rotate(-135deg)",
            card8: "rotate(-120deg)",
            card7: "rotate(-105deg)",
            card6: "rotate(-90deg)",
            card5: "rotate(-75deg)",
            card4: "rotate(-59deg)",
            card3: "rotate(-45deg)",
            card2: "rotate(-28deg)",
            card1: "rotate(-9deg)",
            start: "rotate(10deg)",

        })

    }
    const handleleave = () => {
        console.log("hello")
        setcarddisplay({
            card1: "none",
            card2: "none",
            card3: "none",
            card4: "none",
            card5: "none",
            card6: "none",
            card7: "none",
            card8: "none",
            card9: "none",
            card10: "none",
            card11: "none",
            card12: "none",
        })
        setcardtransform({
            card12: "rotate(0deg)",
            card11: "rotate(0deg)",
            card10: "rotate(0deg)",
            card9: "rotate(0deg)",
            card8: "rotate(0deg)",
            card7: "rotate(0deg)",
            card6: "rotate(0deg)",
            card5: "rotate(0deg)",
            card4: "rotate(0deg)",
            card3: "rotate(0deg)",
            card2: "rotate(0deg)",
            card1: "rotate(0deg)",
            start: "rotate(0deg)",

        })

    }
    return (
        <div  style={{backgroundColor:"black",height:"100vh"}}>
            <center>
                <h1 style={{ color: "white",fontSize:"50px" }}>SwatchBook</h1>
                <div style={{ marginTop: "400px", marginLeft: "800px"}} className="parent">

                    <div className="cards card12" style={{ backgroundColor: "rgb(204,0,204)", color: "white", transform: cardtransform.card12 }}>card-12</div>
                    <div className="cards card11" style={{ backgroundColor: "rgb(0,0,204)", color: "white", transform: cardtransform.card11 }}>card-11</div>
                    <div className="cards card10" style={{ backgroundColor: "rgb(0,195,214)", color: "white", transform: cardtransform.card10 }}>card-10</div>
                    <div className="cards card9" style={{ backgroundColor: "rgb(51,124,10)", color: "white", transform: cardtransform.card9 }}>card-9</div>
                    <div className="cards card8" style={{ backgroundColor: "rgb(255,219,4)", color: "white", transform: cardtransform.card8 }}>card-8</div>
                    <div className="cards card7" style={{ backgroundColor: "rgb(122,122,122)", color: "white", transform: cardtransform.card7 }}>card-7</div>
                    <div className="cards card6" style={{ backgroundColor: "rgb(233,153,153)", color: "white", transform: cardtransform.card6 }}>card-6</div>
                    <div className="cards card5" style={{ backgroundColor: "rgb(15,90,90)", color: "white", transform: cardtransform.card5 }}>card-5</div>
                    <div className="cards card4" style={{ backgroundColor: "rgb(120,129,12)", color: "white", transform: cardtransform.card4 }}>card-4</div>
                    <div className="cards card3" style={{ backgroundColor: "rgb(190,12,121)", color: "white", transform: cardtransform.card3 }}>card-3</div>
                    <div className="cards card2" style={{ backgroundColor: "yellow", transform: cardtransform.card2 }}>card-2</div>
                    <div className="cards card1" style={{ backgroundColor: "red", color: "white", transform: cardtransform.card1 }} >card-1</div>
                    <div className="cards start" style={{ backgroundColor: "orange", color: "white", transform: cardtransform.start }} onMouseEnter={handleeffect} onMouseLeave={handleleave}>start</div>
                </div>
            </center>
        </div>
    )
}