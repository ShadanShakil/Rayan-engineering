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
        <section className="md:my-20 my-5 md:mx-80">
            <TypingAnimation texts={["Powering Innovation","Engineering Excellence","Rayan Engineering"]} />
            <p className="text-gray-700 mx-10">Rayan Engineering (REC), based in Karachi, Pakistan, is a leading provider of Electro-Mechanical Contracting Services. As a professionally managed trading and contracting company, REC is recognized for delivering high-quality services and products. Over the years, the company has played a key role in several prestigious projects across Pakistan.

With a team of skilled professionals and experienced staff, REC is committed to excellence, innovation, and timely project completion.</p>
        </section>
    )
}


export default AboutSec;