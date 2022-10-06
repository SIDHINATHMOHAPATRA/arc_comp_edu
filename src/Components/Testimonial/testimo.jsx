import Testimoni1 from "../../Images/1-testimoni.jpg";
import Testimoni2 from "../../Images/2-testimoni.jpg";
import Testimoni3 from "../../Images/3-testimoni.jpg";
import "./testimo.css";
const Testimonial = () => {
    return (
        <>
            <div className="testimonial container">
                <div className="content">
                    <h6>
                        What They Say
                    </h6>
                    <p>
                        Some anwer for why you join us then using line bread.
                        <br />{" "}
                        Now some more sentenses need to give here to fulfil
                        it.
                    </p>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="box">
                            <p>
                            Hello, My self Anjali Mishra, Currently persuing PGDCA full time course at ARCHIK COMPUTER EDUCATION. The most effective guide line have ever....                            </p>
                            <img src={Testimoni1} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-sm-4 mid">
                        <div className="box">
                            <p>
                            Hello, My self Sumit Biswas, Currently persuing Tally ERP 9 Accounting package at ARCHIK COMPUTER EDUCATION. This is the best educational institute I have......
                            </p>
                            <img src={Testimoni2} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="box">
                            <p>
                            Hello, My self Priyanka Das, Currently persuing DLC full time course at ARCHIK COMPUTER EDUCATION. Most co-operative faculty, doubt clear sessions....                            </p>
                            <img src={Testimoni3} className='img-fluid' alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
export default Testimonial;