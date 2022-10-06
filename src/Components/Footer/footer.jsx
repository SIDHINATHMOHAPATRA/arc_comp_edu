import "./footer.css";
const Footer = () => {
    return(
        <>
            <footer>
                <div className="container">
                    <div className="row first_row">
                        <div className="footer_content">
                            <h6><span>A</span>RCHIK</h6>
                            <h5>Subscribe To Out News Letter</h5>
                            <div>
                                <input type="text" className="form-control" placeholder="Your Email">
                                </input>
                                <button className="btn">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="second_row row">
                        <div className="col-sm-3">
                            <h6>Social Media</h6>
                            <li>Facebook</li>
                            <li>Linkedln</li>
                            <li>Glassdoor</li>
                            <li>Twitter</li>
                        </div>
                        <div className="col-sm-3">
                            <h6>Courses</h6>
                            <li>PGDCA</li>
                            <li>DCA</li>
                            <li>DLC</li>
                            <li>Tally ERP 9.0</li>
                        </div>
                        <div className="col-sm-3">
                            <h6>Branches</h6>
                            <li>Sukinda</li>
                            <li>WIP1</li>
                            <li>WIP2</li>
                            <li>WIP3</li>
                        </div>
                        <div className="col-sm-3">
                            <h6>ContactUs</h6>
                            <li>Archik Computer Education</li>
                            <li>+91 9238963820</li>
                            <li>Sukinda, Jajpur</li>
                            <li>Odisha</li>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;