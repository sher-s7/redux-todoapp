import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETE,
} from "../actions/visibilityFilter";
import Link from "./Link";

const Filters = ({ currentFilter, setVisibilityFilter }) => {
  return (
    <div>
      Show:
      <Link
        currentFilter={currentFilter === SHOW_ALL}
        onClick={() => setVisibilityFilter(SHOW_ALL)}
      >
        All
      </Link>
      <Link
        currentFilter={currentFilter === SHOW_ACTIVE}
        onClick={() => setVisibilityFilter(SHOW_ACTIVE)}
      >
        Active
      </Link>
      <Link
        currentFilter={currentFilter === SHOW_COMPLETE}
        onClick={() => setVisibilityFilter(SHOW_COMPLETE)}
      >
        Completed
      </Link>
    </div>
  );
};

export default Filters;
