import AboutSec from "../components/AboutSec";
import CarouselWithContent from "../components/Carousel";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";

function LandingPage(){
    return(
        <>
           <CarouselWithContent />
            <Clients />
            <AboutSec  />
            <Testimonials />
        </>
    )
}

export default LandingPage;