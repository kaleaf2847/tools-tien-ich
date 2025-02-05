import PropTypes from 'prop-types';
import Link from 'next/link';
import { CreditCardIcon, SignOutIcon, UserIcon } from '@components/base/Icons';
import { BreadCrumb } from '@components';

function ProfileLayout({ children }) {
  return (
    <div className="flex justify-around my-20 mx-auto lg:w-10/12 sm:w-11/12 w-full">
      <div className="md:block hidden lg:w-1/5 w-1/4 bg-white rounded-xl shadow-md pb-6 h-fit">
        <div className="m-4 text-center child:my-1">
          <div className="text-2xl">UserName</div>
          <div className="text-gray-700 text-sm">Id: 12980371092</div>
          <div className="text-amber-300 text-lg">VIP 1</div>
        </div>
        <div>
          <h3 className="mx-6 text-sm text-gray-600">Menu</h3>
          <ul className="mt-2 grandchild:block grandchild:py-2 grandchild:px-6 child-hover:bg-green-200/60">
            <li>
              <Link href="/profile">
                <a>
                  <UserIcon width={20} height={20} className="-translate-y-0.5 mr-2" />
                  Thông tin cá nhân
                </a>
              </Link>
            </li>
            <li>
              <Link href="/profile/deposit">
                <a>
                  <CreditCardIcon width={20} height={20} className="-translate-y-0.5 mr-2" />
                  Nạp tiền
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <SignOutIcon width={20} height={20} className="-translate-y-0.5 mr-2" />
                  Đăng xuất
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full sm:w-8/12 lg:w-9/12">
        <BreadCrumb />
        <div className="bg-white rounded-xl shadow-md pb-10">{children}</div>
      </div>
    </div>
  );
}

ProfileLayout.propTypes = {
  children: PropTypes.node,
};

export default ProfileLayout;
