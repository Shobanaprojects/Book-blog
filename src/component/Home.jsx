import { Fragment } from "react";
import Header from "./Header";
import bannerImage from "../assets/images/bannerimg.jpg"
import BlogPost from "./BlogPost"
import Footer from "./Footer";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <div className="banner">
                <div className="banner-title d-flex justify-content-center ">
                    <h4 className="position-absolute bannertitle-sm">Booklover</h4>
                    <h1 className="position-absolute bannertitle-lg mt-3">Blog</h1>
                </div>
                <div className="banner-img">
                    <img src={bannerImage} alt="no image found"/>
                </div>
            </div>
            <BlogPost/>
            <Footer/>   
        </Fragment>
    )
}
export default Home;