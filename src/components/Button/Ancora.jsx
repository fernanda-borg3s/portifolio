import './Button.css'

const Ancora = ({ children, size, onLink}) => {
 
  return (
    <a href={onLink} className={`${size}`}>{children}</a>
  );
};

export default Ancora;