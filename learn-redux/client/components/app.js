import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// maps state's state.<prop> to this.props.<prop>
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// connect wil inject the data from the store into the component regardless of
// what level the component is. E.g.
//  App -> Provider -> Router -> RouterContext -> Main
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
