import { Fragment } from "react";
import { data } from "../assets/data";
import Sidebar from "./Sidebar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const BlogPost = () => {
    return (
        <Fragment>
            <div className="blog">
                <div className="row">
                    <div className="col-md-8 col-lg-9">
                        <h6 className="fw-light mb-4">All Posts</h6>
                        {data.map((item) => (
                            <a href={`/blog/${item.id}`} className="text-decoration-none text-dark d-block" key={item.id}>
                                <div className="row g-0 border mb-4">
                                    {/* Left side */}

                                    <div className="col-lg-5">
                                        <div className="bookimage-container">
                                            <img src={item.image} alt="no data found" />
                                        </div>
                                    </div>

                                    {/* Right side */}
                                    <div className="col-lg-7 p-4">
                                        <div className="d-flex justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <div className="user-details">
                                                    <h6 class="mb-0">{item.author}</h6>
                                                    <h6 class="text-muted">{item.date}</h6>
                                                </div>
                                            </div>
                                            <div><FontAwesomeIcon icon={faEllipsisV} /></div>
                                        </div>
                                        <div className="postcontainer border-bottom">
                                            <h2>{item.title}</h2>
                                            <p className="subtitle text-break">{item.description}</p>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3 comment-container">
                                            <div className="d-flex">
                                                <h6>{item.views} views</h6>
                                            </div>
                                            <div>
                                                <FontAwesomeIcon icon={faHeart} style={{ color: "#ff3d3d" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}

                    </div>
                    <div className="col-md-4 col-lg-3">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default BlogPost;