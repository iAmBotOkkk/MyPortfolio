

const Page = () => {
    return (

        <section>
            <div className="homePage">
                <h1>Hii, I am Bishal👋🏻</h1>
                <p>FullStack Developer that loves
                    building cool stuffs and solving
                    <div> real world problems.Strong believer in clean code and good coffee☕</div>
                </p>
            </div>
            <div className="images">
                <img  src="React.png" alt="" className="rotate"/>
                <img src="express.png" alt="" />
                <img src="mongodb.png" alt="" />
                <img src="node.png" alt="" />
            </div>


            <div className="aboutPage">
                <h2>About Me</h2>
                <p>Hey I am Bishal,a fullstack developer who thrives on turning ideas into real,
                    <div>functional web experiences.I specialize in building modern, scalable web apps </div>
                    <div>using M.E.R.N stack</div>
                </p>
            </div>

            <div className="Projects">
                <h2>Projects</h2>
            </div>

            <div className="Skills">
                <h2>My skills</h2>
                <div className="Myskills">
                <span>React</span>
                <span>NodeJs</span>
                <span>MongoDb</span>
                <span>NextJs</span>
                <span>Javascript</span>
                <span>TypeScript</span>
                </div>
                
            </div>
            <div className="contactForm">
                <form>
                    <h2>Let's Connect</h2>
                    <input type="text" placeholder="Name" required />
                    <input type="text" placeholder="email" required />
                    <textarea rows={4} cols={50} placeholder="Message"></textarea>

                    <button>Send Message</button>
                </form>
            </div>
            <footer className="footer">
               Made with 💌 by Bishal
            </footer>
        </section>

    )
}

export default Page