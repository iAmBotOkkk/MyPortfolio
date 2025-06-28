

const Page = () => {
    return (
        <section>
        <div className="homePage">
            <h1>Bishal</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus vitae consequuntur vero. Culpa quia, repellendus quae totam voluptas tempora enim quaerat asperiores nisi voluptatibus.
           Veniam officiis asperiores minima repellendus omnis?</p>
           </div>
           <div className="aboutPage">
            <h2>About Me</h2>
            <p>Hey I am Bishal,a fullstack developer who thrives on turning ideas into real,functional
             web experiences.I specialize in building modern, scalable web apps using M.E.R.N stack 
            </p>
            </div>
            
            <form action="POST" className="contactForm">
                <h2>Let's Connect</h2>
                <input type="text" placeholder="Name" required  />
                <input type="text" placeholder="email" required />
                <input type="text" placeholder="Message"/>

                <button>Send Message</button>
            </form>
      
        
        </section>
    )
}

export default Page