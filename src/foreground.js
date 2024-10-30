import React, { useEffect, useRef, useState } from "react";
import "./Foreground.css";
import gsap from "gsap";
import { ReactComponent as HamburgerIcon } from "./hamburger.svg"; // Replace with actual path to your hamburger icon
import { Typewriter } from "react-simple-typewriter";

const Foreground = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(""); // Initialize with no item selected
  const [isContentVisible, setIsContentVisible] = useState(false); // State for content-container visibility
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    "Welcome! I'm Anonymous, a passionate web developer dedicated to crafting engaging and dynamic user experiences.",
    "Hi there! Dive into my portfolio where I showcase my web development skills and innovative projects.",
    "Hello! Explore my work as a web developer focused on creating seamless and interactive web applications."
  ];
  const typespeed=50;
  const deleteSpeed=50;
  const delaySpeed=3000;

  const cardRef = useRef();
  const textRef = useRef();
  const shapesRef = useRef();
  const starryEffectRef = useRef();

  useEffect(() => {
    const card = cardRef.current;
    const text = textRef.current;
    const shapes = shapesRef.current;
    const starryEffect = starryEffectRef.current;

    if (!isSidebarOpen) {
      gsap.to([text, shapes, starryEffect], { opacity: 0, duration: 0.5 });
      gsap.to(card, {
        width: "90%",
        height: "80%",
        rotateY: 0,
        ease: "power3.out",
        duration: 0.5,
      });
    } else {
      gsap.to([text, shapes, starryEffect], { opacity: 1, duration: 0.5 });
      gsap.to(card, {
        width: "60%",
        height: "70%",
        rotateY: 15,
        ease: "power3.out",
        duration: 0.5,
      });
    }
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      setSelectedItem(""); // Hide content when transitioning back to parallax form
    }
    setIsSidebarOpen(!isSidebarOpen);
    setIsContentVisible(!isContentVisible); // Toggle content visibility
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsSidebarOpen(false); // Close sidebar on item click
    setIsContentVisible(true); // Show content on item click
  };

  useEffect(() => {
    const handleAnimationCycle = () => {
      // Calculate total time for current text
      const currentText = texts[currentIndex];
      const textLength = currentText.length;
      const totalTime =
        (typespeed * textLength + deleteSpeed * textLength + delaySpeed)*2;
  
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, totalTime);
    };
  
    handleAnimationCycle();
  }, [currentIndex]);

  
  

  return (
    <div className="foreground">
      <div className="card" ref={cardRef}>
        {/* Animated shapes and starry effect */}
        <div className="animated-shapes" ref={shapesRef}>
          {/* Add your animated shapes here */}
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
          <div className="shape shape4"></div>
          <div className="shape shape5"></div>
          <div className="shape shape6"></div>
        </div>
        <div className="starry-effect" ref={starryEffectRef}></div>

        {/* Text container with typing effect */}
        <div className="text-container" ref={textRef}>
          {/* Typing animation for "Hi, I am Sourav" */}
          <div className="typing-text">
            {"Hi, I am ".split("").map((char, index) => (
              <span key={index} className="char normal-text">
                {char}
              </span>
            ))}
            {"Anonymous".split("").map((char, index) => (
              <span key={index} className="char highlighted-text">
                {char}
              </span>
            ))}
          </div>

          {/* Typing animation for "An Enthusiast Web Developer" */}
          <div className="typing-text">
            {"An Enthusiast ".split("").map((char, index) => (
              <span key={index} className="char normal-text">
                {char}
              </span>
            ))}
            {"Web Developer".split("").map((char, index) => (
              <span key={index} className="char highlighted-text">
                {char}
              </span>
            ))}
            <span className="cursor"></span>
          </div>
        </div>

        {/* Conditional rendering of content based on selectedItem and isContentVisible */}
        {isContentVisible && (
          <div className="content-container">
            {selectedItem === "home" && (
              <div className="home-content">
                <div className="Home-textdiv">
                  <div className="heading-one">
                    <div className="typing-text">
                      {"Hi, I am ".split("").map((char, index) => (
                        <span key={index} className="char normal-text">
                          {char}
                        </span>
                      ))}
                      {"Anonymous".split("").map((char, index) => (
                        <span key={index} className="char highlighted-text">
                          {char}
                        </span>
                      ))}
                      <span className="cursor"></span>
                    </div>
                  </div>
                  <div className="subheading-one">
                    <div className="typing-text">
                      {"A Passionate ".split("").map((char, index) => (
                        <span key={index} className="char normal-text">
                          {char}
                        </span>
                      ))}
                      {"Web Developer".split("").map((char, index) => (
                        <span key={index} className="char highlighted-text">
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="paragraph-one">
                    <Typewriter
                      words={[texts[currentIndex]]}
                      loop={0} // Infinite loop
                      cursor
                      cursorStyle="_"
                      typeSpeed={typespeed}
                      deleteSpeed={deleteSpeed}
                      delaySpeed={delaySpeed} // 3 seconds delay before backspacing starts
                    />
                  </div>
                </div>
                <div className="Home-imgdiv"></div>
              </div>
            )}
            {selectedItem === "about" && (
              <div className="about-content">
                {/* Add your about content here */}
                <h2>About Content</h2>
                {/* Add more elements as needed */}
              </div>
            )}
            {selectedItem === "projects" && (
              <div className="projects-content">
                {/* Add your projects content here */}
                <h2>Projects Content</h2>
                {/* Add more elements as needed */}
              </div>
            )}
            {selectedItem === "certifications" && (
              <div className="certifications-content">
                {/* Add your certifications content here */}
                <h2>Certifications Content</h2>
                {/* Add more elements as needed */}
              </div>
            )}
            {selectedItem === "contact" && (
              <div className="contact-content">
                {/* Add your contact content here */}
                <h2>Contact Content</h2>
                {/* Add more elements as needed */}
              </div>
            )}
          </div>
        )}

        {/* Hamburger icon button */}
        {!isSidebarOpen && (
          <button className="hamburger-icon" onClick={toggleSidebar}>
            <HamburgerIcon />
          </button>
        )}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li onClick={() => handleItemClick("home")}>Home</li>
            <li onClick={() => handleItemClick("about")}>About Me</li>
            <li onClick={() => handleItemClick("projects")}>Projects</li>
            <li onClick={() => handleItemClick("certifications")}>
              Certifications
            </li>
            <li onClick={() => handleItemClick("contact")}>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Foreground;
