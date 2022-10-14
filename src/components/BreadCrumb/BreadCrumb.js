import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

function BreadCrumb() {
  const router = useRouter();
  const routes = router.route;
  const routesList = routes.split('/');
  return (
    <div className="m-2 text-lg child:px-2 ">
      {routesList.map((route, index) => {
        let text = '';
        let path = '';
        switch (route) {
          case '':
            text = 'Trang chủ';
            path = '/';
            break;
          case 'profile':
            text = 'Cá nhân';
            path = '/profile';
            break;
          case 'deposit':
            text = 'Nạp tiền';
            path = '/profile/deposit';
            break;
          default:
            break;
        }

        return (
          <Fragment key={index}>
            <Link href={path} className="hover:text-sky-400 cursor-pointer">
              {text}
            </Link>
            {routesList.length == index + 1 || <span className="cursor-default">/</span>}
          </Fragment>
        );
      })}
    </div>
  );
}

export default BreadCrumb;
