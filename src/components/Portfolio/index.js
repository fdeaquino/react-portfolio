import React from 'react';
import byteFarmersMarket from "../../assets/large/byte-farmers-market.png";
import pizzaHunt from "../../assets/large/pizza-hunt.png";
import taskmasterPro from "../../assets/large/taskmasterpro-updated.png";
import tempoRun from "../../assets/large/Tempo-Run-Songfinder.png";
import weatherDashboard from "../../assets/large/Weather-Dashboard.png";
import runBuddy from "../../assets/large/runbuddy-updated.png";



function Portfolio() {
    return (
        <section>
            <div className='container py-4 py-xl-5'>
                <div className='row mb-5'>
                    <div className='col-md-8 col-xl-6 text-center mx-auto'>
                        <h2 className='h2-my-projects-title'>
                            My Projects
                        </h2>
                    </div>
                </div>
                <div className='row gy-4 row-cols-md-2 row-cols-xl-3'>
                    <div className='col'>
                        <div>
                            <img className='rounded shadow-lg img-fluid d-block w-100 fit-cover project-styles' src={byteFarmersMarket} alt='Byte Farmers Market Project'>
                            </img>
                            <div className='py-4'>
                            <a className='title-my-6-projects' href="https://byte-farmers-market.herokuapp.com/">Byte Farmer's Market</a>

                                <p className='paragraph-my-6-projects'>
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <img className='rounded shadow-lg img-fluid d-block w-100 fit-cover project-styles' src={pizzaHunt} alt='Pizza Hunt Project'>
                            </img>
                            <div className='py-4'>
                                <a className='title-my-6-projects' href="https://byte-farmers-market.herokuapp.com/">There is something wrong with the title of this application</a>
                                
                                <p className='paragraph-my-6-projects'>
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <img className='rounded shadow-lg img-fluid d-block w-100 fit-cover project-styles' src={taskmasterPro} alt='Taskmaster Pro Project'>
                            </img>
                            <div className='py-4'>
                            <a className='title-my-6-projects' href="https://fdeaquino.github.io/taskmaster-pro/">Taskmaster Pro</a>
                                <p className='paragraph-my-6-projects'>
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <img className='rounded shadow-lg img-fluid d-block w-100 fit-cover project-styles' src={tempoRun} alt='Tempo Run Project'>
                            </img>
                            <div className='py-4'>
                            <a className='title-my-6-projects' href="https://amaragh.github.io/tempo-run-songfinder/">Tempo Run</a>
                                <p className='paragraph-my-6-projects'>
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <img className='rounded shadow-lg img-fluid d-block w-100 fit-cover project-styles' src={weatherDashboard} alt='Weather Dashboard Project'>
                            </img>
                            <div className='py-4'>
                            <a className='title-my-6-projects' href="https://fdeaquino.github.io/weather-dashboard/">Weather Dashboard</a>
                                <p className='paragraph-my-6-projects'>
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <img className='rounded shadow-lg img-fluid d-block w-100 fit-cover project-styles' src={runBuddy} alt='Run Buddy Project'>
                            </img>
                            <div className='py-4'>
                            <a className='title-my-6-projects' href="https://fdeaquino.github.io/run-buddy/">Run Buddy</a>
                                <p className='paragraph-my-6-projects'>
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            {/*  */}
            {/* <h1>Portfolio</h1>
            <div className='container'>
                <div className='row'>


                    <div id='byte-farmers-market-img' className="project col-6">
                        <a href="https://byte-farmers-market.herokuapp.com/" className='projectContainer'>

                            Byte Farmers Market

                        </a>
                    </div>



                    <div id='taskmaster-pro-img' className="project col-6">
                        <a href='https://fdeaquino.github.io/taskmaster-pro/' className='projectContainer'>

                            Taskmaster Pro

                        </a>
                    </div>



                    <div id='temporun-img' className="project col-6">
                        <p>
                            Tempo Run
                        </p>
                    </div>


                    <div id='pizzahunt-img' className="project col-6">
                        <p>
                            Pizza Hunt
                        </p>
                    </div>


                    <div id='weather-dashboard-img' className="project col-6">
                        <p>Weather Dashboard</p>
                    </div>
                </div>
            </div> */}

        </section>
    );
}

export default Portfolio;