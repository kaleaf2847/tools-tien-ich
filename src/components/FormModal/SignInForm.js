import { InputText } from '@components/InputText';
import { SubmitFormButton } from '@components/SubmitFormButton';
import { useState } from 'react';

function SignInForm() {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  return (
    <form id="sign-in">
      <div className="mt-8">
        <InputText
          setValue={setUsernameValue}
          value={usernameValue}
          className="w-full"
          placeholder="Nhập tên đăng nhập / email"
          title="Tên đăng nhập / email"
          name="usename"
          id="usename"
          maxLength={24}
        />
        <InputText
          setValue={setPasswordValue}
          value={passwordValue}
          className="w-full"
          placeholder="Nhập mật khẩu"
          type="password"
          title="Mật khẩu"
          name="password"
          id="password"
          maxLength={128}
        />
      </div>
      <SubmitFormButton className="mx-auto my-10" value="Đăng nhập" disable={false} />
    </form>
  );
}

export default SignInForm;
