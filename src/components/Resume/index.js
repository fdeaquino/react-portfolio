import React from 'react';

function Resume() {
    return (
        <section className="position-relative py-4 py-xl-5">
            <div className="container position-relative mb-4 mb-xl-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4 d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center displayFlex" >
                        <a href="https://drive.google.com/file/d/1co7gajy6fHZC5TUZubM-Rtey3DFgkmH3/view?usp=sharing">
                            <button className="btn resumeBtn" type="button">Download Resume</button>
                        </a>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="d-xxl-flex justify-content-xxl-center proficienciesTitles" >Front-End Proficiencies</h2>
                        <ul>
                            <li className="d-xxl-flex justify-content-xxl-center proficienciesLi proficienciesLi">HTML</li>
                            <li className="d-xxl-flex justify-content-xxl-center proficienciesLi">CSS</li>
                            <li className="d-xxl-flex justify-content-xxl-center proficienciesLi">JavaScript</li>
                            <li className="d-xxl-flex justify-content-xxl-center proficienciesLi">jQuery</li>
                            <li className="d-xxl-flex justify-content-xxl-center proficienciesLi">Responsive Design</li>
                            <li className="d-xxl-flex justify-content-xxl-center proficienciesLi">React</li>
                            <li className="d-xxl-flex justify-content-xxl-center proficienciesLi">Bootstrap</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h2 className="d-xxl-flex justify-content-xxl-center proficienciesTitles" >Back-End Proficiencies</h2>
                        <ul>
                            <li className="d-xxl-flex justify-content-xxl-center proficienciesLi">APIs</li>
                            <li className="d-xxl-flex justify-content-xxl-center proficienciesLi">Node</li>
                            <li className="d-xxl-flex justify-content-xxl-center proficienciesLi">Express</li>
                            <li className="d-xxl-flex justify-content-xxl-center proficienciesLi">MySQL, Sequelize</li>
                            <li className="d-xxl-flex justify-content-xxl-center proficienciesLi">MongoDB, Mongoose</li>
                            <li className="d-xxl-flex justify-content-xxl-center proficienciesLi">REST</li>
                            <li className="d-xxl-flex justify-content-xxl-center proficienciesLi">GraphQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;