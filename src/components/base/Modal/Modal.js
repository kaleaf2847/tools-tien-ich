import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

function Modal({ show, onClose, children, className = 'sm:w-[486px] w-full h-3/4' }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    onClose();
  };

  if (isBrowser) {
    return (
      show &&
      createPortal(
        <div onMouseDown={handleClose} className="fixed inset-0 bg-black/40 z-50">
          <div
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
            className={clsx(
              'absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-gray-100 rounded-xl overflow-scroll sm:overflow-hidden',
              className,
            )}
          >
            {children}
          </div>
        </div>,
        document.getElementById('__next'),
      )
    );
  } else {
    return null;
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClose: PropTypes.func,
  show: PropTypes.bool,
};

export default Modal;
