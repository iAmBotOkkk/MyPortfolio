

const home = () => {
    return (
        <div className="homePage">
            <h1>Bishal</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus vitae consequuntur vero. Culpa quia, repellendus quae totam voluptas tempora enim quaerat asperiores nisi voluptatibus.
           Veniam officiis asperiores minima repellendus omnis?</p>
        </div>
       
    )
}

const about = () =>{
    return (
        <div className="aboutPage">
            <h2>About Me</h2>
            <p>Hey I am Bishal,a fullstack developer who thrives on turning ideas into real,functional
             web experiences.I specialize in building modern, scalable web apps using M.E.R.N stack 
            </p>

            <form action="Post" className="contactForm">
                <h2>Let's Connect</h2>
                <input type="text" placeholder="Name" required = "true" />
                <input type="text" placeholder="email" required = "true"/>
                <input type="text" placeholder="Message"/>

                <button>Sent Message</button>
            </form>
        </div>
    )
      }

export default {home , about};