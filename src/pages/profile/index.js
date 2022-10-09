import { InputText } from '@components/InputText';
import { Fragment } from 'react';
import { DefaultLayout } from '@layouts/DefaultLayout';
import { ProfileLayout } from '@layouts/ProfileLayout';

function Profile() {
  return (
    <Fragment>
      <h2 className="text-xl py-4 px-8">Thông tin của bạn</h2>
      <div className="child:flex child:mx-16 child:my-4">
        <div>
          <InputText value="firstname" id="firstname" title="Họ" className="w-[348px] mr-12" />
          <InputText value="lastname" id="lastname" title="Tên" className="w-[348px] mr-12" />
        </div>
        <div>
          <InputText value="lahasdke@gmail.com" id="email" title="Email" className="w-[348px] mr-12" />
          <InputText value="username" id="username" title="Tên đăng nhập" className="w-[348px] mr-12" />
        </div>
        <div>
          <InputText type="password" value="asdfasdf" id="password" title="Mật khẩu" className="w-[348px] mr-12" />
          <InputText
            type="password"
            value="asdfasdf"
            id="retype"
            title="Nhập lại mật khẩu"
            className="w-[348px] mr-12"
          />
        </div>
      </div>
      <button className="ml-16 bg-green-500 px-6 py-1.5 text-lg text-white rounded-xl hover:opacity-80">Lưu</button>
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
