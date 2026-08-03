import Features from "./Components/Features"
import Contact from "./Components/Contact"
import Navbar from "./Components/Navbar"
import Testimonial from "./Components/Testimonial"
import Questions from "./Components/Questions"

function Home(){
    return(
        <>
        <Navbar/>
        <Features/>
        <Testimonial/>
        <Questions/>
        <Contact/>
        </>
    )
}
export default Home