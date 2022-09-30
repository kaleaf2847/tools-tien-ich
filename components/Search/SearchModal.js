import { Modal } from '@components/Modal';
import { useEffect, useRef, useState } from 'react';
import { SearchIcon, XIcon } from '@components/Icons';
import PropTypes from 'prop-types';

function SearchModal({ setShowModal, showModal }) {
  const [inputValue, setInputValue] = useState('');
  const [showClear, setShowClear] = useState(false);
  const inputE = useRef(null);
  const result = 's';

  const handleClose = () => {
    setInputValue('');
    setShowModal(false);
  };

  useEffect(() => {
    if (inputValue) {
      setShowClear(true);
    } else setShowClear(false);
  }, [inputValue]);

  useEffect(() => {
    if (showModal) {
      inputE.current.focus();
    }
  }, [showModal]);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'q') {
        setShowModal(true);
      }
      if (e.key === 'Escape') {
        handleClose();
      }
    });
  }, []);
  return (
    <Modal show={showModal} onClose={handleClose}>
      <div className="flex items-center px-2 bg-gray-75 child:bg-gray-100 border-b-[0.5px] border-gray-300">
        <SearchIcon className="mx-2" />
        <input
          ref={inputE}
          type="text"
          placeholder="Tìm kiếm công cụ"
          value={inputValue}
          maxLength={256}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="flex-grow py-2 px-1 mt-px text-xl outline-none h-12"
        />
        {showClear && (
          <span
            onClick={() => {
              setInputValue('');
              inputE.current.focus();
            }}
            className="cursor-pointer duration-75 text-lg p-2 mr-1 text-gray-500 hover:text-black"
          >
            xóa
          </span>
        )}
        <button onClick={handleClose} className="relative duration-75 opacity-75 hover:opacity-100 p-2">
          <XIcon width={28} height={28} strokeWidth={1.8} />
          <div className="absolute top-[7px] -left-1 h-8 w-px bg-gray-300"></div>
        </button>
      </div>
      <div>
        <div className="text-xl font-medium text-gray-900 px-7 py-2 border-b-[0.5px] border-gray-300">Yêu Thích</div>
        <div className="text-xl font-medium text-gray-900 px-7 py-2 border-b-[0.5px] border-gray-300">
          {result ? 'Kết Quả' : 'Gần Đây'}
        </div>
      </div>
    </Modal>
  );
}

SearchModal.propTypes = {
  setShowModal: PropTypes.func,
  showModal: PropTypes.bool,
};

export default SearchModal;
