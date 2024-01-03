import { useEffect, useState } from 'react'
import './HomePage.css'

const HomePage = () => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        var burger = document.querySelector('.burger')
        var navbar = document.querySelector('.right-navi')

        if (burger) {
            if (isActive) {
                navbar.classList.add('active')
            }
            else {
                navbar.classList.remove('active')
            }
        }
    }, [isActive])

    useEffect(() => {
        var section = document.querySelectorAll('section')
        var navLinks = document.querySelectorAll('.right-navi ul li a')

       window.onscroll = () => {
        section.forEach(sec => {
            var top = window.scrollY;
            var offset = sec.offsetTop;
            var height = sec.offsetHeight
            var id = sec.getAttribute('id')
        })

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.right-navi ul li a[href*= ' +id+ ']').classList.add('active')
            })
        }
       }
    })

    const handleToggle = () => {
        setIsActive(prevState => !prevState);
    };

    return (
        <div id="full-body">

            <div className='navbar'>
                <div className="left-navi">
                    <h1><a href='#home'>PORTFOLIO.</a></h1>
                </div>
                <div className='burger'>
                    <button onClick={handleToggle} ><i class="fa-solid fa-bars fa-xl"></i></button>
                </div>
                <div className='right-navi'>
                    <ul>
                        <li><a href="#Home" class='active'>HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#skills">SKILLS</a></li>
                        <li><a href="#project">PROJECTS</a></li>
                        <li><a href="#services">SERVICES</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </div>
            </div>

            <section id='home'>
                <div className='inner-home'>
                    <div className='inner-home1'>
                        <h2 className='h2'>Hello, It's Me</h2>
                        <h1 className='h1'>Amaan chaudhary</h1>
                        <h2 className='h3'>I am a Full Stack Web Developer</h2>
                        <p className='p'>
                            As a web developer, I possess a diverse skill set
                            covering both front-end and back-end technologies.
                            Proficient in languages such as HTML, CSS, JavaScript , React.js and Node.js.
                        </p>
                        <div className='Home-button'>
                            <button><a href='#about'>About Me</a></button>
                            <button><a href='#contact'>Contact Me</a></button>
                        </div>
                    </div>
                    <div className='inner-home2'>
                        <img src='https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg' alt='Loading...' />
                    </div>
                </div>
            </section>

            <section id='about'>
                <h1 className='about-h1'>ABOUT ME</h1>
            </section>

        </div>
    )
}

export default HomePage




