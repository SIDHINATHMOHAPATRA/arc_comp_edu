import "./new.css";
const NewCourse = () => {
    return (
        <>
            <div className="container new_course">
                <div className="content">
                    <h6>
                        Next Courses
                    </h6>
                    <p>
                        Upcomming courses to be lunched form the respective
                        <br />{" "}
                        dates as mentioned at the top of each course.
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-5">
                        <div className="box">
                            <h6>1.Jan.2022</h6>
                            <h5>JAVA</h5>
                            <p>
                                Java is a high-level, <br />class-based, object-oriented programming language
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="box">
                            <h6>1.Jan.2022</h6>
                            <h5>Oracle DB</h5>
                            <p>
                            It's first database designed for enterprise grid computing, the most flexible and cost effective way to manage information and applications.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5">
                        <div className="box">
                            <h6>1.Jan.2022</h6>
                            <h5>H/W & Networking</h5>
                            <p>
                            The physical or network devices that are essential for interaction and communication between hardware units operational on a C/N.
                            </p>
                        </div>
                    </div>
                    <div className="offset-sm-2 col-sm-5">
                        <div className="box">
                            <h6>1.Jan.2022</h6>
                            <h5>HTML</h5>
                            <p>
                            With HTML you can create your own Website which can be displayed on browser. HTML is easy to learn - You will enjoy it!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default NewCourse;