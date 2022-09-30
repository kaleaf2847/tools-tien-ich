import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';

function InputText({
  validate,
  title,
  onChange,
  className = 'w-56',
  id,
  clear,
  setClear,
  setValidateCheckAll,
  maxLength = 32,
  ...props
}) {
  const [showClear, setShowClear] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [warningText, setWarningText] = useState('');
  const [validateCheck, setValidateCheck] = useState(true);
  const [isFocus, setIsFocus] = useState(false);
  const inputE = useRef(null);

  useMemo(() => {
    const setValidateChecks = (bool) => {
      setValidateCheck(bool);
      if (setValidateCheckAll) {
        setValidateCheckAll(bool);
      }
    };
    if (isFocus) {
      if (validate === 'username') {
        setWarningText(inputValue == '' ? 'Mục này không được bỏ trống' : 'Tên đăng nhập của bạn không hợp lệ');
        if (inputValue.search(/^[a-zA-Z0-9]+$/) == -1) {
          setValidateChecks(false);
        } else {
          setValidateChecks(true);
        }
      } else if (validate === 'password') {
        setWarningText(
          inputValue == ''
            ? 'Mục này không được bỏ trống'
            : 'Mật khẩu phải có ít nhất 8 kí tự bao gồm ít nhất 1 chữ và 1 số',
        );
      }
    }
  }, [inputValue]);

  useEffect(() => {
    if (inputValue) {
      setShowClear(true);
    } else {
      setShowClear(false);
    }
  }, [inputValue]);

  useEffect(() => {
    if (clear) {
      setInputValue('');
      setClear(false);
    }
  }, [clear]);

  return (
    <div className={clsx(className)}>
      <label htmlFor={id} className="font-bold text-gray-800 mx-3">
        {title}
      </label>
      <div
        className={clsx(
          'flex child:bg-gray-100 border-[1px] w-full my-1 text-gray-800 drop-shadow rounded-2xl overflow-hidden',
          validateCheck ? 'border-gray-400' : 'border-red-400',
        )}
      >
        <input
          onFocus={(e) => {
            setIsFocus(true);
            e.target.offsetParent.style.borderColor = validateCheck ? '#666' : '';
          }}
          onBlur={(e) => {
            e.target.offsetParent.style.borderColor = '';
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (onChange) {
              onChange();
            }
          }}
          className="outline-none text-md py-2 pl-3 w-full"
          value={inputValue}
          ref={inputE}
          spellCheck={false}
          id={id}
          maxLength={maxLength}
          {...props}
        />
        {showClear && (
          <span
            onClick={(e) => {
              setInputValue('');
              inputE.current.focus();
              e.target.offsetParent.style.borderColor = '';
            }}
            className="cursor-pointer p-2 text-gray-500 hover:text-black duration-100"
          >
            xóa
          </span>
        )}
      </div>
      {!validateCheck && <p className="text-sm text-red-500/80 pl-3">{warningText}</p>}
    </div>
  );
}

InputText.propTypes = {
  validate: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  clear: PropTypes.bool,
  setClear: PropTypes.func,
  setValidateCheckAll: PropTypes.func,
  id: PropTypes.string,
  maxLength: PropTypes.number,
};

export default InputText;
