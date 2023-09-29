import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DownloadIcon from '@mui/icons-material/Download';
import PersonIcon from '@mui/icons-material/Person';
export default function Search() {
    const navigate = useNavigate();
    const handlenavigation = () => {
        navigate("/");
    }
    return (
        <div className="d-flex bg-dark">
            <div className="side-bar bg-dark mt-2 fixed ">
                <div className="side-bar-icons rounded">
                    {/* <FontAwesomeIcon icon={faHouse} style={{color: "#fcfcfc",}} /> */}
                    <div className="d-flex" style={{ cursor: "pointer" }} onClick={handlenavigation} ><HomeIcon fontSize="large" style={{ color: "white" }} className="mt-3 mx-4" /><p className="text-light mt-4 fs-6 fw-bold">Home</p></div>
                    <div className="d-flex" style={{ cursor: "pointer" }} ><SearchIcon fontSize="large" className="mt-3 mx-4 text-light" /><p className="text-secondary mt-3 fs-6 fw-bold">Search</p></div>
                </div>
                <div className="side-bar-body mt-2 bg-dark rounded">
                    <div className="side-bar-2">
                        <div className="d-flex">
                            <LibraryBooksIcon className="mt-4 text-secondary mx-4" />
                            <p className="text-secondary mx-3 fw-bold mt-4">Your Library</p>
                            <div className="float-start mx-5">
                                <AddIcon className="text-secondary mt-4 mx-4" />
                                <ArrowForwardIcon className="text-secondary mt-4 " />
                            </div>

                        </div>
                        <div className="mt-3 text-light rounded mx-1 side-card pt-2">
                            <p className=" mx-4 fw-bold" style={{ fontSize: "15px" }}>Create your first playlist</p>
                            <p className="mx-4 fw-bold" style={{ fontSize: "12px" }}>it's easy,we'll help you</p>
                            <button className="btn btn-light text-dark mb-3 mx-4 rounded-pill fw-bold" style={{ fontSize: "14px" }}>Create playlist</button>
                        </div>
                        <div className="mt-4 text-light rounded mx-1 side-card pt-2">
                            <p className=" mx-4 fw-bold" style={{ fontSize: "15px" }}>Let's find some podcasts to follow</p>
                            <p className=" mx-4 fw-bold" style={{ fontSize: "12px" }}>we'll keep you updated on new episodes</p>
                            <button className="btn btn-light text-dark mb-3 rounded-pill mx-4 mb-3 fw-bolder" style={{ fontSize: "14px" }}>Browse podcasts</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* topnav*/}
            <div className="data-bar mt-2 col-md-9" style={{ marginLeft: "440px" }}>
                <div className="mb-5 bg-dark fixed" style={{ marginLeft: "440px", width: "77%", height: "80px", overflowY: "hidden" }}>
                    <KeyboardArrowLeftIcon className="text-secondary  fs-2 bg-dark rounded-circle mx-3 fw-bold float-start"  onClick={handlenavigation}/>
                    <KeyboardArrowRightIcon className="text-secondary  bold fs-2 bg-dark rounded-circle fw-bold mb-3" />
                    <input type="search" placeholder="What do you want to listen to?" className="border-light rounded-pill bg-dark text-white p-2 mx-2" style={{marginTop:""}}></input>
                    <div className="d-flex data-bar-top float-end">
                        <div className="d-flex">
                            <button className="border-dark bg-dark text-light rounded-pill fs-6 "><DownloadIcon className="me-1" />Install App</button>
                            <PersonIcon className="bg-dark text-light rounded-circle fs-3 mt-1 mx-2" />
                        </div>
                    </div>
                </div>
                {/*data-div */}
                <div className="" style={{marginTop:"80px"}}>
                <p className="fw-bold text-light mt-4 fs-4 mx-3 fs-4">Browse all</p>
                </div>

            </div>
        </div>
    )
}
