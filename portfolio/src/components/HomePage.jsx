import { useEffect, useRef, useState } from 'react'
import './HomePage.css'
import toast from 'react-hot-toast';
import api from '../helpers/axios.config';
import { useFormAction, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser'

const HomePage = () => {

    const [isActive, setIsActive] = useState(false);
    const [details, setDetails] = useState({ userName: '', userEmail: "", userSubject: "", userMessage: "" })
    const topOfPageRef = useRef(null);
    const form = useRef()

    const rout = useNavigate()

    const [skills, setSkills] = useState([
        {
            image: 'data:image/png;base64,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',
            name: 'HTML'
        },
        {
            image: 'data:image/png;base64,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',
            name: "CSS"
        },
        {
            image: 'data:image/png;base64,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',
            name: 'JAVASCRIPT'
        },
        {
            image: 'data:image/png;base64,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',
            name: 'REACT.JS'
        },
        {
            image: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png',
            name: 'EXPRESS.JS'
        },
        {
            image: 'https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png',
            name: 'MONGODB'
        }
    ])
    // console.log(details)

    const handleChange = (event) => {
        setDetails({ ...details, [event.target.name]: event.target.value })
    }

    const handleToggle = () => {
        setIsActive(prevState => !prevState);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (details.userName && details.userEmail) {
            try {
                const response = await api.post("/user/save", { details })
                console.log(response)
                if (response.data.success) {
                    topOfPageRef.current.scrollIntoView({ behavior: 'smooth' });
                    toast.success(response.data.message, {
                        position: 'bottom-right',
                    });
                    setDetails({ userName: '', userEmail: "", userSubject: "", userMessage: "" })
                    emailjs.sendForm('service_vhp9lmc', 'template_va2e5ig', form.current, 'RGF03Dp0-atYbldQ7')
                        .then((result) => {
                            console.log(result.text);
                        }, (error) => {
                            console.log(error.text);
                        });
                } else {
                    throw new Error("Something went wrong")
                }

            } catch (error) {
                toast.error(error?.response?.data.message, {
                    position: 'top-right'
                })
            }
        } else {
            toast.error("Name and Email is Required", {
                position: 'top-right'
            })
        }
    }

    useEffect(() => {
        var burger = document.querySelector('.burger')
        var navbar = document.querySelector('.right-navi')
        
        var closeMenu = document.querySelector('#full-body')
        var closeMenu2 = document.querySelector('#home')
        var closeMenu2 = document.querySelector('#about')
        var closeMenu2 = document.querySelector('#skills')
        var closeMenu2 = document.querySelector('#project')
        var closeMenu2 = document.querySelector('#services')
        var closeMenu2 = document.querySelector('#contact')

        closeMenu.addEventListener('click', () => {
            navbar.classList.remove('active')
        })
        closeMenu2.addEventListener('click', () => {
            navbar.classList.remove('active')
        })

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
                if (top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('.navbar ul li a[href*=' + id + ']').classList.add('active')
                    })
                }
            })
        }
    })


    return (
        <div id="full-body" ref={topOfPageRef} >

            <div className='navbar'>
                <div className="left-navi">
                    <h1><a href='#home'>PORTFOLIO.</a></h1>
                </div>
                <div className='burger'>
                    <button onClick={handleToggle} ><i class="fa-solid fa-bars fa-xl"></i></button>
                </div>

                <div className='right-navi'>
                    <ul>
                        <li><a href="#home" class='active'>HOME</a></li>
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
                <div className='inner-about'>
                    <div className='inner-about1'>
                        <img src='https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg' alt='Loading' />
                    </div>
                    <div className='inner-about2'>
                        <h1 className='about-h1'>ABOUT ME</h1>
                        <h3 className='about-h3'>MERN STACK WEB DEVELOPER</h3>
                        <p className='about-p'>As a MERN (MongoDB, Express.js, React, Node.js) stack web developer,
                            I am driven by a deep passion for creating robust and dynamic web
                            applications. Proficient in each layer of the MERN stack,
                            utilize Express.js to build robust server-side applications, and leverage
                            React to craft engaging, interactive UI/UX. With Node.js as the
                            backbone, I orchestrate seamless communication between the server and client,
                            My expertise lies in designing and implementing full-fledged solutions, employing RESTful APIs,
                            and integrating various tools and libraries to deliver efficient and intuitive
                            applications. With a commitment to staying updated with emerging trends and best
                            practices, I am dedicated to delivering cutting-edge MERN stack solutions that
                            resonate with users and drive impactful experiences on the web.</p>
                    </div>
                </div>
            </section>

            <section id='skills'>
                <h1 className='skills-h1'>MY SKILLS</h1>
                <div className='inner-skills'>
                    {skills.map((pro) => (
                        <div className='skills-main'>
                            <div className='skill-images'>
                                <img src={pro.image} />
                                <h6 className='skill-name'>{pro.name}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id='project'>
                <h1 className='project-h1'>MY PROJECTS</h1>
                <div className='inner-project'>
                    <div className='project-main'>
                        <img src='https://i.ytimg.com/vi/7-nbYhAqG-I/maxresdefault.jpg' alt='image' />
                    </div>
                    <div className='project-main'>
                        <img src='https://user-images.githubusercontent.com/16510597/113294576-5b4e6400-9321-11eb-8940-68e1223b4b0f.jpg' alt='image' />
                    </div>
                    <div className='project-main'>
                        <img src='https://miro.medium.com/v2/resize:fit:2000/1*qF8LfAwUhl57g9T0BVvVdg.jpeg' alt='image' />
                    </div>
                </div>
            </section>

            <section id='services'>
                <h1 className='project-h1'>MY SERVICES</h1>
                <div className='inner-project'>
                    <div className='project-main'>
                        <img src='https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704326400&semt=ais' alt='image' />
                    </div>
                    <div className='project-main'>
                        <img src='https://externlabs.com/blogs/wp-content/uploads/2022/08/API-blog-image.jpg' alt='image' />
                    </div>
                    <div className='project-main'>
                        <img src='https://miro.medium.com/v2/resize:fit:1400/1*Hm-G7dLwMZtLOPWbL6nkww.jpeg' alt='image' />
                    </div>
                </div>
            </section>

            <section id='contact'>
                <h1 className='project-h1'>CONTACT ME</h1>
                <div className='inner-contact'>
                    <div className='contact1'>
                        <h4 className='contact1-h4'>Lets Work Together</h4>
                        <p className='contact-p'>Thank you for taking the time to explore my portfolio! If you have any inquiries,
                            collaboration proposals, or just want to say hello, feel free to reach out.
                            I'm always excited to connect and discuss potential projects.</p>
                        <h5 className='phone-no'><i class="fa-solid fa-phone"></i> PHONE: <span className='imp-text'>[+91 9930368633]</span></h5>
                        <h5 className='email'><i class="fa-solid fa-envelope-circle-check"></i> EMAIL: <span className='imp-text'>Chaudharyamaan982@gmail.com</span></h5>
                        <h5 className='address'><i class="fa-solid fa-location-dot"></i> Address: <span>Mumbai, Maharashtra</span></h5>
                        <p className='contact-p2'>Let's start a conversation and bring your ideas to life! You can expect a prompt response—I'm eager to hear from you.</p>
                    </div>
                    <div className='contact2'>
                        <form ref={form} onSubmit={handleSubmit}>
                            <input className='name' type='text' name='userName' placeholder='Enter Your Name' onChange={handleChange} value={details.userName} /><br />
                            <input className='email-input' type='email' name='userEmail' placeholder='Enter Your Email' onChange={handleChange} value={details.userEmail} /><br />
                            <input className='subject' type='text' name='userSubject' placeholder='Enter Your Subject' onChange={handleChange} value={details.userSubject} /><br />
                            <input className='message' type='text' name='userMessage' placeholder='Enter Your Message' onChange={handleChange} value={details.userMessage} /><br />
                            <input className='submit' type='submit' value='SUBMIT' /><br />
                        </form>
                    </div>
                </div>

            </section>


        </div>
    )
}

export default HomePage




