import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';
import Developers from '../components/Developers';
import { addDeveloper as addDeveloperAction } from '../actions/developersAction'

const mapStateToProps = state => ({
  developerList: state.developerInfo.developerList
});

const mapDispatchToProps = dispatch => ({
  addDeveloper: bindActionCreators(addDeveloperAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Developers);
