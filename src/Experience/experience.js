import bnp from './bnp.png'
import tmg from './takenmind.png'



function Experience(){
    return(
        <>
        <div className="whole">
            <h1>Experience_</h1>
            <div>
            <span>DATA ENGINEERING</span>&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;BNP PARIBAS
            <br/>
             <span>JAN</span>, 2023 – <span>MAY</span>, 2023
            </div>
            <img src={bnp} height={'400px'} width={'450px'} alt='bnps'/>
            <div>
            	Served as a Data Engineer internship in data warehouse system called BOGART.
                Multiple upstream data were handled and fed to downstream systems.
                <div className='space'>
                Data manipulation were carried out using SQL and orchestrated accordingly.
                Multiple redundant task automation was performed using shell script.
                </div>
            </div>
            <div className='part2'>
            <div className='content2'>
            <span>DATA ANALYTICS INTERNSHIP&nbsp;</span> |&nbsp;
             TAKENMIND GLOBAL <br/>
            <span>JULY 1</span>, 2021 – <span>JULY 28</span>,2021
            </div>
            <img className='tmg' src={tmg} height={'300px'} width={'300px'} alt='tmg'/>
            <div className='content2'>
             Gather data from various sources, such as databases, spreadsheets,and more.<br/>
             Ensure data accuracy, completeness, and reliability.
             <div className='space'>
             Collaborate with data engineers or other teams to set up data pipelines.<br/>
             Handle missing data through imputation or other suitable methods.
             </div>
            </div>
            </div>
            
        </div>
        </>
    )
}

export default Experience