import "./latest.css";
import Course1 from "../../Images/1-PGDCA.jpg";
import Course2 from "../../Images/2-DCA.jpg";
import Course3 from "../../Images/3-DLC.jpg";
import Course4 from "../../Images/4-Tally.jpg";
const Latest = () => {
    return (
        <>
            <div className="latest container">
                <div className="content">
                    <h6>
                        Latest Courses
                    </h6>
                    <p>
                        Here are the current on going courses in our training center.
                        <br />{" "}
                        Click on the Details buttons to navigate through the
                        <br />
                        details of each course.
                    </p>
                </div>

                <div className="row">
                    <div className="col-sm-3">
                        <div className="box">
                            <img src={Course1} className='img-fluid' alt="" />
                            <div className="boxContent">
                                <h6>PGDCA</h6>
                                {/* <h5>Post</h5> */}
                                <p>
                                <strong>PGDCA</strong> focusing on theoretical
                                    and development knowledge on Computer Science and applications.
                                </p>
                                {/* <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <br />                                 */}
                                <a href="#">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="box">
                            <img src={Course2} className='img-fluid' alt="" />
                            <div className="boxContent">
                                <h6>DCA</h6>
                                {/* <h5>Programming</h5> */}
                                <p>
                                The realistic and technical details pertaining to programming tools and applications which are used in our everyday lives.
                                </p>
                                {/* <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <br />                                 */}
                                <a href="#">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="box">
                            <img src={Course3} className='img-fluid' alt="" />
                            <div className="boxContent">
                                <h6>DLC</h6>
                                {/* <h5>Programming</h5> */}
                                <p>
                                Digital literacy is the ability to navigate our digital world using reading, writing, technical skills, and critical thinking.
                                </p>
                                {/* <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <br />                                 */}
                                <a href="#">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="box">
                            <img src={Course4} className='img-fluid' alt="" />
                            <div className="boxContent">
                                <h6>Tally ERP 9.0</h6>
                                {/* <h5>Programming</h5> */}
                                <p>
                                Learn & Master the basics of Tally ERP 9, Accounting, Tally with GST, E-way Bill, Payroll, and many more.
                                </p>
                                {/* <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <br />                                 */}
                                <a href="#">Details</a>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
};
export default Latest;