import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions/visibilityFilter";
import Filters from "../components/Filters";

const mapStateToProps = (state) => ({
  currentFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
