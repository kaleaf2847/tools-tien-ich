import PropTypes from 'prop-types';
import Image from 'next/image';

function ToolsItem({ name, img }) {
  return (
    <div className="border-gray-300 border-[1px] shadow-lg rounded-lg overflow-hidden">
      <Image layout="responsive" width={200} height={300} src={img} />
      <p className="text-xl line-clamp-2 m-3">{name}</p>
    </div>
  );
}

ToolsItem.proptypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

export default ToolsItem;
