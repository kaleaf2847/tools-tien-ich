import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import clsx from 'clsx';
import Proptypes from 'prop-types';

function SubmitFormButton({ disable, value, className }) {
  return disable ? (
    <Tippy content="Bạn vui lòng điền đầy đủ thông tin để thực hiện đăng kí">
      <div
        className={clsx(
          className,
          'w-1/2 bg-blue-to-green text-xl rounded-full p-2 cursor-default text-center opacity-50',
        )}
      >
        {value}
      </div>
    </Tippy>
  ) : (
    <input
      type="submit"
      value={value}
      className={clsx(
        className,
        'block w-1/2 bg-blue-to-green text-xl rounded-full p-2 cursor-pointer hover:opacity-80',
      )}
    />
  );
}

SubmitFormButton.propTypes = {
  disable: Proptypes.bool,
  className: Proptypes.string,
};

export default SubmitFormButton;
