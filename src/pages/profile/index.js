import { InputText } from '@components';
import { Fragment } from 'react';
import { DefaultLayout } from '@layouts/DefaultLayout';
import { ProfileLayout } from '@layouts/ProfileLayout';
import Head from 'next/head';

function Profile() {
  return (
    <Fragment>
      <Head>
        <title>Cá Nhân | Toolstienich</title>
      </Head>
      <h2 className="text-xl py-4 px-8">Thông tin của bạn</h2>
      <div className="lg:child:flex mx-10 sm:mx-14 lg:mx-16 child:my-4 2xl:grandchild:w-[424px] lg:grandchild:w-96 md:grandchild:w-80 sm:grandchild:w-72">
        <div>
          <InputText value="firstname" id="firstname" title="Họ" className="xl:mr-12 lg:mr-8" />
          <InputText value="lastname" id="lastname" title="Tên" className="xl:mr-12 lg:mr-8" />
        </div>
        <div>
          <InputText value="lahasdke@gmail.com" id="email" title="Email" className="xl:mr-12 lg:mr-8" />
          <InputText value="username" id="username" title="Tên đăng nhập" className="xl:mr-12 lg:mr-8" />
        </div>
        <div>
          <InputText type="password" value="asdfasdf" id="password" title="Mật khẩu" className="xl:mr-12 lg:mr-8" />
          <InputText
            type="password"
            value="asdfasdf"
            id="retype"
            title="Nhập lại mật khẩu"
            className="xl:mr-12 lg:mr-8"
          />
        </div>
        <button className="lg:!mx-auto md:mx-3.5 bg-green-500 w-full sm:w-fit sm:px-32 lg:px-6 py-1.5 text-lg text-white rounded-xl hover:opacity-80">
          Lưu
        </button>
      </div>
    </Fragment>
  );
}

Profile.getLayout = (page) => {
  return (
    <DefaultLayout>
      <ProfileLayout>{page}</ProfileLayout>
    </DefaultLayout>
  );
};

export default Profile;
