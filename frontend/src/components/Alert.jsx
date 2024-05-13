import ReactDOM from 'react-dom';

const Alert = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById('root'));
}
export default Alert;
