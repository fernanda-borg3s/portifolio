import './Button.css'

const Ancora = ({ children, size, onLink}) => {
 

  return (
    <a href={onLink} target="_blank" className={`${size}`}>{children}</a>
  );
};

export default Ancora;