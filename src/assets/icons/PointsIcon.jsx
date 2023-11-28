import PropTypes from 'prop-types';
const PointsIcon = ({ width = '20', height = '18' }) => (
  <svg
    fill="none"
    height={height}
    viewBox="0 0 20 18"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM7 8V6H5V8H3V10H5V12H7V10H9V8H7ZM11 8V10H17V8H11Z"
      fill="white"
    />
  </svg>
);

PointsIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default PointsIcon;
