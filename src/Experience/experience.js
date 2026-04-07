import bnp from './bnp.png'
import tmg from './takenmind.png'
import syncfusionLogo from './syncfusion-logo.png'

function Experience(){
    return(
        <>
        <div className="experiencePage">
            <div className="whole">
                <h1>Experience_</h1>

                <div className="experienceBlock">
                    <div className="experienceHeader">
                        <img className="companyLogo" src={syncfusionLogo} alt="Syncfusion logo" />
                        <div className="experienceMeta">
                            <span>Software Engineer</span> | Syncfusion Software
                            <br/>
                            <span>JAN</span>, 2024 - Present
                        </div>
                    </div>
                    <ul className="experienceList">
                        <li>Built backend logic and automation for Essential Studio Web Diagram using Python.</li>
                        <li>Developed web apps with Python, C#, HTML, CSS, and JavaScript.</li>
                        <li>Used Git workflows for smooth integration and code reviews.</li>
                        <li>Debugged issues and optimized backend performance for better reliability.</li>
                        <li>Automated testing with Playwright and BUnit to improve quality.</li>
                    </ul>
                </div>

                <div className="experienceBlock">
                    <div className="experienceHeader">
                        <img className="companyLogo" src={bnp} alt='BNP Paribas logo'/>
                        <div className="experienceMeta">
                            <span>Data Engineering Intern</span> | BNP Paribas
                            <br/>
                            <span>JAN</span>, 2023 - <span>MAY</span>, 2023
                        </div>
                    </div>
                    <ul className="experienceList">
                        <li>Worked on BOGART data warehouse workflows during internship.</li>
                        <li>Handled upstream data integration and downstream data flow support.</li>
                        <li>Performed SQL data manipulation and orchestration tasks.</li>
                        <li>Automated repetitive tasks using shell scripting.</li>
                    </ul>
                </div>

                <div className="experienceBlock">
                    <div className="experienceHeader">
                        <img className="companyLogo" src={tmg} alt='Takenmind Global logo'/>
                        <div className="experienceMeta">
                            <span>Data Analytics Intern</span> | Takenmind Global
                            <br/>
                            <span>JULY</span>, 2021
                        </div>
                    </div>
                    <ul className="experienceList">
                        <li>Collected data from databases, spreadsheets, and other sources.</li>
                        <li>Validated data for accuracy, completeness, and reliability.</li>
                        <li>Collaborated on setup and support of data pipelines.</li>
                        <li>Handled missing data with appropriate imputation methods.</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Experience