import React,{useState} from "react";
import Home from "./home";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { useState } from "react";

export default function Hits(){
    const data=[
        {
            img:"https://i.scdn.co/image/ab67706f000000026c2758518dd33c89085f56b5",
            data:"Bollywood Mush",
            desc:"Let these songs be the background score to..."
        },
        {
            img:"https://i.scdn.co/image/ab67706f000000023de2699474ae904d48dcd269",
            data:"Indie India",
            desc:"Best of the Indian Indie scene.Cover-Taaruk..."
        },
        {
            img:"https://i.scdn.co/image/ab67706f00000002bb356f4951404ce7362ab02c",
            data:"Bollywood Butter",
            desc:"B bole toh biggest blockbusters,right..."
        },
        {
            img:"https://i.scdn.co/image/ab67706f00000002e012a183ab8ddeff1d01c76e",
            data:"Hot Hits Telugu",
            desc:"Tune in to the Hottest Tracks of Tollywood!..."
        },
        {
            img:"https://i.scdn.co/image/ab67706f00000002975118eef110cf76bc26137d",
            data:"Hot Hits Hindi",
            desc:"Hottest Hindi music served here.Cover-..."
        },
        {
            img:"https://i.scdn.co/image/ab67706f0000000282612628e4f4e199d60b4c2c",
            data:"Trending Now India",
            desc:"Every track you're listening/should be..."
        },
        {
            img:"https://i.scdn.co/image/ab67706f000000025657daa09c838f52be189545",
            data:"Hot Hits Punjabi",
            desc:"Catch the hottest Punjabi tracks with..."
        }
    ]
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handleCardHover = (index) => {
        setHoveredIndex(index);
    };

    const handleCardLeave = () => {
        setHoveredIndex(-1);
    };

    return (
        <div className="d-flex mt-4 mx-3">
            {data.map((item, index) => (
                <Card
                    key={index}
                    className={`custom-card mx-3 fw-bold bg-dark ${hoveredIndex === index ? 'hovered' : ''}`}
                    onMouseEnter={() => handleCardHover(index)}
                    onMouseLeave={handleCardLeave}
                >
                    <Card.Img src={item.img} className="card-image" />
                    {hoveredIndex === index && (
                        <div className="play-icon">
                            <PlayArrowIcon style={{ color: 'black' }} />
                        </div>
                    )}
                    <Card.Body>
                        <Card.Title className="text-white" style={{ fontSize: "15px" }}>{item.data}</Card.Title>
                        <Card.Text className="text-secondary fw-bold" style={{ fontSize: "12px" }}>
                            {item.desc}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}