import HeaderImg from "../../Images/header3.jpg";
import "./home.css";
const Home = () => {
    return (
        <>
            <div className="header">
                <div>
                    <div className="img">
                        <img src={HeaderImg} alt="" />
                    </div>
                    <div className="Overlay"></div>
                </div>
                <div className="HeaderContent">
                    <h6>Welcome</h6>
                    <h5>
                        ARCHIK COMPUTER EDUCATION
                    </h5>
                    <p>An Ideal Institution Of Modern Technologies</p>
                    <button className="btn">Discover More</button>
                </div>
            </div>
        </>
    );
};
export default Home;