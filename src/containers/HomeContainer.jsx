import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

// Components
import Home from '../components/Home';

// Action
import { changeName as changeNameAction } from '../actions/nameAction';

const mapStateToProps = state => ({
  developerList: _.get(state, 'developerInfo.displayDeveloperList', ''),
  userName: _.get(state, 'userInfo.name', '')
});

const mapDispatchToProps = dispatch => ({
  changeName: bindActionCreators(changeNameAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
