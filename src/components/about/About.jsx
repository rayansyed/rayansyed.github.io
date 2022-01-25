import "./about.css"
import Sheridan from "../../img/sheridan.jpg"
import Survalent from "../../img/survalent.jpg"
import Linkedin from "../../img/linkedin.png"
import Github from "../../img/github-logo.png"
import Bitbucket from "../../img/bitbucket.png"
const About = () => {
    return (
        // <div className="a">
        //    <div className="a-left">
        //     <div className="a-card bg"></div>
        //     <div className="a-card">
        //         <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhbmdlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
        //     </div>
        //     </div> 
        //    <div className="a-right">
        //        <h1 className="a-title">About Me</h1>
        //        <p className="a-sub">
        //        Sub heading consectetur adipiscing elit. Vestibulum ornare lobortis quam, eget tincidunt ligula tempor ac. 
        //        </p>
        //        <p className="a-desc">
        //        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare lobortis quam, eget tincidunt ligula tempor ac. Donec suscipit et arcu tempus faucibus. Mauris volutpat turpis sit amet malesuada accumsan. Suspendisse at metus tincidunt, aliquet justo ac, fermentum mauris. Donec gravida sit amet sapien et bibendum. Sed suscipit, dui vitae pharetra volutpat, purus velit condimentum diam, id sollicitudin ipsum nunc in felis. Sed dictum dolor non lectus aliquet, in venenatis justo imperdiet. Vestibulum mattis elementum odio, at feugiat ligula luctus et. 
        //        </p>
        //    </div>
        // </div>
        <div className="a-container">
            <h1 className="a-title">About Me</h1>
            <div className="a">
                <div className="a-wrapper">
                    <p className="a-sub">
                    </p>
                    <p className="a-desc">
                    Hi, I'm Rayan! I recently graduated from Sheridan College with a degree in Computer Science (Mobile Computing). I have a passion for developing mobile and web applications, with experience in object oriented programming principles and concepts. Outside of software development, I enjoy photography, watching sports, and playing video games!
                    </p>
                    <h3 className="a-education">Education</h3>
                    <div className="a-school">
                        <img src={Sheridan} className="a-school-img"></img>
                        <div className="a-school-texts">
                            <h4 className="a-school-title">Sheridan College</h4>
                            <h4 className="a-school-info">Honours Bachelor of Computer Science (Mobile Computing)</h4>
                            <p className="a-school-desc">September 2017- December 2021</p>
                        </div>
                    </div>

                    <h3 className="a-education">Work Experience</h3>
                    <div className="a-school">
                        <img src={Sheridan} className="a-school-img"></img>
                        <div className="a-school-texts">
                            <h4 className="a-school-title">Sheridan College</h4>
                            <h4 className="a-school-info">Product Designer</h4>
                            <p className="a-school-desc">May 2021 - August 2021</p>
                        </div>
                    </div>
                    <div className="a-school">
                        <img src={Survalent} className="a-school-img"></img>
                        <div className="a-school-texts">
                            <h4 className="a-school-title">Survalent Technology</h4>
                            <h4 className="a-school-info">Software Developer Intern</h4>
                            <p className="a-school-desc">February 2020 - August 2020</p>
                        </div>
                    </div>
                    <h3 className="a-education">Socials</h3>
                    <div className="a-social">
                        <a href="https://www.linkedin.com/in/rayansyed/" target="_blank"> 
                        <img src={Linkedin} className="a-icon"></img>
                        </a>
                        <a href="https://github.com/rayansyed" target="_blank">
                        <img src={Github} className="a-icon"></img>
                        </a>
                        <a href="https://bitbucket.org/rayansyed/" target="_blank">
                        <img src={Bitbucket} className="a-icon"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
