import { XIcon } from '@components/Icons';
import { Modal } from '@components/Modal';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

function FormModal({ setShowModal, showModal, modalType = 'sign in', setModalType }) {
  console.log('render-fromModal');

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onClose={handleCloseModal} className="h-5/6 w-[486px]">
      <div className="mx-4 py-3">
        <div className="flex justify-end">
          <button onClick={handleCloseModal} className="opacity-75 hover:opacity-100 duration-100">
            <XIcon strokeWidth={1.8} width={28} height={28} />
          </button>
        </div>
        <div className="flex text-xl mt-2 text-gray-800 child:w-full child:mx-auto child:p-2 child:duration-75 child-hover:bg-gray-200/60 child-hover:text-black">
          <button
            onClick={() => {
              setModalType('sign in');
            }}
            className={clsx(modalType == 'sign in' && 'bg-gray-200/60 text-black')}
          >
            Đăng Nhập
          </button>
          <button
            onClick={() => {
              setModalType('sign up');
            }}
            className={clsx(modalType == 'sign up' && 'bg-gray-200/60 text-black')}
          >
            Đăng Kí
          </button>
        </div>
      </div>
      <div className="mx-8">{modalType == 'sign in' ? <SignInForm /> : <SignUpForm />}</div>
    </Modal>
  );
}

FormModal.propTypes = {
  setShowModal: PropTypes.func,
  showModal: PropTypes.bool,
  modalType: PropTypes.string,
  setModalType: PropTypes.func,
};

export default FormModal;
