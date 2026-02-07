import { useState, useEffect } from "react";

export function useTypewriter(
  words: string[],
  typingSpeed = 100,
  pause = 6000
) {
  const [text, setText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[currentWordIndex % words.length];

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // typing
      if (text.length < currentWord.length) {
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        // pause at full word
        timer = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      // deleting
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, typingSpeed / 2);
      } else {
        // move to next random word
        const nextIndex = Math.floor(Math.random() * words.length);
        setCurrentWordIndex(nextIndex);
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex, words, typingSpeed, pause]);

  return text;
}