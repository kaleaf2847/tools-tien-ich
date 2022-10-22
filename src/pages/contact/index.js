import { MailIcon } from '@components/base/Icons';
import { DefaultLayout } from '@layouts/DefaultLayout';

function Contact() {
  return (
    <div className="w-6/12 mt-32 mx-auto mb-40">
      <div>
        <h1 className="font-bold text-2xl mb-1">Liên hệ</h1>
        <p className="text-gray-700">Nêu vấn đề và đóng góp ý kiến của bạn cho chúng tôi.</p>
        <p>
          <MailIcon width={22} height={22} className="-translate-y-0.5 mr-1 my-2" />
          Email: toolstienich@gmail.com
        </p>
      </div>
      <div>
        <label htmlFor="email" className="font-bold block">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Nhập email của bạn"
          className="w-10/12 outline-none border-2 border-gray-300 focus:border-gray-600 rounded-md my-1 px-2 py-1"
        />
        <label htmlFor="content" className="font-bold block mt-3">
          Nội dung
        </label>
        <textarea
          id="content"
          className="w-10/12 outline-none border-2 border-gray-300 focus:border-gray-600 rounded-md p-3 resize-none h-48"
        ></textarea>
      </div>
    </div>
  );
}

Contact.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Contact;
