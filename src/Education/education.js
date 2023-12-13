import licet from './licet.jpg'
// import loyola from './Loyola-ICAM.jpeg'
import smb from './smb.png'


function Education(){
    return(
        <>
        <div className="whole">
            <h1>Education_</h1>
            <div className='be'>
                Bachelor of Engineering (B.E),<span className="cse"> Computer Science & Engineering</span> 
            </div>
            <img className='pic1' src={licet} height={'200px'} width={'200px'} alt='null' />
            <div>
            LOYOLA-ICAM COLLEGE OF ENGINEERING AND TECHNOLOGY (<span className="licet">LICET</span>) 
            20<span>19</span>-20<span>23</span>
            </div>
            {/* <img className='pic1' src={loyola} height={'400px'} width={'800px'} alt='null' /> */}
            <div className='hsc'>
            Higher Secoundary (HSC), <span className='cse'>12th</span>
            </div>
            <img className='pic1' src={smb} height={'200px'} width={'200px'} alt='null' />
            <div>
            <span>SMBM</span> MATRICULATION HIGHER SECONDARY SCHOOL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20<span>18</span>-20<span>19</span>
            </div>
            <div className='hsc'>
            Secoundary (SSLC), <span className='cse'>10th</span>
            </div>
            <img className='pic1' src={smb} height={'200px'} width={'200px'} alt='null' />
            <div>
            <span>SMBM</span> MATRICULATION HIGHER SECONDARY SCHOOL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20<span>16</span>-20<span>17</span>
            </div>
        </div>
        </>
    )
}

export default Education