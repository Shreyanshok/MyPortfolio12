// utils/animations.js
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Target all elements with the animation class
    const animationElements = document.querySelectorAll('.animation-element');
    animationElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      animationElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
};

export const typewriterAnimation = (element, texts, typeSpeed = 100, backSpeed = 50, backDelay = 1000) => {
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = typeSpeed;

  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      element.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = backSpeed;
    } else {
      element.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = typeSpeed;
    }

    if (!isDeleting && charIndex === currentText.length) {
      typingDelay = backDelay;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, typingDelay);
  }

  if (element) {
    setTimeout(type, typingDelay);
  }
};