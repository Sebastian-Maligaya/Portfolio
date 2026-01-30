import './Homepage.css'
import { useEffect, useState } from 'react';
import MeImg from '../assets/CropMe.png'

function Homepage() {

  const words = ["Developer", "Designer", "Innovator", "Creator","Gamer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 500;    // speed of typing
  const deletingSpeed = 100;  // speed of deleting
  const pauseBeforeDelete = 1000; // pause at full word

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout;

    if (!isDeleting && letterIndex === currentWord.length) {
      // Word fully typed → pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
    } else {
      timeout = setTimeout(() => {
        if (!isDeleting) {
          // Typing
          setText(currentWord.slice(0, letterIndex + 1));
          setLetterIndex(letterIndex + 1);
        } else {
          // Deleting
          setText(currentWord.slice(0, letterIndex - 1));
          setLetterIndex(letterIndex - 1);

          // Word fully deleted → next word
          if (letterIndex - 1 === 0) {
            setIsDeleting(false);
            setWordIndex((wordIndex + 1) % words.length);
          }
        }
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, wordIndex, words]);

  return (
    <div className="homepage">
      <div className="Left">
        <div className='name'>
        <h3>{text}</h3>
        <h1>Sebastian Maligaya</h1>
        </div>

        <div className="button">
          <button className="btn">Contact Me</button>
          <button className="btn">CV</button>
        </div>
      </div>
      <div className="Right">
        <img src={MeImg} alt="Sebastian Maligaya" className="profile-image" />
      </div>
    </div>
  )
}

export default Homepage