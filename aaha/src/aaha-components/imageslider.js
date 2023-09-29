import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
function ImageSlider(){
    const images = [
        {
            img: "https://i.pinimg.com/564x/04/cc/0d/04cc0dc6f7d31c510580b22d65679a33.jpg"
        },
        {
            img: "https://image-resizer-cloud-api.akamaized.net/image/3AD55DC1-A1D2-400A-838A-C19B97F07C7A/0-3x1.jpg?width=2310"
        },
        {
            img: "https://image-resizer-cloud-api.akamaized.net/image/64B0B53E-6C52-4AA0-8C70-938B4FBC5F95/0-3x1.jpg?width=2310"
        },
        {
            img: "https://image-resizer-cloud-api.akamaized.net/image/97156981-780E-4C87-9540-7AF14F0F0E59/0-3x1.jpg?width=2310"
        }
    ];
    const divstyle = {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
        backgroundSize: 'cover',


    }
    return (
        <div className="slide-container">
            <Fade>
                {images.map((image, index) => (
                    <div key={index}>
                        <div { ...divstyle}>
                        </div>

                    </div>
                )
                )
                }
            </Fade>

        </div>
    )
}
export default ImageSlider;