import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import PromptCard from "./components/promptcard";
import { useContext } from "react";
import AuthContext from "./context/authContext";

function App() {
  interface TypewriterProps {
    text: string;
    delay: number;
    infinite?: number;
  }

  const {userInfo, login, token} = useContext(AuthContext)

  const Typewriter = ({ text, delay, infinite }: TypewriterProps) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      let timeout: null | number;

      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
      } else if (infinite) {
        setCurrentIndex(0);
        setCurrentText("");
      } else if (currentIndex === text.length - 1) {
        setCurrentText(text);
      }

      return () => clearTimeout(timeout ?? 100);
    }, [currentIndex, delay, infinite, text]);

    return (
      <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
        {currentText}
      </span>
    );
  };

  return login ? (
    <>
      <div className="">
        <Navbar />
      </div>
      <div></div>
      <div className="absolute top-0 -z-10 w-full h-full overflow-hidden">
        <img
          src="https://wallpapers.com/images/hd/dark-gradient-6bly12umg2d4psr2.jpg"
          alt=""
        />
      </div>
      <div className="mt-40 text-center  text-white z-100">
        <p className="text-6xl">Welcome to Blogspot.</p>
        <p className="text-3xl mt-10 text-slate-400">
          <Typewriter text="Your blogging destination." delay={100} />
        </p>
      </div>
      <div className="flex items-center justify-center gap-10">
        
          <PromptCard text="See your blogs" />
          <PromptCard text="Write a  blog" />
      </div>
    </>
  ) : (
    <>
      <div className="">
        <Navbar/>
      </div>
      <div></div>
      <div className="absolute top-0 -z-10 w-full h-full overflow-hidden">
        <img
          src="https://wallpapers.com/images/hd/dark-gradient-6bly12umg2d4psr2.jpg"
          alt=""
        />
      </div>
      <div className="mt-40 text-center  text-white z-100">
        <p className="text-6xl">Welcome to Blogspot.</p>
        <p className="text-3xl mt-10 text-slate-400">
          <Typewriter text="Your blogging destination." delay={100} />
        </p>
      </div>
      <div className="flex items-center justify-center gap-10 ">
          <PromptCard text="Sign in to access your blogs"/>
      </div>
    </>
  );
}

export default App;
