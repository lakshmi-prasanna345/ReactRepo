import React,{useState} from "react";
import Home from "./home";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Radio(){
    const desc="By Spotify"
    const data=[
        {
            img:"https://seeded-session-images.scdn.co/v1/img/artist/4YRxDV8wJFPHPTeXepOstw/de",
            data:"Arjith Singh Radio",
            desc
        },
        {
            img:"https://seeded-session-images.scdn.co/v1/img/artist/5nB8qMUrfdM3RTVIhLTmQK/en",
            data:"Noor Chahal Radio",
            desc
        },
        {
            img:"https://seeded-session-images.scdn.co/v1/img/artist/4PULA4EFzYTrxYvOVlwpiQ/de",
            data:"Sidhu Moose WAl",
            desc
        },
        {
            img:"https://seeded-session-images.scdn.co/v1/img/artist/4fEkbug6kZzzJ8eYX6Kbbp/de",
            data:"KK Radio",
            desc
        },
        {
            img:"https://seeded-session-images.scdn.co/v1/img/artist/6LEG9Ld1aLImEFEVHdWNSB/en",
            data:"AP Dhillon Radio",
            desc
        },
        {
            img:"https://seeded-session-images.scdn.co/v1/img/artist/1wRPtKGflJrBx9BmLsSwlU/en",
            data:"Pritam Radio",
            desc
        },
        {
            img:"https://seeded-session-images.scdn.co/v1/img/artist/70B80Lwx2sxti0M1Ng9e8K/en",
            data:"Udit Narayana Radio",
            desc
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