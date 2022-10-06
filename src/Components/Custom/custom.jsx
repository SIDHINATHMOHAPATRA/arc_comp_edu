import "./custom.css";
const Custom = () => {
    return (
        <>
            {/* <h1>I am custom component </h1> */}
            <section className="custom">
                <div className="container">
                    <div className="content">
                        <h6>
                            Why You <span>Join</span> Us
                        </h6>
                        <p>
                            A “finishing training center” in many ways, <br />the institute provides young job aspirants
                            the perfect launch-pad <br />to build a rewarding career in the growing IT sector. From its humble
                            beginnings.

                        </p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-sm-5">
                            <div className="box">
                                <h6>
                                    Expert Teacher
                                </h6>
                                <p>
                                    At <b>ARCHIK</b>, we ensure training is imparted by specialists with proven subject matter expertise and who have spent over a decade in their area of specialization. Our faculty are highly competent, skilled and dedicated to giving their best towards the professional development of our students.                                </p>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="box">
                                <h6>
                                    Trusted Certification
                                </h6>
                                <p>
                                Offering instruction in information technology education and pre-employment training under the brand name <big><b>National Institute for Certification in Engineering Technologies</b></big> (NICET), the institute is dedicated to produce the “best brains” in the state.
                                
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};
export default Custom;