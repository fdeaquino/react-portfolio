import React from 'react';


function Portfolio() {
    return (
        <section>
            <h1>Portfolio</h1>
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
            </div>

        </section>
    );
}

export default Portfolio;