import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Developers from '../components/Developers';

const mapStateToProps = state => (
  {
    developerInfo: state.developerInfo
  }
);

export default connect(mapStateToProps)(Developers);
