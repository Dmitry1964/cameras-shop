import './spinner.css';

const Spinner = (): JSX.Element => (
  <div className="spinner">
    <div className="ring"></div>
    <span>Loading...</span>
  </div>
);

export default Spinner;
