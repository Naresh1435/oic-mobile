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
import parallax_img from './imgs/pexels-vlad-che-an-2694317-1.png';
// import cup from './imgs/cup.jpeg'
function Home() {
    const handleNavDrop = () =>{
        document.getElementById("navdrop").classList.toggle("hidden");
    }
    window.addEventListener("scroll",(event)=>{
       
            document.getElementById("navdrop").classList.add("hidden");
        
    });
    return (
        <div className="bg-black-con">
            <div className=" flex flex-col">
                <nav className="flex  flex-col">
                    <div className="flex w-screen p-2 navcontents">
                        <div className="w-4/6">
                            <img src={logo} />
                        </div>
                        <div className="text-white relative flex justify-end pr-2 gap-4 w-1/3 justify-self-end">
                            <button className="fa-solid fa-bars text-lg" onClick={handleNavDrop}></button>
                            <div className="flex flex-col ash h-screen absolute hidden text-left text-black  -right-3 gap-4  z-20 bg-green p-4 text-sm navdrop" id="navdrop">
                        
                                <Link id="home" >Home</Link>
                                <Link id="home" >The Facility</Link>
                                <Link id="home" >Memberships</Link>
                                <Link id="home" >Batting Cages</Link>
                                <Link id="home" >Programs & Events</Link>
                                <Link id="home" >FAQ</Link>
                                <Link id="home" >Pricing</Link>
                                <Link id="home" >More</Link>
                                <Link id="home" >Contact Us</Link>
                                <button className="border-2 border-black rounded-md py-1 -px-2 " onClick={handleNavDrop}>Sign Up</button>
                                <div className="flex flex-col gap-1">
                                <span className="text-sm">Email:demo@gmail.com</span>
                                <span className="text-sm">Phone : +1 234 6988</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </nav>
                <div className=" relative">
                    <div className=" home-video-parent z-10 relative ">
                        <video className="home-video"   autoPlay loop muted  >
                                <source src="con1.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="z-20  flex-col flex p-2 absolute vidtext">
                            <div className="text-white font-bold darker  vidtext1">OLYMPIC INDOOR SPORTS</div>
                            <div className="bg-green-1  darker font-bold flex items-center px-1  vidtext2">
                                <span className="vidtext2">High Perfomance Facility in the USA.</span>
                            </div>
                            <div className="flex  inter w-full ">
                                <button className="bg-green-1   vidtext3">Register</button>
                                <button className="bg-yellow  vidtext3">Learn More</button>
                            </div>
                        </div>
                </div>        
                <div className="flex text-center tickercon bg-gray ">
                    <div className=" flex rounded-tr-2xl bg-black pl-1 text-white tickertext">
                        <span className="w-full do text">WHAT WE DO!</span>
                        <span className=" bg-green tickerline "></span>
                    </div>
                    <div className=" flex tickerbox  items-center  rounded-tl-2xl bg-black text-white ">
                    <img src="ticker-1.gif" className="ticker" alt="" srcset="" />
                    </div>
                </div> 
            </div>
            <div className="">
                <div className=" py-8 px-4 flex parallax-img2 z-20">
                    <div className="flex m-auto gap-10 p-2 justify-center items-center   flex-col">
                            <div className=" home-card  relative ">
                                    <div className="bg-home-card text-center overflow-hidden home-card-title ">
                                        <span className=" font-bold text-white aldrich">BASEBALL</span>
                                    </div>
                                    <div className="relative items-center flex">
                                        <div className="w-full flex h-full">
                                            <img src={card1} height={"80%"} width={"90%"} alt="" />
                                        </div>
                                        <div className="absolute h-2/3 top-50% w-3 rounded-tl-3xl rounded-br-3xl bg-home-card">

                                        </div>
                                    </div>
                                    <hr className="border-2 bg-white box-border"/>
                                    <div className=" w-full regcon text-center">
                                        <span className="text-color-1  font-bold inter cardregister">REGISTER</span>
                                    </div>
                            </div>
                            <div className=" home-card  relative ">
                                    <div className="bg-home-card text-center overflow-hidden home-card-title ">
                                        <span className="font-bold text-white aldrich">SOFTBALL</span>
                                    </div>
                                    <div className="relative items-center flex mt-7">
                                        <div className="w-full flex h-full">
                                            <img src={card2} height={"130%"} width={"130%"} alt="" />
                                        </div>
                                        <div className="absolute h-2/3 top-50% w-3 rounded-tl-3xl rounded-br-3xl bg-home-card">

                                        </div>
                                    </div>
                                    <hr className="border-2 bg-white box-border"/>
                                    <div className=" w-full regcon text-center">
                                        <span className="text-color-1  font-bold inter cardregister">REGISTER</span>
                                    </div>
                            </div>
                            <div className=" home-card  relative ">
                                    <div className="bg-home-card text-center overflow-hidden home-card-title ">
                                        <span className=" font-bold text-white aldrich ">CRICKET</span>
                                    </div>
                                    <div className="relative items-center flex mt-7">
                                        <div className="w-full flex h-full">
                                            <img src={card3} height="80%" width={"90%"} alt="" />
                                        </div>
                                        <div className="absolute h-2/3 top-50% w-3 rounded-tl-3xl rounded-br-3xl bg-home-card">

                                        </div>
                                    </div>
                                    <hr className="border-2 bg-white box-border"/>
                                    <div className=" w-full regcon text-center">
                                        <span className="text-color-1  font-bold inter cardregister">REGISTER</span>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="paracon">
                <div className="parallax-img">
                    
                    
                    <div className="flex m-auto text-left text-white  flex-col">
                    <div className="flex w-4/5  items-center ">
                        <span className="aboutustext  w-1/2 darker  ">About Us</span>
                        <span className="bg-green h-1 w-2/3"> </span>
                    </div>
                    <div className="p-3 text-left gap-2 darker  flex flex-col about">
                        <span className="text-left text-sm">Olympic Indoor Sports is a high-performance facility that provides
training in Baseball, Softball & Cricket skills.</span>
                        <span className="text-left text-sm">We help student-athletes gain confidence, get better, and..</span>
                    </div>
                        <div className="p-3">
                            <p className="havefuntext inter text-color-1">HAVE FUN!</p>
                        </div>
                    </div>
                    {/* <img src={cup} alt="" /> */}
                </div>
            </div>
            <div className="h-56 relative ">
                <video  className=" parallax-video" autoPlay loop muted>
                    <source src="Parallax.mp4" type="video/mp4" />
                </video>
            </div>
            {/* SPECIFICATIONS */}
            <div className="w-screen relative shadow-md shadow-black flex flex-col justify-center text-center items-center bg-black py-3">
            <hr className="w-full h-2 bg-green" />
            <p className="absolute px-4  bg-black text-2xl do  text-white">The Facility</p>
            </div>  
            <div className="spec flex flex-col gap-5 ">
                <div className="m-auto w-80">
                    <img src={emblem} height="80%" width="100%" alt="" />
                </div>
                <div className="m-auto  ">
                    <div className="inter py-10 ">
                        <div className="px-10 text-center font-bold py-4 bg-green-linear rounded-t-lg">
                            <span>SPECIFICATIONS</span>
                        </div>
                        <div className="flex bg-spec-linear rounded-b-lg text-white flex-col ">
                            <div className="flex items-center p-4 gap-4">
                                <img src={sp1} height={"20px"} width="20px" alt="" />
                                <p><b>20,000</b> Sq ft</p>
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
                    <div class="flex m-auto flex-col text-white gap-4">
                        <input type="text" className="bg-black-con p-2  form-border  rounded-lg" placeholder="First Name & Last Name"/>
                        <input type="text" className="bg-black-con p-2 form-border rounded-lg" placeholder="Phone Number"/>
                        <input type="text"className="bg-black-con p-2 form-border rounded-lg"  placeholder="Email Address"/>
                        <input type="text" className="bg-black-con p-6 form-border rounded-lg" placeholder="Message or Question" />
                        <button className="p-2 bg-green mt-4 text-black font-bold">SUBMIT</button>
                    </div>
                    
                </div>
            </div>
        </div>
        
    <hr className="w-full h-2 inter bg-green" />
    <img src="imgs/logoemblem-2-1.png" alt="" id="backimg"/>
    <div className="lastcomponent">
        <div className="split1">
            <div className="discription">
                <h2>Olympic Indoor Sports, a game-changing platform for young athletes in Maryland
                to step up and show off their skills in sports such as baseball, softball, cricket, and lacrosse.
                </h2>
                <br />
                Our mission is to provide a comprehensive space where these young rising stars can take a swing at their
                athletic aspirations and score big in the game of life.
                <br/><br/>
                We're proud to be the home plate for the future generation of American sports, and we hope to establish a
                precedent for other players in the industry. So come on over, join the team, and let's play ball!
            </div>
            
        </div>
        <hr  className="mt-8"/>
        <div className="flex mt-8 w-full ">
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
            <div className=" w-2/3 mx-auto justify-self-end pr-1 flex gap-2 text-end flex-col">
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