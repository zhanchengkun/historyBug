import { Link, Outlet, history } from "umi";
import styles from "./index.less";

export default function Layout() {

  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <button
            onClick={() => {
              history.push(`/test?uid=${1234}`, { some: "state" });
            }}
          >
            test
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              history.push(`/test2`);
            }}
          >
            test2
          </button>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
