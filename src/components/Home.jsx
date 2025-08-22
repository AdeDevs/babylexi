import { useEffect, useState } from "react"
import hero from "../assets/alina.jpg"
import message from "../assets/letter.jpg"
import greeting from "../assets/greeting.jpg"
import blurry from "../assets/blurry.jpg"
import brush from "../assets/brush.jpg"
import goofy from "../assets/goofy.jpg"
import hug from "../assets/hug.jpg"
import mirror from "../assets/mirror.jpg"
import night from "../assets/night.jpg"
import out from "../assets/out.jpg"
import smile from "../assets/smile.jpg"

export default function HomePage() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };
    useEffect(() => {
        if(isActive) {
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
                        <div className="memories-box">
                        <div className="memory one">
                            <img src={hug} alt="image" />
                            <h1>Lorem Ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ducimus excepturi eveniet, quibusdam ratione illo consequatur perferendis facilis nostrum alias, deleniti fugiat sit enim sint repellendus ex beatae, tenetur incidunt?
                            </p>
                            <span>16th of August, 2025</span>
                        </div>
                        <div className="memory two">
                            <img src={brush} alt="image" />
                            <h1>Lorem Ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ducimus excepturi eveniet, quibusdam ratione illo consequatur perferendis facilis nostrum alias, deleniti fugiat sit enim sint repellendus ex beatae, tenetur incidunt?
                            </p>
                            <span>16th of August, 2025</span>
                        </div>
                        <div className="memory tres">
                            <img src={goofy} alt="image" />
                            <h1>Lorem Ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ducimus excepturi eveniet, quibusdam ratione illo consequatur perferendis facilis nostrum alias, deleniti fugiat sit enim sint repellendus ex beatae, tenetur incidunt?
                            </p>
                            <span>16th of August, 2025</span>
                        </div>
                        <div className="memory four">
                            <img src={night} alt="image" />
                            <h1>Lorem Ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ducimus excepturi eveniet, quibusdam ratione illo consequatur perferendis facilis nostrum alias, deleniti fugiat sit enim sint repellendus ex beatae, tenetur incidunt?
                            </p>
                            <span>16th of August, 2025</span>
                        </div>
                        <div className="memory four">
                            <img src={out} alt="image" />
                            <h1>Lorem Ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ducimus excepturi eveniet, quibusdam ratione illo consequatur perferendis facilis nostrum alias, deleniti fugiat sit enim sint repellendus ex beatae, tenetur incidunt?
                            </p>
                            <span>16th of August, 2025</span>
                        </div>
                        <div className="memory tres">
                            <img src={smile} alt="image" />
                            <h1>Lorem Ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ducimus excepturi eveniet, quibusdam ratione illo consequatur perferendis facilis nostrum alias, deleniti fugiat sit enim sint repellendus ex beatae, tenetur incidunt?
                            </p>
                            <span>16th of August, 2025</span>
                        </div>
                        <div className="memory tres">
                            <img src={blurry} alt="image" />
                            <h1>Lorem Ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ducimus excepturi eveniet, quibusdam ratione illo consequatur perferendis facilis nostrum alias, deleniti fugiat sit enim sint repellendus ex beatae, tenetur incidunt?
                            </p>
                            <span>16th of August, 2025</span>
                        </div>
                        <div className="memory four">
                            <img src={mirror} alt="image" />
                            <h1>Lorem Ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ducimus excepturi eveniet, quibusdam ratione illo consequatur perferendis facilis nostrum alias, deleniti fugiat sit enim sint repellendus ex beatae, tenetur incidunt?
                            </p>
                            <span>16th of August, 2025</span>
                        </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}