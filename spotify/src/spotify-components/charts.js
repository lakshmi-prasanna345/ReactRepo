import React,{useState} from "react";
import Home from "./home";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export default function Charts(){
    const data=[
        {
            img:"https://i.scdn.co/image/ab67706f000000025d2039d64e5e31c583a5a3a6",
            data:"Latest Telugu",
            desc:"New Music from Tollywood! Cover'...."
        },
        {
            img:"https://i.scdn.co/image/ab67706f000000025f39096d6d1e374143b5b2fd",
            data:"Latest Tamil",
            desc:"New Music from Kollywood.Cover...."
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
            img:"https://i.scdn.co/image/ab67706f00000002ce34745d6b937a58c02ac4f3",
            data:"New Music Punjabi",
            desc:"Stay updated with all the smashing new..."
        },
        {
            img:"https://i.scdn.co/image/ab67706f00000002c5e34a2cf7a98aa010a6ad6f",
            data:"Hot Hits India",
            desc:"THe Hottest tracks in India.Cover:Taylor..."
        },
        {
            img:"https://charts-images.scdn.co/assets/locale_en/regional/daily/region_in_default.jpg",
            data:"Top 50-India",
            desc:"Your Daily update of the most played tracks rig..."
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