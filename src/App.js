import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import Custom from "./Components/Custom/custom";
import Latest from "./Components/Latest_Course/latest";
import NewCourse from "./Components/New_Course/new";
import Testimonial from "./Components/Testimonial/testimo";
import Footer from "./Components/Footer/footer";
const App = () => {
    return(
        <>
            {/* <h1>Hey guys hope App.js you are well,</h1> */}
            <Navbar />
            <Home />
            <Custom />
            <Latest />
            <NewCourse />
            <Testimonial />
            <Footer />
        </>
    );
};
export default App;