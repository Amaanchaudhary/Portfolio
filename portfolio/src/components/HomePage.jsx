import './HomePage.css'

const HomePage = () => {

    return (
        <div id="full-body">
            <div id="Screen">

                <div id="navbar">
                    <input type='checkbox' id='check'/>
                    <label for="check" className='checkbtn'>
                    <i class="fa-solid fa-bars fa-xl"></i>
                    </label>

                    <div id="left-navi">
                        <h1>PORTFOLIO.</h1>
                    </div>  
                    
                    <ul id="right-navi">
                        <li><a>HOME</a></li>
                        <li><a>HOME</a></li>
                        <li><a>SKILLS</a></li>
                        <li><a>PROJECTS</a></li>
                        <li><a>SERVICES</a></li>
                        <li><a>CONTACT</a></li>
                    </ul>
                    {/* <div className='navlinks'>
                        <button className='open' name='openlist'><i class="fa-solid fa-bars fa-xl"></i></button>
                        <button className='close' name='closelist'><i class="fa-solid fa-xmark fa-xl"></i></button>
                    </div> */}
                </div>

                <div id='Home'>
                    <h2 className='h2'>Hello, It's Me</h2>
                    <h1 className='h1'>Amaan chaudhary</h1>
                    <h2 className='h2'>I am a Full Stack Web Developer</h2>
                    <p className='p'>
                        As a web developer, I possess a diverse skill set
                        covering both front-end and back-end technologies.
                        Proficient in languages such as HTML, CSS, JavaScript , React.js and Node.js.
                    </p>
                </div>

            </div>



        </div>
    )
}

export default HomePage