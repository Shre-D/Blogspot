import { useContext } from "react";
import AuthContext from "../context/authContext";
import keycloak from "../helpers/keycloak";

function Navbar() {
  const auth = useContext(AuthContext);
  const { userInfo, login } = auth;

  return (
    <nav className=" flex justify-between w-full px-4 py-2 bg-slate-800 rounded-b-lg">
      <p className=" mt-1 text-white">Blogspot.</p>
      <div className="flex">
        {login ? (
          <div className="flex">
            <p className=" text-white text-md mr-4 my-auto">
              {userInfo.username}
            </p>
          </div>
        ) : (
          <button className="p-2 rounded-xl bg-green-500 text-white mr-4 border-2 border-white" onClick={() => keycloak.login()}>Login</button>
        )}

        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
          alt=""
          className=" w-10 rounded-full"
        />
        {login ? (
          <button
            className="text-white ml-4 p-2 bg-green-400 rounded-xl"
            onClick={() => keycloak.logout()}
          >
            Logout
          </button>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
