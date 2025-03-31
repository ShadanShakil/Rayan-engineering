import { useEffect, useState } from "react";

function AboutSec(){

    const TypingAnimation = ({ texts, speed = 100, delay = 1500 }) => {
        const [text, setText] = useState("");
        const [index, setIndex] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
        const [charIndex, setCharIndex] = useState(0);
      
        useEffect(() => {
          const currentText = texts[index];
          let typingSpeed = speed;
      
          if (isDeleting) typingSpeed /= 2;
      
          const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < currentText.length) {
              setText(currentText.substring(0, charIndex + 1));
              setCharIndex((prev) => prev + 1);
            } else if (isDeleting && charIndex > 0) {
              setText(currentText.substring(0, charIndex - 1));
              setCharIndex((prev) => prev - 1);
            } else if (!isDeleting && charIndex === currentText.length) {
              setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && charIndex === 0) {
              setIsDeleting(false);
              setIndex((prev) => (prev + 1) % texts.length);
            }
          }, typingSpeed);
      
          return () => clearTimeout(timeout);
        }, [charIndex, isDeleting, index, texts, speed, delay]);
      
        return <h2 className="md:text-5xl text-3xl my-5 text-center font-bold text-slate-950">About {text}|</h2>;
      };


    return(
      <>
        <section className="md:mx-80">
            <TypingAnimation texts={["Powering Innovation","Engineering Excellence","Rayan Engineering"]} />
            <p className="text-gray-700 mx-10">Rayan Engineering (REC), based in Karachi, Pakistan, is a leading provider of Electro-Mechanical Contracting Services. As a professionally managed trading and contracting company, REC is recognized for delivering high-quality services and products. Over the years, the company has played a key role in several prestigious projects across Pakistan.

With a team of skilled professionals and experienced staff, REC is committed to excellence, innovation, and timely project completion.</p> </section>

<section className="bg-black text-gray-200 body-font m-10">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img
        alt="feature"
        className="object-cover object-center h-full w-full"
        src="https://leadership-gcc.com/assets/img/course-images/oil&gas/34.jpg"
      />
    </div>
    <div className="flex flex-col flex-wrap justify-center lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">
          Comprehensive Electro-Mechanical Solutions
          </h2>
          <p className="leading-relaxed text-base">
          Rayan Engineering provides end-to-end solutions, including electrical and mechanical installations, automation, HVAC, and power distribution systems, ensuring seamless integration for diverse industries.
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">
          Proven Track Record
          </h2>
          <p className="leading-relaxed text-base">
          The company has successfully contributed to numerous high-profile projects in Pakistan, demonstrating expertise in executing large-scale industrial, commercial, and infrastructure developments.
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">
          Professional Team & Expertise
          </h2>
          <p className="leading-relaxed text-base">
          Managed by a team of seasoned professionals, REC ensures precision and efficiency in all projects, backed by a dedicated workforce with technical proficiency and industry experience.
          </p>
         
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">
          Commitment to Quality & Timely Delivery
          </h2>
          <p className="leading-relaxed text-base">
          REC prioritizes quality, safety, and adherence to international standards while maintaining a strong focus on meeting deadlines to ensure timely project completion.
          </p>
         
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}


export default AboutSec;