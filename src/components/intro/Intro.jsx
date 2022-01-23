import "./intro.css"
import Me from "../../img/me.jpg"
import Scroll from "../../img/scroll.svg"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Rayan Syed</h1>
                    <div className="i-title-item">Software Developer</div>
                    <p className="i-desc">
                        I am a recent graduate looking to start my career as a software developer. Below you can find the various projects that I have worked on.
                    </p>

                </div>
                <img src={Scroll} className="i-scroll"></img>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img"/>
            </div>
        </div>
    )
}

export default Intro
