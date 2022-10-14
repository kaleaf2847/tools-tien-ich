import { FacebookIcon, MailIcon } from '@components/base/Icons';
import Tippy from '@tippyjs/react';
import Link from 'next/link';

function Footer() {
  const date = new Date();
  const yearNow = date.getFullYear();

  return (
    <footer>
      <div className="flex justify-center mb-2 child:mx-3">
        <Tippy content="Fanpage">
          <span>
            <Link href="/">
              <a>
                <FacebookIcon width={28} height={28} />
              </a>
            </Link>
          </span>
        </Tippy>
        <Tippy content="toolstienich@gmail.com">
          <span>
            <Link href="mailto:toolstienich@gmail.com">
              <a>
                <MailIcon width={30} height={30} />
              </a>
            </Link>
          </span>
        </Tippy>
      </div>
      <div className="flex flex-col items-center h-14 bg-slate-800 text-slate-100">
        <div className="mt-2 mb-1 text-sm child:px-2 child:underline-offset-2 child-hover:underline">
          <Link href="/">Giới thiệu</Link>
          <Link href="/contact">Trợ giúp</Link>
          <Link href="/contact">Đóng góp</Link>
          <Link href="/">Bảo mật</Link>
        </div>
        <div className="text-sm">
          <span>
            <span>&copy; </span>
            2023 Toolstienich
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
