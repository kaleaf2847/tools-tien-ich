import PropTypes from 'prop-types';
import ToolsItem from './ToolsItem';

function ToolsList({ className, title, children }) {
  return (
    <div className={className}>
      <h2 className="font-bold text-2xl">{title}</h2>
      <div className="flex flex-wrap child:flex-grow child:mx-6 child:my-4 child:w-1/5 child:duration-100 child-hover:-translate-y-1">
        {children}
      </div>
    </div>
  );
}

ToolsList.proptypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default ToolsList;
