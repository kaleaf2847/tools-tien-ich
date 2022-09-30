import { FormModal } from '@components/FormModal';
import { Search } from '@components/Search';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  const handleOpenFormModal = (modalType) => {
    setShowModal(true);
    setModalType(modalType);
  };

  console.log('render-navbar');
  return (
    <nav className="flex items-center justify-between fixed top-0 left-0 right-0 drop-shadow-md bg-gray-50 text-lg text-gray-700 h-12 border-b-gray-300 border-b-[0.5px] px-10">
      <Image src="/image/logo.png" width={180} height={36} alt="Toolstienich" />
      <Search />
      <div className="flex h-full">
        <ul className="flex items-center grandchild:px-2 grandchild:py-3 child-hover:text-green-600 child:duration-100">
          <li>
            <Link href="/">Nạp Tiền</Link>
          </li>
          <li>
            <Link href="/">Trang Chủ</Link>
          </li>
        </ul>
        <ul className="flex items-center grandchild:p-2 child-hover:text-green-600 child:duration-100">
          <li className="h-8 w-px bg-gray-300 mx-1.5"></li>
          <li>
            <p
              onClick={() => {
                handleOpenFormModal('sign in');
              }}
            >
              Đăng Nhập
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                handleOpenFormModal('sign up');
              }}
            >
              Đăng Kí
            </p>
          </li>
        </ul>
      </div>
      <FormModal setShowModal={setShowModal} showModal={showModal} modalType={modalType} setModalType={setModalType} />
    </nav>
  );
}

export default Navbar;
