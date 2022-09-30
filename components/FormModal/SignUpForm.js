import { InputText } from '@components/InputText';

function SignUpForm() {
  return (
    <form className="child:mb-3">
      <div className="flex justify-between child:w-48">
        <InputText title="Họ" name="firstname" id="firstname" />
        <InputText title="Tên" name="lastname" id="lastname" />
      </div>
      <InputText validate="username" className="w-full" title="Tên đăng nhập" name="usename" id="usename" />
      <InputText validate="password" className="w-full" title="Mật khẩu" name="password" id="password" />
      <InputText validate="password" className="w-full" title="Nhập lại mật khẩu" name="retype" id="retype" />
      <InputText validate="email" className="w-full" title="Email" name="mail" id="mail" />
    </form>
  );
}

export default SignUpForm;
