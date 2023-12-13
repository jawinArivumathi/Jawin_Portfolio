// import 'bootstrap/dist/css/bootstrap.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import python from './pyhton.jpg' <img src={python} height={'200px'} width={'200px'}/>


function Skills(){

      function AnimatedExample1() {
        return <ProgressBar  className='bar'  animated now={80} />;
      }
      function AnimatedExample2() {
        return <ProgressBar  className='bar'  animated now={70} />;
      }
      function AnimatedExample3() {
        return <ProgressBar  className='bar'  animated now={60} />;
      }
      function AnimatedExample4() {
        return <ProgressBar  className='bar'  animated now={75} />;
      }
      function AnimatedExample5() {
        return <ProgressBar  className='bar'  animated now={95} />;
      }

    return(
        <>
        <div className="whole">
            <h1>Skills_</h1>
            <div className='top'><span>Technical Skills :</span>
                <div className='sub'>Programming Language :
                    <div> <span>Python</span>
                    <AnimatedExample1/>
                    </div>
                    <div><span>C</span>
                    <AnimatedExample2/>
                    </div>
                    <div><span>C++</span>
                    <AnimatedExample3/>
                    </div>
                    <div><span>Java Script</span>
                    <AnimatedExample4/>
                    </div>
                    <div><span>Shell Scripting</span>
                    <AnimatedExample3/>
                    </div>
                </div>
                <div className='sub'>Markup Language :
                    <div><span>HTML</span>
                    <AnimatedExample5/>
                    </div>
                </div>
                <div className='sub'>Style Sheet :
                    <div><span>CSS</span>
                    <AnimatedExample5/>
                    </div>
                </div>
                <div className='sub'>Front-end FrameWork :
                    <div><span>React.js</span>
                    <AnimatedExample3/>
                    </div>
                    <div><span>Bootstrap</span>
                    <AnimatedExample3/>
                    </div>
                </div>
                <div className='sub'> DBMS :
                    <div><span>Oracle SQL</span>
                    <AnimatedExample1/>
                    </div>
                    <div><span>My SQL</span>
                    <AnimatedExample1/>
                    </div>
                </div>
                <div className='sub'> Tools :
                    <div><span>Informatica</span>
                    <AnimatedExample3/>
                    </div>
                    <div><span>PyCharm</span>
                    <AnimatedExample2/>
                    </div>
                    <div><span>Ms-Office</span>
                    <AnimatedExample5/>
                    </div>
                </div>

            </div>
          
        </div>
        </>
    )
}

export default Skills