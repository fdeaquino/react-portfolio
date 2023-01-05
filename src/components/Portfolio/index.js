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
                    <div className='col-sm-12'>
                        <div>
                            <img className='rounded shadow-lg img-fluid d-block w-100 fit-cover project-styles' src={byteFarmersMarket} alt='Byte Farmers Market Project'>
                            </img>
                            <div className='py-4'>
                                <a className='title-my-6-projects' href="https://byte-farmers-market.herokuapp.com/">Byte Farmer's Market</a>
                                <span>
                                    <li class="list-inline-item me-4 footerIcons">
                                        <a href="https://github.com/fdeaquino/Farmers_Market">
                                            <svg class="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#004644ff" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                        </svg>
                                        </a>
                                    </li>
                                </span>

                                <p className='paragraph-my-6-projects'>
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12'>
                        <div>
                            <img className='rounded shadow-lg img-fluid d-block w-100 fit-cover project-styles' src={pizzaHunt} alt='Pizza Hunt Project'>
                            </img>
                            <div className='py-4'>
                                <a className='title-my-6-projects' href="https://fd-pizza-hunt.herokuapp.com/">Pizza Hunt</a>
                                <span>
                                    <li class="list-inline-item me-4 footerIcons">
                                        <a href="https://github.com/fdeaquino/pizza-hunt">
                                            <svg class="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#004644ff" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                        </svg>
                                        </a>
                                    </li>
                                </span>
                                <p className='paragraph-my-6-projects'>
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12'>
                        <div>
                            <img className='rounded shadow-lg img-fluid d-block w-100 fit-cover project-styles' src={taskmasterPro} alt='Taskmaster Pro Project'>
                            </img>
                            <div className='py-4'>
                                <a className='title-my-6-projects' href="https://fdeaquino.github.io/taskmaster-pro/">Taskmaster Pro</a>
                                <span>
                                    <li class="list-inline-item me-4 footerIcons">
                                        <a href="https://github.com/fdeaquino/taskmaster-pro">
                                            <svg class="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#004644ff" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                        </svg>
                                        </a>
                                    </li>
                                </span>
                                <p className='paragraph-my-6-projects'>
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12'>
                        <div>
                            <img className='rounded shadow-lg img-fluid d-block w-100 fit-cover project-styles' src={tempoRun} alt='Tempo Run Project'>
                            </img>
                            <div className='py-4'>
                                <a className='title-my-6-projects' href="https://amaragh.github.io/tempo-run-songfinder/">Tempo Run</a>
                                <span>
                                    <li class="list-inline-item me-4 footerIcons">
                                        <a href="https://github.com/amaragh/tempo-run-songfinder">
                                            <svg class="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#004644ff" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                        </svg>
                                        </a>
                                    </li>
                                </span>
                                <p className='paragraph-my-6-projects'>
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12'>
                        <div>
                            <img className='rounded shadow-lg img-fluid d-block w-100 fit-cover project-styles' src={weatherDashboard} alt='Weather Dashboard Project'>
                            </img>
                            <div className='py-4'>
                                <a className='title-my-6-projects' href="https://fdeaquino.github.io/weather-dashboard/">Weather Dashboard</a>
                                <span>
                                    <li class="list-inline-item me-4 footerIcons">
                                        <a href="https://github.com/fdeaquino/weather-dashboard">
                                            <svg class="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#004644ff" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                        </svg>
                                        </a>
                                    </li>
                                </span>
                                <p className='paragraph-my-6-projects'>
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12'>
                        <div>
                            <img className='rounded shadow-lg img-fluid d-block w-100 fit-cover project-styles' src={runBuddy} alt='Run Buddy Project'>
                            </img>
                            <div className='py-4'>
                                <a className='title-my-6-projects' href="https://fdeaquino.github.io/run-buddy/">Run Buddy</a>
                                <span>
                                    <li class="list-inline-item me-4 footerIcons">
                                        <a href="https://github.com/fdeaquino/run-buddy">
                                            <svg class="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#004644ff" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                        </svg>
                                        </a>
                                    </li>
                                </span>
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