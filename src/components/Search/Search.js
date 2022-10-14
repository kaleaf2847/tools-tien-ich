import { SearchIcon } from '@components/base/Icons';
import { Fragment, memo, useState } from 'react';
import SearchModal from './SearchModal';

function Search() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div
        onClick={() => {
          setShowModal(true);
        }}
        className="flex cursor-pointer duration-100 text-base w-fit lg:w-3/12 xl:w-4/12 opacity-80 bg-gray-200 hover:bg-gray-300/80 px-2 lg:px-4 py-1.5 rounded-2xl select-none"
      >
        <SearchIcon />
        <span className="outline-none px-2 pt-0.5 flex-grow text-gray-500 hidden lg:inline">Tìm kiếm công cụ</span>
        <span className="pt-0.5 hidden lg:inline">Ctrl Q</span>
      </div>
      <SearchModal setShowModal={setShowModal} showModal={showModal} />
    </Fragment>
  );
}

export default memo(Search);
