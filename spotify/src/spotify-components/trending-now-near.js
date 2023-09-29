import React,{useState} from "react";
import Home from "./home";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export default function Trending(){
    const data=[
        {
            img:"https://i.scdn.co/image/ab67616d00001e02a6b81159cd017b01866259ca",
            data:"Jawan",
            desc:"Anirudh Ravichander"
        },
        {
            img:"https://i.scdn.co/image/ab67616d0000b27368d242c4a0eaa3c9b4d3b099",
            data:"Kalikali ZUulfon ke...",
            desc:"Madhur Sharma ,Swapnil tare,Nusrat"
        },
        {
            img:"https://i.scdn.co/image/ab67616d0000b273dae80b84b88adf29206cecb5",
            data:"Tum Hi Aana(Sad ...",
            desc:"Payal Dev,Jubin Nautiyal,kunaal..."
        },
        {
            img:"https://pagalnew.com/coverimages/simroon-tera-naam-yaariyan-2-500-500.jpg",
            data:"Simroon Tera Naa...",
            desc:"manan Bhardwaj,Sachet Tandon ,Nusrat..."
        },
        {
            img:"https://i.scdn.co/image/ab67616d0000b273c6366bdb2f81259d2808a71b",
            data:"Badlapur(Original song).....",
            desc:"Sachin-Jigar"
        },
        {
            img:"https://i.scdn.co/image/ab67616d0000b27339d95270a86b58e4483365aa",
            data:"First of a Kind(From...",
            desc:"AP Dhillon"
        },
        {
            img:"https://i.scdn.co/image/ab67616d0000b27302ea9d69484ed871c3e34bea",
            data:"Heeriye(feat.Ariji...",
            desc:"Jasleen Royal,Arijit Singh,Dulquer Salmaan"
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