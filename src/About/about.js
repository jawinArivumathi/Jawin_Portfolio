import Pic1 from './a_pic1.jpeg';


function About(){
    return(
        <>
        <div className="whole">
            <h1>About_</h1>
        <div className='div'>
            Hi, I'm <span>Jawin Arivumathi J</span>
            <p>When I graduated from university I realised how much I had left to learn.</p>
        </div>
        <div className='div'>
            A traditional education had given me specialised knowledge but hadn't set me up
            with the skills needed to succeed in an environment of constant change.
        </div>
        <div className='div'>
            So I set out to answer the question "What knowledge and skills do I need to thrive
            in the 23rd century?"
        </div>
        <img className='pic1' src={Pic1} height={'700px'} width={'400px'} alt='null' />
        <div className='div'>
        MetaLearn is my map of that journey. I've documented everything I've learned
        from years of research and conversations with some of the world's top experts in
        a range of fields from philosophy to technology, and psychology to business.
        </div>
        <div className='div'>
        We live in a time where the world's information is at our fingertips but it's
        incredibly hard to separate the signal from the noise and build real knowledge
        and understanding that can be applied in life and work.
        </div>
        <div className='div'>
        By exploring the conversations and articles on here, you'll gain the insights
        needed to understand yourself and your environment, so you can future proof
        your career.
        </div>
        <div className='div'>
        But I also hope you'll get the inspiration you need to take your education into
        your own hands and thrive in every aspect of our modern world.
        </div>
        
        </div>
        </>
    )
}

export default About