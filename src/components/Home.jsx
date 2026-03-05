import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import UserProfile from "./UserProfile";
import RepoList from "./RepoList";

const Home = () => {

  const [username, setUsername] = useState("");

  const debouncedUsername = useDebounce(username, 500);

  return (

    <div className="container">

      <h1>GitHub Finder</h1>

      <input
        className="search"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />

      {debouncedUsername && (
        <>
          <UserProfile username={debouncedUsername}/>
          <RepoList username={debouncedUsername}/>
        </>
      )}

    </div>

  );
};

export default Home;