import { useState } from 'react';

function useValidate(validate, defaultValue = 0, formId, inputId) {
  const [value, setValue] = useState(defaultValue);
  let isWarning = false;
  let messsage = '';
  let isEmpty = true;

  if (value !== 0) {
    if (validate == 'username') {
      if (value.search(/^[a-zA-Z0-9]+$/) != -1) {
        isWarning = false;
      } else {
        isWarning = true;
        messsage = 'Tên đăng nhập của bạn không hợp lệ';
      }
    } else if (validate == 'password') {
      if (value.length >= 8 && value.search(/[0-9]/i) !== -1 && value.search(/[a-b]/i) !== -1) {
        isWarning = false;
      } else {
        isWarning = true;
        messsage = 'Mật khẩu bao gồm ít nhất 8 kí tự bao gồm ít nhất 1 chữ và 1 số';
      }
    } else if (validate == 'retype') {
      const password = document.forms[formId].elements[inputId].value;
      if (password == value) {
        isWarning = false;
      } else {
        isWarning = true;
        messsage = 'Mật khẩu nhập lại không chính xác';
      }
    } else if (validate == 'email') {
      if (
        value.search(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ) != -1
      ) {
        isWarning = false;
      } else {
        isWarning = true;
        messsage = 'Vui lòng nhập email';
      }
    } else {
      if (value) {
        isWarning = false;
      } else {
        isWarning = true;
      }
    }
  }

  if (value) {
    isEmpty = false;
  } else {
    isEmpty = true;
    messsage = 'Mục này không được bỏ trống';
  }

  return [{ isEmpty, isWarning, messsage }, value, setValue];
}

export default useValidate;
