import { XIcon } from '@components/base/Icons';
import { Modal } from '@components/base/Modal';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { memo } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

function FormModal({ setShowModal, showModal, modalType = 'sign in', setModalType }) {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Modal
      show={showModal}
      onClose={handleCloseModal}
      className={clsx('sm:w-[486px] w-11/12 mx-auto', modalType == 'sign in' ? '' : 'h-5/6')}
    >
      <div className="mx-4 py-3">
        <div className="flex justify-end">
          <button onClick={handleCloseModal} className="opacity-75 hover:opacity-100 duration-100">
            <XIcon strokeWidth={1.8} width={28} height={28} />
          </button>
        </div>
        <div className="flex text-xl mt-2 text-gray-800 child:w-full child:mx-auto child:p-2 child:button">
          <button
            onClick={() => {
              setModalType('sign in');
            }}
            className={clsx(modalType == 'sign in' && '!button-active')}
          >
            Đăng nhập
          </button>
          <button
            onClick={() => {
              setModalType('sign up');
            }}
            className={clsx(modalType == 'sign up' && '!button-active')}
          >
            Đăng kí
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

export default memo(FormModal);
