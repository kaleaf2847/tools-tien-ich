import { SignOutIcon, UserIcon } from '@components/base/Icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function UserMenu() {
  const [showDropMenu, setShowDropMenu] = useState(false);

  useEffect(() => {
    const handleHiddenDropMenu = () => {
      setShowDropMenu(false);
    };
    document.addEventListener('click', handleHiddenDropMenu);
    return () => {
      document.removeEventListener('click', handleHiddenDropMenu);
    };
  }, []);

  return (
    <div className="relative text-lg">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowDropMenu(!showDropMenu);
        }}
        className="p-2"
      >
        <UserIcon width={26} height={26} />
      </button>
      {showDropMenu && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 mt-2 w-52 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div className="px-3 py-4 child:rounded-3xl child:py-1.5 child:px-2 child:w-full child:block child-hover:bg-green-200/60">
            <Link href="/profile">
              <a
                onClick={() => {
                  setShowDropMenu(false);
                }}
              >
                <UserIcon width={22} className="-translate-y-px mx-1.5" />
                Trang cá nhân
              </a>
            </Link>
            <Link href="/">
              <a
                onClick={() => {
                  setShowDropMenu(false);
                }}
              >
                <SignOutIcon width={22} className="-translate-y-px mx-1.5" />
                Đăng xuất
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
