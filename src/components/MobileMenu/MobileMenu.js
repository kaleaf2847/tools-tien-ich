import {
  CoinIcon,
  CreditCardIcon,
  CrownIcon,
  HomeIcon,
  InformationIcon,
  MenuIcon,
  SignOutIcon,
  UserIcon,
  XIcon,
} from '@components/base/Icons';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuE = useRef(null);
  const wrapE = useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    mobileMenuE.current.style.left = '-384px';
    wrapE.current.style.backgroundColor = 'rgba(0,0,0,0)';
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  useEffect(() => {
    if (mobileMenuE.current && wrapE.current) {
      setTimeout(() => {
        mobileMenuE.current.style.left = 0;
        wrapE.current.style.backgroundColor = 'rgba(0,0,0,0.4)';
      }, 10);
    }
  });

  return (
    <div>
      <button onClick={handleOpen}>
        <MenuIcon className="cursor-pointer mx-2" width={36} height={36} strokeWidth={1.8} />
      </button>
      {isOpen &&
        createPortal(
          <div
            ref={wrapE}
            style={{ backgroundColor: 'rgba(0,0,0,0)' }}
            onClick={handleClose}
            className="fixed inset-0 z-50 duration-200"
          >
            <div
              ref={mobileMenuE}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="absolute top-0 bottom-0 bg-gray-50 max-w-sm w-10/12 duration-300"
              style={{ left: -384 }}
            >
              <div className="flex justify-end">
                <XIcon onClick={handleClose} width={48} height={48} className="p-1.5 cursor-pointer" />
              </div>
              <div>
                <div className="text-center">
                  <p className="text-xl mt-4">USERNAME</p>
                  {/* <p className="text-amber-300 text-lg">VIP</p> */}
                  <p className="text-lg mt-4">
                    Số dư: 100.000 <CoinIcon width={20} height={20} className="-translate-y-px" />
                  </p>
                </div>
                <ul className="text-gray-800 mt-6 text-lg grandchild:py-1.5 grandchild:px-6 grandchild:block grandchild-hover:bg-green-200/60">
                  <li
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <Link href="/">
                      <a>
                        <HomeIcon width={22} height={22} className="mr-1 -translate-y-0.5" />
                        Trang chủ
                      </a>
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <Link href="/profile">
                      <a>
                        <UserIcon width={22} height={22} className="mr-1 -translate-y-0.5" />
                        Trang cá nhân
                      </a>
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <Link href="/profile/deposit">
                      <a>
                        <CreditCardIcon width={22} height={22} className="mr-0.5 -translate-y-px" /> Nạp tiền
                      </a>
                    </Link>
                  </li>
                  {/* <li
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <Link href="/">
                      <a>
                        <CrownIcon className="mr-0.5 -translate-y-px" /> Vip
                      </a>
                    </Link>
                  </li> */}
                  <li
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <Link href="/contact">
                      <a>
                        <InformationIcon className="mr-0.5 -translate-y-px" /> Liên hệ
                      </a>
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <Link href="/">
                      <a>
                        <SignOutIcon className="mr-1.5 -translate-y-px" />
                        Đăng xuất
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>,
          document.getElementById('__next'),
        )}
    </div>
  );
}

export default MobileMenu;
