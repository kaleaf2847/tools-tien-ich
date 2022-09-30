import { InputText } from '@components/InputText';

function SignInForm() {
  return (
    <form>
      <InputText validate="username" title="Tên đăng nhập" name="usename" id="usename" />
    </form>
  );
}

export default SignInForm;
