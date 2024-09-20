import './Button.css'

const Button = ({ children, size, onClick }) => {
 

  return (
    <button onClick={(event) => {
      event.preventDefault();
      onClick();
    }} className={`${size}`}>{children}</button>
  );
};

export default Button;