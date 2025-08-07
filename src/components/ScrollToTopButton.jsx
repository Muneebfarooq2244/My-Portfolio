import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {/* Inject the customStyles string into a <style> tag */}
      <style>{customStyles}</style>

      {/* Show the button only when isVisible is true */}
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top-button" aria-label="Scroll to top">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
};

// Your custom CSS styles as string
const customStyles = `
  .scroll-to-top-button {
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
    background: var(--gradient-color-bg, #00666); /* fallback included */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    animation: bounce 1s linear infinite;
    color: white;
    border: none;
    z-index: 9999;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  @keyframes bounce {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-5px); }
    100% { transform: translateY(0); }
  }

  /* Responsive: Smaller size on mobile */
  @media (max-width: 800px) {
    .scroll-to-top-button {
      width: 40px;
      height: 40px;
      bottom: 15px;
      right: 20px;
      overflow-x: hidden;
    }
  }
`;




export default ScrollToTopButton;
