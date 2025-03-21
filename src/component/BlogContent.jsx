import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

import { data } from "../assets/data";


const BlogContent = () => {
    const { id } = useParams();
    const post = data.find((post) => post.id === parseInt(id));
    

    return (
        <Fragment>
            <Header />
            <div className="blog-content">
                <div className="row">
                    <div className="col-md-8 col-lg-9">
                        <div className="blogcontentimg-container">
                            <img src={post.image} alt="no data found" />
                        </div>
                        <div className="blogcontent-des">
                            <h4 className="text-center fw-semibold mt-4 mb-4">{post.title}</h4>
                            <p className="text-justify">{post.description}</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <Sidebar />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
export default BlogContent;