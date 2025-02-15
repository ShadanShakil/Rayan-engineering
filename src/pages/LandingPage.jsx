import AboutSec from "../components/AboutSec";
import CarouselWithContent from "../components/Carousel";
import Clients from "../components/Clients";

function LandingPage(){
    return(
        <>
           <CarouselWithContent />
            <Clients />
            <AboutSec  />
        </>
    )
}

export default LandingPage;