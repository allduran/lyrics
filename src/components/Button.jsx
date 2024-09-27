import '../styles/Button.css';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, type = 'primary' }) => {
  return (
    <button onClick={onClick} className={`btn btn-${type}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Button;
