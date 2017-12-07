import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

// Components
import Header from '../components/Header';

// Action
import { updateSearchName } from '../actions/developersAction';

const mapStateToProps = state => ({
  searchName: _.get(state, 'developerInfo.searchName', '')
});

const mapDispatchToProps = dispatch => ({
  searchDevelopers: bindActionCreators(updateSearchName, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
