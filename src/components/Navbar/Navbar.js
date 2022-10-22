import { FormModal, Search, MobileMenu, UserMenu } from '@components';
// import { MoonIcon, SunIcon } from '@components/base/Icons';
// import Tippy from '@tippyjs/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const tabsList = [
  {
    name: 'Trang chủ',
    route: '/',
  },
  {
    name: 'Nạp tiền',
    route: '/deposit',
  },
  // {
  //   name: 'Nâng vip',
  //   route: '/vip',
  // },
  {
    name: 'Liên hệ',
    route: '/contact',
  },
];

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  // const [theme, setTheme] = useState('light');
  const [hoverTheme, setHoverTheme] = useState(false);
  const [widthWindow, setWidthWindow] = useState();

  // const handleToggleTheme = () => {
  //   const newTheme = theme == 'dark' ? 'light' : 'dark';
  //   setTheme(newTheme);
  //   localStorage.setItem('theme', newTheme);
  //   console.log(localStorage.getItem('theme'));
  // };

  const handleOpenFormModal = (modalType) => {
    setShowModal(true);
    setModalType(modalType);
  };

  const handleResizeWidth = () => {
    setWidthWindow(window.innerWidth);
  };

  useEffect(() => {
    // if (localStorage.getItem('theme') !== theme) {
    //   setTheme(localStorage.getItem('theme'));
    // }

    setWidthWindow(window.innerWidth);
    window.addEventListener('resize', handleResizeWidth);
    return () => {
      window.removeEventListener('resize', handleResizeWidth);
    };
  }, []);

  // useEffect(() => {
  //   if (theme == 'dark') {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [theme]);

  return (
    <nav className="flex z-50 items-center lg:justify-between fixed top-0 left-0 right-0 drop-shadow-md bg-gray-50 text-gray-700 h-12 border-b-gray-300 border-b-[0.5px] px-2 lg:px-4 xl:px-10">
      <div className="flex-grow lg:flex-grow-0">
        <Link href="/">
          <a>
            <Image className="translate-y-1" src="/image/logo.png" width={180} height={36} alt="Toolstienich" />
          </a>
        </Link>
      </div>
      <Search />
      <div className="flex items-center h-full">
        {/* <Tippy content={theme == 'dark' ? 'Sáng' : 'Tối'}>
          <button
            onClick={handleToggleTheme}
            className="py-3 lg:px-2 md:m-0 pl-2 mx-2"
            onMouseEnter={() => {
              setHoverTheme(true);
            }}
            onMouseLeave={() => {
              setHoverTheme(false);
            }}
          >
            {theme == 'dark' ? (
              hoverTheme ? (
                <SunIcon className="text-yellow-400" type="solid" width={28} height={28} />
              ) : (
                <SunIcon width={28} height={28} />
              )
            ) : hoverTheme ? (
              <MoonIcon className="mx-0.5 text-yellow-400" type="solid" />
            ) : (
              <MoonIcon className="mx-0.5" />
            )}
          </button>
        </Tippy> */}
        {widthWindow > 768 ? (
          <>
            <ul className="flex items-center lg:grandchild:px-2.5 grandchild:px-2 grandchild:leading-[47px] grandchild:button">
              {tabsList.map((tab, index) => {
                return (
                  <li key={index}>
                    <Link href={tab.route}>{tab.name}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="h-8 w-px bg-gray-300 mx-1.5"></div>
            <ul className="flex items-center lg:grandchild:px-2.5 grandchild:px-2 grandchild:leading-[47px] grandchild:button">
              <li>
                <button
                  onClick={() => {
                    handleOpenFormModal('sign in');
                  }}
                >
                  Đăng Nhập
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleOpenFormModal('sign up');
                  }}
                >
                  Đăng Kí
                </button>
              </li>
            </ul>
            {/* <UserMenu /> */}
          </>
        ) : (
          <MobileMenu />
        )}
      </div>
      <FormModal setShowModal={setShowModal} showModal={showModal} modalType={modalType} setModalType={setModalType} />
    </nav>
  );
}

export default Navbar;
