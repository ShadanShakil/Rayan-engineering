// import { Card, List, ListItem } from "@material-tailwind/react";

function Services() {
  return (
    <>
      <section>
        <h1 className="text-5xl font-bold text-center mt-10">OUR CAPABILITIES</h1>
        <p className="text-xl font-semibold text-gray-700 md:px-20 p-10  text-center">Rayan Engineering. In-house detailing staff has the skill and 
knowledge to tackle all of the structural needs of our clients. 
Our main objective is to provide complete industrial solutions. 
Our activities include - Engineering estimation.</p>
      </section>

        {/* 1st pair */}

      <section className="border border-black flex md:flex-row flex-col md:m-10">
        <div className="md:w-[50%] w-full">
          <img
            src="https://www.crowcon.com/wp-content/uploads/2024/10/Petrochemical-olefins-scaled.jpg"
            className="brightness-75"
          />
        </div>
        <div className="md:w-[50%] w-full bg-black text-white">
            <div className="h-full flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold m-10">
            PETROCHEMICAL AND GAS PLANT:
          </h1>
          <p className="text-xl text-gray-200 mx-10 mb-10">
            Oil and Gas team has well over 20 year of on the job experience in
            the oil and energy. We make the difference by executing first class
            services that is done right the first time so your project are
            successfully completed on time, and on budget every time. Our
            employees are, without a doubt, the key to our success. We hire the
            best people we can find, train them to perform to standard and
            expect more out of them than even they thought possible. We reward
            success and promote from within whenever possible. We expect our
            people to be successful at what they do and that mean a successful
            project for our clients.
          </p>
          </div>
        </div>
      </section>

      <section className="border border-black flex md:flex-row flex-col-reverse md:m-10">
        <div className="md:w-[50%] w-full bg-black text-white">
            <div className="h-full flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold m-10">
          INTEGRATED SECURITY:
          </h1>
          <p className="text-xl text-gray-200 mx-10 mb-10">
          We specialize in the manufacturing, installation, testing, and commissioning of all types of electrical panels. Our services also include fire alarm systems, emergency lighting, and power solutions for all types of LV rooms, ensuring safety and efficiency.
          </p>
          </div>
        </div>
        <div className="md:w-[50%] w-full">
          <img
            src="https://www.gensecurity.com/hs-fs/hubfs/Blog/Security%20System%20parts%20and%20cameras%20scattered%20on%20top%20of%20blueprint.jpg?width=1000&name=Security%20System%20parts%20and%20cameras%20scattered%20on%20top%20of%20blueprint.jpg"
            className="brightness-75"
          />
        </div>
      </section>

            {/* 2nd pair  */}

      <section className="border border-black flex md:flex-row flex-col md:m-10">
        <div className="md:w-[50%] w-full">
          <img
            src="https://www.thermodial.ie/wp-content/uploads/2019/07/thermodial-air-handling-unit-and-flue-1.jpg.webp"
            className="brightness-75"
          />
        </div>
        <div className="md:w-[50%] w-full bg-black text-white">
            <div className="h-full flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold m-10">
          HVAC SYSTEM
          </h1>
          <p className="text-xl text-gray-200 mx-10 mb-10">
          We provide comprehensive HVAC solutions, including split, package, and central air conditioning systems, as well as chilled and cooling water systems. Our services also cover commercial and industrial ventilation, ducting and cladding works, hot water and steam boilers, and building management systems for optimal climate control.
          </p>
          </div>
        </div>
      </section>

      <section className="border border-black flex md:flex-row flex-col-reverse md:m-10">
        <div className="md:w-[50%] w-full bg-black text-white">
            <div className="h-full flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold m-10">
          FIRE PROTECTION:
          </h1>
          <p className="text-xl text-gray-200 mx-10 mb-10">
          We offer comprehensive fire protection solutions, including fire sprinkler and hydrant systems, fire suppression gas systems, and alarm check valve assemblies. Our services also cover water spray and mist systems, zone control valves, FM 200 gas systems, fire hose cabinets, firefighting piping, and complete fire extinguishing systems for enhanced safety.
          </p>
          </div>
        </div>
        <div className="md:w-[50%] w-full">
          <img
            src="https://www.variex.in/wp-content/uploads/2021/12/Why-You-Go-Right-Installing-a-Commercial-Fire-Sprinkler-System.jpg"
            className="brightness-75"
          />
        </div>
      </section>

            {/* 3rd pair */}

            <section className="border border-black flex md:flex-row flex-col md:m-10">
        <div className="md:w-[50%] w-full">
          <img
            src="https://danikaplumbing.com/wp-content/uploads/2022/01/plumbing-systems-header.jpg"
            className="brightness-75"
          />
        </div>
        <div className="md:w-[50%] w-full bg-black text-white">
            <div className="h-full flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold m-10">
          PLUMBING:
          </h1>
          <p className="text-xl text-gray-200 mx-10 mb-10">
          We provide complete plumbing solutions, including water demand assessment, equipment selection, and supply systems for hot and cold water. Our services cover stormwater drainage, rainwater disposal, pressurized pneumatic water supply, booster pump sets, reverse osmosis and filtration systems, drainage and sanitary sewer systems, as well as testing and commissioning for efficient water management.
          </p>
          </div>
        </div>
      </section>

      <section className="border border-black flex md:flex-row flex-col-reverse md:m-10">
        <div className="md:w-[50%] w-full bg-black text-white">
            <div className="h-full flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold m-10">
          SOLAR ENERGY SOLUTION:
          </h1>
          <p className="text-xl text-gray-200 mx-10 mb-10">
          A company specializing in solar energy solutions, offering innovative solar panel installations and energy storage systems for residential and commercial properties to reduce energy costs and carbon footprints.          </p>
          </div>
        </div>
        <div className="md:w-[50%] w-full">
          <img
            src="https://coldwellsolar.com/wp-content/uploads/2023/02/industrial-plant-solar-system.jpg"
            className="brightness-75"
          />
        </div>
      </section>

        {/* 4th pair  */}

        <section className="border border-black flex md:flex-row flex-col md:m-10">
        <div className="md:w-[50%] w-full">
          <img
            src="https://metalexponents.com/wp-content/uploads/2021/07/What-Are-the-Differences-Between-Metal-Fabrication-and-Welding.jpg"
            className="brightness-75"
          />
        </div>
        <div className="md:w-[50%] w-full bg-black text-white">
            <div className="h-full flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold m-10">
          FABRICATION INSTALLATION & MAINTENANCE:
          </h1>
          <p className="text-xl text-gray-200 mx-10 mb-10">
          A company specializing in fabrication, installation, and maintenance focuses on designing and manufacturing custom components, installing them efficiently, and providing ongoing maintenance services to ensure systems and equipment operate at peak performance.          </p>
          </div>
        </div>
      </section>

      <section className="border border-black flex md:flex-row flex-col-reverse md:m-10">
        <div className="md:w-[50%] w-full bg-black text-white">
            <div className="h-full flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold m-10">
          MACHINE MANUFACTURE & ALL TYPES OF DYE MAKING:
          </h1>
          <p className="text-xl text-gray-200 mx-10 mb-10">
          A company specializing in machine manufacturing and all types of dye making designs and produces custom machinery while providing expertise in creating dyes for various applications, ensuring high-quality results and efficiency for clients across industries.          </p>
          </div>
        </div>
        <div className="md:w-[50%] w-full">
          <img
            src="https://www.market-prospects.com/storage/images/a224cfebd81eb5f2024442b833087c12.jpg"
            className="brightness-75"
          />
        </div>
      </section>

        {/* 5th pair */}


        <section className="border border-black flex md:flex-row flex-col md:m-10">
        <div className="md:w-[50%] w-full">
          <img
            src="https://www.gsd.harvard.edu/wp-content/uploads/2022/04/20141107-164357-z453.jpg"
            className="brightness-75"
          />
        </div>
        <div className="md:w-[50%] w-full bg-black text-white">
            <div className="h-full flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold m-10">
          STEEL STRUCTURE & VASSAL WORKS:
          </h1>
          <p className="text-xl text-gray-200 mx-10 mb-10">
          A company specializing in steel structure and vessel works focuses on designing, fabricating, and installing durable steel structures and vessels for various industries. They ensure precise construction and strong, reliable solutions tailored to meet the specific needs of their clients.          
          </p>
          </div>
        </div>
      </section>

      <section className="border border-black flex md:flex-row flex-col-reverse md:m-10">
        <div className="md:w-[50%] w-full bg-black text-white">
            <div className="h-full flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold m-10">
          DUCTING & CLADDING WORK:
          </h1>
          <p className="text-xl text-gray-200 mx-10 mb-10">
          A company specializing in ducting and cladding work provides expert installation of air ducts and cladding systems, ensuring proper ventilation and protection for buildings. They deliver durable, high-quality solutions to enhance efficiency, safety, and aesthetic appeal.
          </p>
          </div>
        </div>
        <div className="md:w-[50%] w-full">
          <img
            src="https://media.istockphoto.com/id/172867516/photo/gasplant-ductwork.jpg?s=612x612&w=0&k=20&c=8hcsdNf57wiwkWyGYGLLcVrlr0siEb5mwI3ZlYG4hA8="
            className="brightness-75 w-full"
          />
        </div>
      </section>
    </>
  );
}

export default Services;
