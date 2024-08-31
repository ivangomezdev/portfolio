import React, { useState, useRef, useEffect } from 'react';
import { createPopper } from '@popperjs/core';

const Popper = ({ children, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const referenceElement = useRef(null);
  const popperElement = useRef(null);

  useEffect(() => {
    if (referenceElement.current && popperElement.current) {
      createPopper(referenceElement.current, popperElement.current, {
        placement: 'left', // Puedes cambiar la posición
      });
    }
  }, [isOpen]);

  return (
    <div>
      <a
        ref={referenceElement}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {children}
      </a>
      {isOpen && (
        <div ref={popperElement} style={{border:"solid 1px gray",padding: '10px', borderRadius: '4px' }}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Popper;