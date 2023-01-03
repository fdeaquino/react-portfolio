import React from 'react';
import byteFM from "../../assets/large/byte-farmers-market.png";
import pizzaHunt from "../../assets/large/pizza-hunt.png";
import taskMaster from "../../assets/large/taskmasterpro-updated.png";
import tempoRun from "../../assets/large/Tempo-Run-Songfinder.png";
import weatherDash from "../../assets/large/Weather-Dashboard.png";


function Portfolio() {
    return (
        <section>
            <h1>Portfolio</h1>
            <div className='projectContainer'>
                <div className='row'>
                    <div className="project col">
                        <img src={byteFM} alt="Byte Farmer's Market" style={{ width: "50%" }} />
                    </div>


                    <div className="project col">
                        <img src={taskMaster} alt="Taskmaster Pro" style={{ width: "50%" }} />
                    </div>


                    <div className="project col">
                        <img src={tempoRun} alt="Tempo Run Songfinder" style={{ width: "50%" }} />
                    </div>


                    <div className="project col">
                        <img src={pizzaHunt} alt="Pizza Recipe Social Media App" style={{ width: "50%" }} />
                    </div>


                    <div className="project col">
                        <img src={weatherDash} alt="City Weather Search" style={{ width: "50%" }} />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Portfolio;