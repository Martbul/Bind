
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      {/* <img
         id="sadFaceImg"
         src="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png"
         alt="sad face"
       /> */}

      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>
              4<span>0</span>4
            </h1>
          </div>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link to="/">home page</Link>
        </div>
      </div>
    </>
  );
}
