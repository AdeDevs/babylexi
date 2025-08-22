import { useEffect, useState } from "react"
// import hero from "../assets/alina.jpg"
import message from "../assets/letter.jpg"
import greeting from "../assets/greeting.jpg"
// import blurry from "../assets/blurry.jpg"
// import brush from "../assets/brush.jpg"
// import goofy from "../assets/goofy.jpg"
// import hug from "../assets/hug.jpg"
// import mirror from "../assets/mirror.jpg"
// import night from "../assets/night.jpg"
// import out from "../assets/out.jpg"
// import smile from "../assets/smile.jpg"

export default function HomePage() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };
    useEffect(() => {
        if (isActive) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }, [isActive])

    return (
        <div className="parent">
            <nav className="navigation">
                <h1><a href="/">happy birthday baby lex</a></h1>
                <ul className="desk">
                    <a href="#message">message</a>
                    <a href="#memories">memories</a>
                    <span className="toggle open" onClick={toggleMenu}><ion-icon id="tog" name="menu-outline" /></span>
                </ul>

                <div className={`overlay ${isActive ? "active" : ""}`} onClick={toggleMenu}></div>
                <div className={`mob ${isActive ? "active" : ""}`}>
                    <span className="toggle close" onClick={toggleMenu}><ion-icon id="tog" name="close-outline" /></span>
                    <ul>
                        <a href="#message" onClick={toggleMenu}>message</a>
                        <a href="#memories" onClick={toggleMenu}>memories</a>
                    </ul>
                </div>
            </nav>
            <div className="home">
                <header className="hero">
                    {/* <div className="text">
                        <h1>Happy Birthday Lexi</h1>
                        <p>i wish you a day as beautiful as you are. <br /> <span>you deserve the world</span></p>
                    </div> */}
                    <div className="bg">
                        <img src={greeting} alt="hero" />
                    </div>
                </header>
                <main>
                    <div id="message" className="message">
                        <h1>Here's a little message from me to the most wonderful girl in the whole world.</h1>
                        <div className="message-box">
                            <img src={message} alt="image" />
                        </div>
                    </div>
                    <div id="memories" className="memories">
                        <h2>Over here, we'll be revisiting some memories of our time together, those i've media of or at least those I remember</h2>
                        <p className="hope">Hoping to make more memories with you...</p>
                        <div className="test-box">
                            <div className="test one"></div>
                            <div className="test two"></div>
                            <div className="test three"></div>
                            <div className="test four"></div>
                            <div className="test five"></div>
                            <div className="test six"></div>
                            <div className="test sev"></div>
                            <div className="test eight"></div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}