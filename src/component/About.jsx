import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const About = () => {
    return (
        <Fragment>
            <Header />
            <div className="about-section">
                <h1>About me</h1>

                <h5>Hi there! My name is Shobana.</h5>

                <p className="text-justify">
                    There’s nothing in the world I love more than reading a good book. Give me a comfortable corner, a soft snugly blanket, a steaming cup of pretty much anything and a gripping story, and you won’t see me for days.
                    Because of my love for reading and discovering new books, my favorite job so far was working at a library. I worked there for around a year. And I enjoyed helping people find their new favorite reads, starting more stories than I can finish and just wandering through rows and rows of shelves filled with so many books…
                    On this blog, I’ll try to share my own very subjective take on whatever I’m currently reading. Straight from my heart. My naïve, reckless, delusional heart obsessed with distant worlds and happy endings 😅.
                </p>
                <p>
                    But I am going to stay honest and true to myself. And who knows – maybe my experience helps you find your next favorite book.
                </p>

                <h5>Happy reading, everyone!</h5>
            </div>
            <Footer />
        </Fragment>
    )
}
export default About;