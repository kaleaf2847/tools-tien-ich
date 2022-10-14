import { InputText, SubmitFormButton } from '@components';
import useValidate from '@hooks/useValidate';

function SignUpForm() {
  const [firstnameStatus, FirstnameValue, setFirstnameValue] = useValidate();
  const [lastnameStatus, LastnameValue, setLastnameValue] = useValidate();
  const [usernameStatus, UsernameValue, setUsernameValue] = useValidate('username');
  const [passwordStatus, PasswordValue, setPasswordValue] = useValidate('password');
  const [retypePassStatus, RetypePassValue, setRetypePassValue] = useValidate('retype', 0, 'sign-up', 'password');
  const [emailStatus, EmailValue, setEmailValue] = useValidate('email');
  const isDisableSubmitButton =
    firstnameStatus.isWarning ||
    firstnameStatus.isEmpty ||
    lastnameStatus.isWarning ||
    lastnameStatus.isEmpty ||
    usernameStatus.isWarning ||
    usernameStatus.isEmpty ||
    passwordStatus.isWarning ||
    passwordStatus.isEmpty ||
    retypePassStatus.isWarning ||
    retypePassStatus.isEmpty ||
    emailStatus.isWarning ||
    emailStatus.isEmpty;

  return (
    <form id="sign-up">
      <div className="sm:flex sm:justify-between">
        <InputText
          isWarning={firstnameStatus.isWarning}
          messsage={firstnameStatus.messsage}
          setValue={setFirstnameValue}
          value={FirstnameValue}
          title="Họ"
          placeholder="Nhập họ của bạn"
          name="firstname"
          id="firstname"
          maxLength={128}
          className="w-full sm:w-52"
        />
        <InputText
          isWarning={lastnameStatus.isWarning}
          messsage={lastnameStatus.messsage}
          setValue={setLastnameValue}
          value={LastnameValue}
          title="Tên"
          placeholder="Nhập tên của bạn"
          name="lastname"
          id="lastname"
          maxLength={128}
          className="w-full sm:w-52"
        />
      </div>
      <InputText
        isWarning={usernameStatus.isWarning}
        messsage={usernameStatus.messsage}
        setValue={setUsernameValue}
        value={UsernameValue}
        className="w-full"
        title="Tên đăng nhập"
        placeholder="Nhập tên đăng nhập"
        name="username"
        id="username"
        maxLength={24}
      />
      <div className="sm:flex sm:justify-between">
        <InputText
          isWarning={passwordStatus.isWarning}
          messsage={passwordStatus.messsage}
          setValue={setPasswordValue}
          value={PasswordValue}
          type="password"
          title="Mật khẩu"
          placeholder="Nhập mật khẩu"
          name="password"
          id="password"
          maxLength={128}
          className="w-full sm:w-52"
        />
        <InputText
          isWarning={retypePassStatus.isWarning}
          messsage={retypePassStatus.messsage}
          setValue={setRetypePassValue}
          value={RetypePassValue}
          type="password"
          title="Nhập lại mật khẩu"
          placeholder="Nhập lại mật khẩu"
          name="retype-pass"
          id="retype-pass"
          maxLength={128}
          className="w-full sm:w-52"
        />
      </div>
      <InputText
        isWarning={emailStatus.isWarning}
        messsage={emailStatus.messsage}
        setValue={setEmailValue}
        value={EmailValue}
        type="email"
        className="w-full"
        title="Email"
        placeholder="Nhập email của bạn"
        name="mail"
        id="mail"
        maxLength={128}
      />
      <SubmitFormButton className="mx-auto my-10" value="Đăng kí" disable={isDisableSubmitButton} />
    </form>
  );
}

export default SignUpForm;
