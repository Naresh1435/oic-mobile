import React from "react";
import ReactDOM from 'react-dom';
import logo from "./imgs/olympiclogo-1.png"
import { Link } from "react-router-dom";
import "./home.css";
import emblem from './imgs/emblem.png';
import qsMark from './imgs/qs.svg';
import sp1 from './imgs/sp1.png';
import sp2 from './imgs/sp2.png';
import sp3 from './imgs/sp3.png';
import sp4 from './imgs/vector-3.svg';
import sp5 from './imgs/vector-7.svg';
import sp6 from './imgs/vector-8.svg';
import sp7 from './imgs/sp7.png';
import card3 from './imgs/soft-6.png';
import card2 from './imgs/soft-3-2.png';
import card1 from './imgs/soft-3.png';
function Home() {
    const handleNavDrop = () =>{
        document.getElementById("navdrop").classList.toggle("hidden");
    }
    return (
        <div className="bg-black-con">
            <div className="h-screen flex flex-col">
                <nav className="flex  flex-col">
                    <div className="flex w-screen p-2">
                        <div className="w-2/3">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="text-white relative flex justify-end pr-2 gap-4 w-1/3 justify-self-end">
                            <button className="flex inter items-center gap-2"><i className="fa-solid fa-circle-user"></i> Sign Up</button> 
                            <button className="fa-solid fa-bars" onClick={handleNavDrop}></button>
                            <div className="flex flex-col ash h-screen hidden text-left text-black absolute -right-3 gap-4 top-10 z-20 bg-green p-2 text-sm " id="navdrop">
                        
                                <Link id="home" >Home</Link>
                                <Link id="home" >The Facility</Link>
                                <Link id="home" >Memberships</Link>
                                <Link id="home" >Batting Cages</Link>
                                <Link id="home" >Programs & Events</Link>
                                <Link id="home" >Contact Us</Link>
                                <button className="border-2 border-black rounded-md py-1 -px-2 " onClick={handleNavDrop}>Close</button>
                            </div>
                        </div>
                    </div>
                    
                </nav>
                <div className="video-con-1 relative">
                    <div className="h-full home-video-parent z-10 relative ">
                        <video className="home-video"   autoPlay loop muted  >
                                <source src="con1.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="z-20 bottom-1/3 flex-col flex gap-2 p-2 absolute">
                            <div className="text-white font-bold darker text-3xl">OLYMPIC INDOOR SPORTS</div>
                            <div className="bg-green-1 px-2 darker py-1 text-lg font-bold ">High Perfomance Facility in the USA.</div>
                            <div className="flex mt-2 inter w-full gap-4">
                                <button className="bg-green-1 px-8 py-1 text-xl">Register</button>
                                <button className="bg-yellow px-8 py-1 text-xl">Learn More</button>
                            </div>
                        </div>
                </div>        
                <div className="flex text-center py-2 gap-3 bg-gray">
                    <div className=" flex w-2/5  items-center gap-2 px-4 py-2 rounded-tr-2xl bg-black text-white ">
                        <span className="w-full do">WHAT WE DO!</span>
                        <span className="h-2 bg-green w-8 "></span>
                    </div>
                    <div className=" flex w-3/5  items-center gap-2  py-2 rounded-tl-2xl bg-black text-white ">
                    <img src="ticker-1.gif" className="px-2" alt="" srcset="" />
                    </div>
                </div> 
            </div>
            <div className="">
                <div className="h-full py-8 px-4 flex parallax-img2">
                    <div className="flex m-auto gap-5 p-2 justify-center items-center   flex-col">
                            <div className=" home-card w-5/6 relative ">
                                    <div className="bg-home-card text-center overflow-hidden home-card-title py-6">
                                        <span className="text-2xl font-bold text-white aldrich">BASEBALL</span>
                                    </div>
                                    <div className="relative items-center flex">
                                        <div className="w-full flex h-full">
                                            <img src={card1} height="80%" width={"90%"} alt="" />
                                        </div>
                                        <div className="absolute h-2/3 top-50% w-3 rounded-tl-3xl rounded-br-3xl bg-home-card">

                                        </div>
                                    </div>
                                    <hr className="border-2 bg-white box-border"/>
                                    <div className=" w-full p-6 text-center">
                                        <span className="text-color-1 text-3xl font-bold inter ">REGISTER</span>
                                    </div>
                            </div>
                            <div className=" home-card w-5/6 relative ">
                                    <div className="bg-home-card text-center overflow-hidden home-card-title py-6">
                                        <span className="text-2xl font-bold text-white alrich">SOFTBALL</span>
                                    </div>
                                    <div className="relative items-center flex">
                                        <div className="w-full flex h-full">
                                            <img src={card2} height="100%" width={"100%"} alt="" />
                                        </div>
                                        <div className="absolute h-2/3 top-50% w-3 rounded-tl-3xl rounded-br-3xl bg-home-card">

                                        </div>
                                    </div>
                                    <hr className="border-2 bg-white box-border"/>
                                    <div className=" w-full p-6 text-center">
                                        <span className="text-color-1 text-3xl font-bold inter">REGISTER</span>
                                    </div>
                            </div>
                            <div className=" home-card w-5/6 relative ">
                                    <div className="bg-home-card text-center overflow-hidden home-card-title py-6">
                                        <span className="text-2xl font-bold text-white aldrich ">CRICKET</span>
                                    </div>
                                    <div className="relative items-center flex">
                                        <div className="w-full flex h-full">
                                            <img src={card3} height="80%" width={"90%"} alt="" />
                                        </div>
                                        <div className="absolute h-2/3 top-50% w-3 rounded-tl-3xl rounded-br-3xl bg-home-card">

                                        </div>
                                    </div>
                                    <hr className="border-2 bg-white box-border"/>
                                    <div className=" w-full p-6 text-center">
                                        <span className="text-color-1 text-3xl font-bold inter ">REGISTER</span>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="h-screen">
                <div className="h-full flex parallax-img">
                    <div className="flex m-auto text-left text-white gap-3 flex-col">
                    <div className="flex p-4 items-center ">
                        <span className="text-5xl w-1/2 darker  ">About Us</span>
                        <span className="bg-green h-2 w-1/2"> </span>
                    </div>
                    <div className="p-4 text-left gap-2 darker flex flex-col">
                        <span className="text-left">Olympic Indoor Sports is a high-performance facility that provides
training in Baseball, Softball & Cricket skills.</span>
                        <span className="text-left">We help student-athletes gain confidence, get better, and..</span>
                    </div>
                        <div className="p-4">
                            <p className="text-7xl inter text-color-1">HAVE FUN!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-screen relative overflow-hidden ">
                <video  className=" parallax-video" autoPlay loop muted>
                    <source src="Parallax.mp4" type="video/mp4" />
                </video>
            </div>
            {/* SPECIFICATIONS */}
            <div className="w-screen relative shadow-md shadow-black flex flex-col justify-center text-center items-center bg-black py-3">
            <hr className="w-full h-2 bg-green" />
            <p className="absolute px-4  bg-black text-2xl do  text-white">The Facility</p>
            </div>  
            <div className="spec h-screen flex flex-col gap-5 ">
                <div className="m-auto w-80">
                    <img src={emblem} height="80%" width="100%" alt="" />
                </div>
                <div className="m-auto  ">
                    <div className="inter">
                        <div className="px-10 text-center font-bold py-4 bg-green-linear rounded-t-lg">
                            <span>SPECIFICATIONS</span>
                        </div>
                        <div className="flex bg-spec-linear rounded-b-lg text-white flex-col ">
                            <div className="flex items-center p-4 gap-4">
                                <img src={sp1} height={"20px"} width="20px" alt="" />
                                <p><b>25,000</b> Sq ft</p>
                            </div>
                            <div className="flex items-center p-4 gap-4">
                                <img src={sp2} height={"20px"} width="20px" alt="" />
                                <p><b>14</b> Batting Cages</p>
                            </div>
                            <div className="flex flex-wrap items-center p-1 gap-2">
                                <img src={sp3} height={"40px"} width="40px" alt="" />
                                <p><b>2</b> Dedicated Cages
for HiTtrax,<br/> Fungoman & BOLA machine</p>
                            </div>
                            <div className="flex items-center p-4 gap-4">
                                <img src={sp7} height={"20px"} width="20px" alt="" />
                                <p><b>Video</b> Analysis</p>
                            </div>
                            <div className="flex items-center p-4 gap-4">
                                <img src={sp7} height={"20px"} width="20px" alt="" />
                                <p><b>Certified</b> Courses</p>
                            </div>
                            <div className="flex items-center p-4 gap-4">
                                <img src={sp7} height={"20px"} width="20px" alt="" />
                                <p><b>Monthly</b>  Evaluation &
Feedback</p>
                            </div>
                            <div className="flex items-center p-4 gap-4">
                                <img src={sp7} height={"20px"} width="20px" alt="" />
                                <p><b>KPI</b> Metrics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                 
        <div className="w-screen relative shadow-md shadow-black flex flex-col justify-center text-center items-center bg-black py-3">
            <hr className="w-full h-2 bg-green" />
            <p className="absolute px-4  bg-black text-2xl text-white">Contact Us</p>
        </div>           
        
        <div>
            <div class="flex h-screen flex-col gap-4 ">
                <div class="h-1/2 do flex text-center flex-col bg-black-con px-4 pt-5">
                    <div className="text-6xl text-color-1">Got questions? </div>
                    <div className="text-3xl text-white mt-4 ">We will love to hear them!</div>
                    <span className="text-color-1 w-60 h-40 mt-4 justify-self-center   mx-auto">
                        <img src={qsMark} width="100%" height={"100%"}  alt="" />
                    </span>
                </div>
                <div class=" h-1/2 flex bg-gray-1 inter flex-col p-2 ">
                    <div class="flex m-auto flex-col gap-4">
                        <input type="text" className="bg-black-con p-2  form-border  rounded-lg" placeholder="Fist Name & Last Name"/>
                        <input type="text" className="bg-black-con p-2 form-border rounded-lg" placeholder="Phone Number"/>
                        <input type="text"className="bg-black-con p-2 form-border rounded-lg"  placeholder="Email Address"/>
                        <input type="text" className="bg-black-con p-6 form-border rounded-lg" placeholder="Message or Question" />
                        <button className="p-2 bg-green mt-4">SUBMIT</button>
                    </div>
                    
                </div>
            </div>
        </div>
        
    <hr className="w-full h-2 inter bg-green" />
    <img src="imgs/logoemblem-2-1.png" alt="" id="backimg"/>
    <div class="lastcomponent">
        <div class="split1">
            <div class="discription">
                Olympic Indoor Sports, a game-changing platform for young athletes in Maryland
                <br/>
                to step up and show off their skills in sports such as baseball, softball, cricket, and lacrosse.
                <br/><br/>
                Our mission is to provide a comprehensive space where these young rising stars can take a swing at their
                athletic aspirations and score big in the game of life.
                <br/><br/>
                We're proud to be the home plate for the future generation of American sports, and we hope to establish a
                precedent for other players in the industry. So come on over, join the team, and let's play ball!
            </div>
            
        </div>
        <div className="flex w-full ">
            <div class="w-3/5 flex gap-4 flex-col ">
                    <p className="text-sm text-color-1">QUICK LINKS</p>
                    <p className="">The Facility</p> 
                    <p>
                    Memberships 
                    </p>
                    <p>
                    Batting Cages 
                    </p>
                    <p>
                    Porgrams & Events 
                    </p>
                    <p>
                    Contact Us
                    </p>
            </div>
            <div className=" w-2/3 mx-auto justify-self-end flex gap-2 text-end flex-col">
                <div className="flex flex-col">
                <span className="text-color-1">Location</span>
                Olympic Indoor Sports
                9179 Red Branch rd Suite #A Columbia, MD 21045
                </div>
            <div>
            <div class="flex flex-col inter">
                <span className="text-color-1">Timings</span>
                7:00 AM EST - 11:00 PM EST from Monday to Sunday. <br/>
                You will receive a prompt response from our team within 24 hours.
            </div>
           
                <div class="flex flex-col  inter">
                        <span className="text-color-1">Contact Us</span>
                        Phone:(123) 456-7890
                </div>
            </div>
            </div>
            </div>
            
           
        </div>
        <div class="flex flex-wrap inter">
            
            <div class="location inter">
                
            
        </div>
        </div>
            <footer className="text-sm">
                © 2023 Olympic Indoor Sports. Powered by Eazy Eyez Entertainment.
            </footer>
    </div>
    )
}

export default Home;