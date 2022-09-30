import { SearchIcon, XIcon } from '@components/Icons';
import { Fragment, memo, useEffect, useRef, useState } from 'react';
import SearchModal from './SearchModal';

function Search() {
  const [showModal, setShowModal] = useState(false);
  console.log('render-search');
  return (
    <Fragment>
      <div
        onClick={() => {
          setShowModal(true);
        }}
        className="flex cursor-pointer duration-100 text-base w-4/12 opacity-80 bg-gray-200 hover:bg-gray-300/80 px-4 py-1.5 rounded-2xl"
      >
        <SearchIcon />
        <span className="outline-none px-2 pt-0.5 flex-grow text-gray-500">Tìm kiếm công cụ</span>
        <span className="pt-0.5">Ctrl Q</span>
      </div>
      <SearchModal setShowModal={setShowModal} showModal={showModal} />
    </Fragment>
  );
}

export default memo(Search);
