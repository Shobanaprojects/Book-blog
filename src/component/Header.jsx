import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter, faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <Fragment>
            {/* display in large device */}
            <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm d-none d-md-block">
                <div className="container">
                    <div className="nav-socialmedia">
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
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#subscribe">Subscribe</a>
                        </li>
                    </ul>
                    <div className="nav-searchbar">
                        <a>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </a>
                    </div>
                </div>
            </nav>

            {/* display in small device */}

            <nav class="navbar navbar-expand-lg bg-white shadow-sm d-block d-sm-none nav-sm navbar-mobileview">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">BLOG</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#subscribe">Subscribe</a>
                            </li>
                        </ul>
                        <div className="nav-socialmedia">
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
            </nav>
        </Fragment>
    )
}
export default Header;