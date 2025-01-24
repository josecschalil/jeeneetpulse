import PropTypes from 'prop-types';

const CustomButton = ({ onClick, disabled, children }) => {
  return (
    <button
      className="px-4 py-1 text-black bg-gray-100 shadow h-fit text-[16px] border border-gray-100 hover:border-gray-600 rounded-2xl tracking-wider disabled:text-gray-300 active:border-[2px] transition-all duration-300"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

CustomButton.defaultProps = {
  disabled: false,
};

export default CustomButton;
