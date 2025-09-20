import { Carousel, Typography } from "@material-tailwind/react";
import Button1 from "./Button";
import { useNavigate } from "react-router";

function CarouselWithContent() {
  const navigate = useNavigate();

  return (
    <Carousel className="h-201" loop={true} autoplay={true} autoplayDelay={3500}>
      
      {/* Slide 1 */}
      <div className="relative h-full w-full">
        <img
          src="https://www.crowcon.com/wp-content/uploads/2024/10/Petrochemical-olefins-scaled.jpg"
          alt="Petrochemical"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              PETROCHEMICAL AND GAS PLANT PIPING
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 opacity-80">
              Our company specializes in petrochemical and gas plant piping, providing design, installation, and maintenance services for critical piping systems.
            </Typography>
            <div className="flex gap-2">
              <Button1 text="Explore" onClick={() => navigate("/services")} />
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative h-full w-full">
        <img
          src="https://coldwellsolar.com/wp-content/uploads/2023/02/industrial-plant-solar-system.jpg"
          alt="Solar Energy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              SOLAR ENERGY SOLUTION
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 opacity-80">
              We provide innovative solar panel installations and energy storage systems for homes and businesses.
            </Typography>
            <div className="flex gap-2">
              <Button1 text="Explore" onClick={() => navigate("/services")} />
            </div>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="relative h-full w-full">
        <img
          src="https://www.variex.in/wp-content/uploads/2021/12/Why-You-Go-Right-Installing-a-Commercial-Fire-Sprinkler-System.jpg"
          alt="Firefighting"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              FIRE FIGHTING SPRINKLER SYSTEM
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 opacity-80">
              We design and install advanced fire protection sprinkler systems that meet international safety standards.
            </Typography>
            <div className="flex gap-2">
              <Button1 text="Explore" onClick={() => navigate("/services")} />
            </div>
          </div>
        </div>
      </div>

      {/* Slide 4 */}
      <div className="relative h-full w-full">
        <img
          src="https://www.thermodial.ie/wp-content/uploads/2019/07/thermodial-air-handling-unit-and-flue-1.jpg.webp"
          alt="HVAC"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              CHILLED WATER HVAC SYSTEM
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 opacity-80">
              Energy-efficient chilled water HVAC systems for large commercial and industrial facilities.
            </Typography>
            <div className="flex gap-2">
              <Button1 text="Explore" onClick={() => navigate("/services")} />
            </div>
          </div>
        </div>
      </div>

      {/* Slide 5 */}
      <div className="relative h-full w-full">
        <img
          src="https://metalexponents.com/wp-content/uploads/2021/07/What-Are-the-Differences-Between-Metal-Fabrication-and-Welding.jpg"
          alt="Fabrication"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              FABRICATION INSTALLATION & MAINTENANCE
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 opacity-80">
              From fabrication to ongoing maintenance, we deliver tailored solutions for industrial clients.
            </Typography>
            <div className="flex gap-2">
              <Button1 text="Explore" onClick={() => navigate("/services")} />
            </div>
          </div>
        </div>
      </div>

      {/* Slide 6 */}
      <div className="relative h-full w-full">
        <img
          src="https://www.runsom.com/wp-content/uploads/2023/04/Swiss-CNC-machining-for-tool-and-die-making.jpg"
          alt="Machine Manufacturing"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              MACHINE MANUFACTURE & DYE MAKING
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 opacity-80">
              Designing and producing custom machinery along with specialized dye making services.
            </Typography>
            <div className="flex gap-2">
              <Button1 text="Explore" onClick={() => navigate("/services")} />
            </div>
          </div>
        </div>
      </div>

      {/* Slide 7 */}
      <div className="relative h-full w-full">
        <img
          src="https://www.gsd.harvard.edu/wp-content/uploads/2022/04/20141107-164357-z453.jpg"
          alt="Steel Structure"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              STEEL STRUCTURE & VESSEL WORKS
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 opacity-80">
              We specialize in steel structures and vessel works with precise engineering and fabrication.
            </Typography>
            <div className="flex gap-2">
              <Button1 text="Explore" onClick={() => navigate("/services")} />
            </div>
          </div>
        </div>
      </div>

      {/* Slide 8 */}
      <div className="relative h-full w-full">
        <img
          src="https://danikaplumbing.com/wp-content/uploads/2022/01/plumbing-systems-header.jpg"
          alt="Plumbing"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              NETWORK PLUMBING
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 opacity-80">
              Expert design, installation, and maintenance of network plumbing systems.
            </Typography>
            <div className="flex gap-2">
              <Button1 text="Explore" onClick={() => navigate("/services")} />
            </div>
          </div>
        </div>
      </div>

      {/* Slide 9 */}
      <div className="relative h-full w-full">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2021/6/XS/YA/VQ/6546417/ducting-work-500x500.jpg"
          alt="Ducting"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              DUCTING & CLADDING WORK
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 opacity-80">
              Providing expert installation of air ducts and cladding systems for efficient ventilation.
            </Typography>
            <div className="flex gap-2">
              <Button1 text="Explore" onClick={() => navigate("/services")} />
            </div>
          </div>
        </div>
      </div>

    </Carousel>
  );
}

export default CarouselWithContent;
