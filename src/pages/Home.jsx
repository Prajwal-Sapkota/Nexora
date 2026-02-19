import Amenities from "../components/Amenities";
import BrandStory from "../components/BrandStory";
import Dining from "../components/Dining";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero"
import Location from "../components/Location";
import MeetingsEvents from "../components/MeetingEvents";
import Navbar from "../components/Navbar"
import RoomsPreview from "../components/RoomsPreview";
import SpecialOffers from "../components/SpecialOffers";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return(
        <div className="overflow-x-hidden">
            <Navbar/>
            <Hero/>
            <BrandStory/>
            <RoomsPreview/>
            <MeetingsEvents/>
            <Amenities/>
            <Dining/>
            
            <Gallery/>
            <Testimonials/>
            <SpecialOffers/>
            <Footer/>
        </div>
    )

}
export default Home;