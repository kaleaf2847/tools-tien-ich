import PropTypes from 'prop-types';

function ToolsList({ className, title, children }) {
  return (
    <div className={className}>
      <h2 className="font-bold text-2xl">{title}</h2>
      <div className="flex flex-wrap child:flex-grow child:my-4 child:mx-2 child:w-6/12 sm:child:w-5/12 md:child:w-3/12 lg:child:mx-4 lg:child:w-2/12 2xl:child:w-[15%] child:duration-100 child-hover:-translate-y-1">
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
