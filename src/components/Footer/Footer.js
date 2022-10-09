import { FacebookIcon, MailIcon } from '@components/base/Icons';
import Link from 'next/link';

function Footer() {
  const date = new Date();
  const yearNow = date.getFullYear();

  return (
    <footer>
      <div className="flex justify-center mb-2 child:mx-1.5">
        <FacebookIcon width={28} height={28} />
        <MailIcon width={30} height={30} />
      </div>
      <div className="flex flex-col items-center h-14 bg-slate-800 text-slate-100">
        <div className="mt-2 mb-1 text-sm child:px-2 child:underline-offset-2 child-hover:underline">
          <Link href="/">Giới thiệu</Link>
          <Link href="/">Trợ giúp</Link>
          <Link href="/">Đóng góp</Link>
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
