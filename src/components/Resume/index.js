import React from 'react';

function Resume() {
    return (
        <section class="position-relative py-4 py-xl-5">
            <div class="container position-relative">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5 col-xxl-4 d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center displayFlex" >
                        <a href="https://drive.google.com/file/d/1Q54sANug5nY7TYmcoREoT0mMdBMI85UY/view?usp=sharing">
                            <button class="btn btn-primary resumeBtn" type="button">Download Resume</button>
                        </a>

                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="d-xxl-flex justify-content-xxl-center proficienciesTitles" >Front-End Proficiencies</h2>
                        <ul>
                            <li class="d-xxl-flex justify-content-xxl-center proficienciesLi proficienciesLi">HTML</li>
                            <li class="d-xxl-flex justify-content-xxl-center proficienciesLi">CSS</li>
                            <li class="d-xxl-flex justify-content-xxl-center proficienciesLi">JavaScript</li>
                            <li class="d-xxl-flex justify-content-xxl-center proficienciesLi">jQuery</li>
                            <li class="d-xxl-flex justify-content-xxl-center proficienciesLi">Responsive Design</li>
                            <li class="d-xxl-flex justify-content-xxl-center proficienciesLi">React</li>
                            <li class="d-xxl-flex justify-content-xxl-center proficienciesLi">Bootstrap</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h2 class="d-xxl-flex justify-content-xxl-center proficienciesTitles" >Back-End Proficiencies</h2>
                        <ul>
                            <li class="d-xxl-flex justify-content-xxl-center proficienciesLi">APIs</li>
                            <li class="d-xxl-flex justify-content-xxl-center proficienciesLi">Node</li>
                            <li class="d-xxl-flex justify-content-xxl-center proficienciesLi">Express</li>
                            <li class="d-xxl-flex justify-content-xxl-center proficienciesLi">MySQL, Sequelize</li>
                            <li class="d-xxl-flex justify-content-xxl-center proficienciesLi">MongoDB, Mongoose</li>
                            <li class="d-xxl-flex justify-content-xxl-center proficienciesLi">REST</li>
                            <li class="d-xxl-flex justify-content-xxl-center proficienciesLi">GraphQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;