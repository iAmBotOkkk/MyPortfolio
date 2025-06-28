

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
            <div> <img src="" alt="" /></div>
            <div className="aboutPage">
                <h2>About Me</h2>
                <p>Hey I am Bishal,a fullstack developer who thrives on turning ideas into real,functional
                    web experiences.I specialize in building modern, scalable web apps using M.E.R.N stack
                </p>
            </div>
            <div className="contactForm">
                <form action="POST" >
                    <h2>Let's Connect</h2>
                    <input type="text" placeholder="Name" required />
                    <input type="text" placeholder="email" required />
                    <input type="text" placeholder="Message" />

                    <button>Send Message</button>
                </form>
            </div>
            <footer>
                all copyrights reserved
            </footer>
        </section>

    )
}

export default Page