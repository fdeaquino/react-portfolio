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
                                    <li className="list-inline-item me-4 footerIcons">
                                        <a href="https://github.com/fdeaquino/Farmers_Market">
                                            <svg className="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#004644ff" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </span>

                                <p className='paragraph-my-6-projects'>
                                    Byte Farmer's Market is a digital platform that connects customers with vendors of their local farmer's market. We aim to provide small business owners an opportunity to expand their reach and connect with new customers. By using our platform, users can easily discover local vendors and preview the products they have available for purchase online.
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
                                    <li className="list-inline-item me-4 footerIcons">
                                        <a href="https://github.com/fdeaquino/pizza-hunt">
                                            <svg className="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#004644ff" viewBox="0 0 16 16">
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
                                    <li className="list-inline-item me-4 footerIcons">
                                        <a href="https://github.com/fdeaquino/taskmaster-pro">
                                            <svg className="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#004644ff" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </span>
                                <p className='paragraph-my-6-projects'>
                                    Taskmaster Pro is a task management tool that enables users to create tasks with descriptions and deadlines. The app uses localStorage to save task data and includes user-friendly features such as drag-and-drop functionality to delete one task and a delete all button to delete all tasks. This tool is also installable as a Progressive Web Applicaiton - PWA.
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
                                    <li className="list-inline-item me-4 footerIcons">
                                        <a href="https://github.com/amaragh/tempo-run-songfinder">
                                            <svg className="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#004644ff" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </span>
                                <p className='paragraph-my-6-projects'>
                                    Tempo Run is a music service that matches running pace with the desired beats per minute (BPM) and enables runners to create their own playlist of songs. This gives runners the freedom to run to the beat of their own drum.
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
                                    <li className="list-inline-item me-4 footerIcons">
                                        <a href="https://github.com/fdeaquino/weather-dashboard">
                                            <svg className="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#004644ff" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </span>
                                <p className='paragraph-my-6-projects'>
                                    Weather Dashboard is an application that retrieves weather data for the cities specified by the user. Using the OpenWeather API, it presents the 5-day forecast with a weather icon and weather conditions that include tempreature, wind, and himidity.
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
                                    <li className="list-inline-item me-4 footerIcons">
                                        <a href="https://github.com/fdeaquino/run-buddy">
                                            <svg className="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#004644ff" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </span>
                                <p className='paragraph-my-6-projects'>
                                    Run Buddy is a service that connects runners with personal trainers for customized training. Users can sign up and receive customized exercise plans and regular check-ins from their trainer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;