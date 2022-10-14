import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

function InputText({
  isWarning = false,
  title,
  messsage,
  value = 0,
  onChange,
  className = 'w-[200px]',
  id,
  clear,
  setClear,
  setValue,
  maxLength = 32,
  ...props
}) {
  const [showClear, setShowClear] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const inputE = useRef(null);

  useEffect(() => {
    if (value) {
      setShowClear(true);
    } else {
      setShowClear(false);
    }
    if (setValue) {
      setValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (clear) {
      setValue('');
      setClear(false);
    }
  }, [clear]);

  return (
    <div className={clsx('min-h-[90px]')}>
      <label htmlFor={id} className="font-bold text-gray-800 mx-3">
        {title}
      </label>
      <div
        className={clsx(
          'flex child:bg-gray-100 border-[1px] my-1 text-gray-800 rounded-2xl overflow-hidden',
          className,
          isWarning
            ? 'border-red-400 shadow-[0_1px_2px_rgba(248,113,113,0.25)]'
            : isFocus
            ? 'border-gray-600 shadow'
            : 'border-gray-400 shadow',
        )}
      >
        <input
          onFocus={(e) => {
            setIsFocus(true);
          }}
          onBlur={(e) => {
            setIsFocus(false);
          }}
          onChange={(e) => {
            setValue(e.target.value);
            if (onChange) {
              onChange(e);
            }
          }}
          className="outline-none h-10 pl-3 w-full pt-0.5"
          value={value === 0 ? '' : value}
          ref={inputE}
          spellCheck={false}
          id={id}
          maxLength={maxLength}
          {...props}
        />
        {showClear && (
          <span
            onClick={() => {
              setValue('');
              inputE.current.focus();
            }}
            className="cursor-pointer px-2 pt-3 sm:p-2 text-gray-500 hover:text-black duration-100"
          >
            xóa
          </span>
        )}
      </div>
      {isWarning && <p className="text-[13px] text-red-500/80 pl-3 pr-1 mb-1">{messsage}</p>}
    </div>
  );
}

InputText.propTypes = {
  isWarning: PropTypes.bool,
  messsage: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  clear: PropTypes.bool,
  setClear: PropTypes.func,
  setValue: PropTypes.func,
  id: PropTypes.string,
  maxLength: PropTypes.number,
};

export default InputText;
