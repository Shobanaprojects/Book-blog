import { Fragment } from "react";
import aboutusimg from "../assets/images/bannerim2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter, faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    return (
        <Fragment>
            <div className="sidebar">
                <div className="sidebar-item">
                    <div className="sidebar-title text-center border-bottom border-top border-secondary">About me</div>
                    <div className="sidebarimg-container">
                        <img src={aboutusimg} alt="no data found" />
                    </div>
                    <p>I love books! I read every day, all the time, as much as I can and sometimes even more than I should. Love fantasy, mystery, thriller...</p>
                </div>
                <div className="sidebar-item">
                    <div className="sidebar-title text-center border-bottom border-top border-secondary">Categories</div>
                    <ul className="sidebar-list">
                        <li className="sidebar-listitem">
                            <a href="">
                                Psychology
                            </a>
                        </li>
                        <li className="sidebar-listitem">
                            <a href="">
                                Fiction
                            </a>
                        </li>
                        <li className="sidebar-listitem">
                            <a href="">
                                Non-Fiction
                            </a>
                        </li>
                        <li className="sidebar-listitem">
                            <a href="">
                                Positive
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-item mt-5">
                    <div className="sidebar-title text-center border-bottom border-top border-secondary">Follow Me</div>
                    <div className="sidebar-socialmedia d-flex justify-content-center">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSquareTwitter} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSquareFacebook} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSquareInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Sidebar;