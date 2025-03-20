import { Fragment } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <Fragment>
            <div className="footer" id="subscribe">
                <h3 className="mb-4">Subscribe here to get my latest posts</h3>
                <div class="row">
                    <div class="col-md-9 col-lg-10">
                        <input type="text" class="form-control" placeholder="Enter your email here" />
                    </div>
                    <div class="col-md-3 col-lg-2">
                        <button type="submit" class="btn">Join</button>
                    </div>
                </div>
                <div className="float-end socialmedia-container mt-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </div>
            </div>
        </Fragment>
    )
}
export default Footer;