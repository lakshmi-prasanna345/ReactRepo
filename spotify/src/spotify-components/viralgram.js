import React,{useState} from "react";
import Home from "./home";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
export default function Viralgram(){
    const data=[
        {
            img:"https://i.scdn.co/image/ab67706f0000000277f6df273b4d2816e4a76b88",
            data:"Trending Now Tel...",
            desc:"Trending songs from Tollywood! Cover-OG"
        },
        {
            img:"https://i.scdn.co/image/ab67706f00000002588667e57a994ad916a0d366",
            data:"Trending Now Tamil",
            desc:"Top Trending Tamil Songs on Social Medi..."
        },
        {
            img:"https://i.scdn.co/image/ab67706f0000000282612628e4f4e199d60b4c2c",
            data:"Trending Now India",
            desc:"Every track you're listening/should be..."
        },
        {
            img:"https://i.scdn.co/image/ab67706f000000024e0f270b8e968aae393328e2",
            data:"Trending Valentin...",
            desc:"India's Ultimate Love Playlist.Cover-Jawan"
        },  
       
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