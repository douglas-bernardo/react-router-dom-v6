import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="Root">
      <h1>Home - Hello World Jackson Douglas</h1>

      <h2>Contact List</h2>
      <nav>
        <ul>
          <li>
            <Link to={`contacts/1`}>Contact 1</Link>
          </li>
          <li>
            <Link to={`contacts/2`}>Contact 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
