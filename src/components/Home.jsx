import { useEffect, useState } from "react"
import hero from "../assets/alina.jpg"

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
                        <a href="#message">message</a>
                        <a href="#memories">memories</a>
                    </ul>
                </div>
            </nav>
            <div className="home">
                <header className="hero">
                    <div className="text">
                        <h1>Happy Birthday Lexi</h1>
                        <p>i wish you a day as beautiful as you are. <br /> <span>you deserve the world</span></p>
                    </div>
                    <div className="bg">
                        <img src={hero} alt="hero" />
                    </div>
                </header>
                <main>
                    <div id="message" className="message">
                        <h1>Here's a little message from me to the most wonderful girl in the whole world.</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias ex suscipit hic fugit saepe omnis earum vel sed fugiat eligendi numquam consequatur accusamus rem, aliquam quibusdam ipsa maiores temporibus ipsam!
                            Natus dolor ducimus, voluptatum reprehenderit officiis animi laboriosam tempora vitae iure magnam ipsam ex porro molestias eum sapiente impedit aperiam? Maxime dolor vitae, minus labore accusamus voluptatum eveniet repellat nisi.
                            Expedita, facere vero recusandae modi aliquid quia ducimus nihil consequatur nesciunt adipisci, animi ipsum harum vitae facilis voluptates, nam eos commodi odit possimus quisquam. Assumenda quod quos provident aliquam suscipit!
                            Ullam ipsam culpa eveniet quisquam illum alias fugiat, veritatis minus iste dignissimos mollitia cupiditate labore quis, magni aliquam. Id eveniet ut modi velit illum sint libero ex debitis totam vero.
                            Tempora dolore impedit expedita corrupti odit minus, amet quaerat minima, consequuntur placeat atque mollitia ipsum in? Temporibus labore porro ea. Sequi consequuntur eaque laboriosam maxime amet corrupti est ipsum aut?
                            Consectetur eos optio blanditiis nesciunt necessitatibus ea eaque, culpa modi tenetur repellat sapiente error suscipit quisquam ipsa nostrum assumenda perspiciatis rem quis hic architecto commodi consequatur atque animi dolores? Inventore?
                            Deserunt voluptatem id culpa soluta quidem nemo beatae excepturi explicabo sed necessitatibus. Dicta sint harum dolorem reprehenderit cum voluptates? Facilis incidunt accusantium atque natus iusto, rerum sequi maiores quaerat beatae!
                            Quam ut fugiat, delectus voluptate optio architecto praesentium ex error rerum et corporis ducimus obcaecati quas iusto quasi excepturi adipisci a asperiores necessitatibus amet eligendi nostrum maxime. Earum, eos molestiae!
                        </p>
                        <a href="video.mp4" download={true}>click.this</a>
                    </div>
                    <div id="memories" className="memories">
                        <h2>Over here, we'll be revisiting some memories of our time together, those i've media of or at least those I remember</h2>
                        <div className="memories-box">
                        <div className="memory one">
                            <img src={hero} alt="image" />
                            <h1>Lorem Ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ducimus excepturi eveniet, quibusdam ratione illo consequatur perferendis facilis nostrum alias, deleniti fugiat sit enim sint repellendus ex beatae, tenetur incidunt?
                            </p>
                            <span>16th of August, 2025</span>
                        </div>
                        <div className="memory two">
                            <img src={hero} alt="image" />
                            <h1>Lorem Ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ducimus excepturi eveniet, quibusdam ratione illo consequatur perferendis facilis nostrum alias, deleniti fugiat sit enim sint repellendus ex beatae, tenetur incidunt?
                            </p>
                            <span>16th of August, 2025</span>
                        </div>
                        <div className="memory tres">
                            <img src={hero} alt="image" />
                            <h1>Lorem Ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ducimus excepturi eveniet, quibusdam ratione illo consequatur perferendis facilis nostrum alias, deleniti fugiat sit enim sint repellendus ex beatae, tenetur incidunt?
                            </p>
                            <span>16th of August, 2025</span>
                        </div>
                        <div className="memory four">
                            <img src={hero} alt="image" />
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