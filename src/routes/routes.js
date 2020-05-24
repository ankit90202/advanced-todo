import Today from "../containers/Today/Today";
import Tomorrow from "../containers/Tomorrow/Tomorrow";
import Week from "../containers/Week/Week";
import NotFound from "../containers/NotFound/NotFound";

export default [
  { component: Today, path: "/", exact: true },
  { component: Tomorrow, path: "/tomorrow", exact: false },
  { component: Week, path: "/week", exact: false },
  { component: NotFound, path: "/not-found", exact: false },
];
