import React,{useState} from "react";
import Home from "./home";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import spotify from "./spotify.css";
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { MDBRipple } from 'mdb-react-ui-kit';

export default function Data() {
    const data=[
        {
            img:"https://i.scdn.co/image/ab6765630000ba8a65f3b3a6fb240b07ca452b7a",
            data:"Decoded:Business...",
            desc:"Deep dive into the world of business and..."
        },
        {
            img:"https://i.scdn.co/image/ab67656300005f1fb5674423a8b633cdaee95cf7",
            data:"Daybreak",
            desc:"The Ken"
        },
        {
            img:"https://i.scdn.co/image/ab6765630000ba8a39f2592547163d07285d0648",
            data:"Business Wars",
            desc:"Wondery"
        },
        {
            img:"https://i.scdn.co/image/ab6765630000ba8a0e9f6765835300923f3e2c87",
            data:"Planet Money",
            desc:"NPR"
        },
        {
            img:"https://i.scdn.co/image/e227cd9674618024276c65f1213fb05af34cf512",
            data:"Finshots Daily",
            desc:"Finshots"
        },
        {
            img:"https://i.scdn.co/image/ab6765630000ba8a15355901a82135b267e23f9f",
            data:"WTF is with Nikhil...",
            desc:"Nikhil Kamath"
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