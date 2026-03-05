import { useEffect, useState } from "react";
import { getUser } from "../services/githubApi";

const UserProfile = ({ username }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    async function fetchUser(){

      setLoading(true);

      try{
        const data = await getUser(username);
        setUser(data);
      }
      catch{
        setUser(null);
      }

      setLoading(false);
    }

    fetchUser();

  },[username])

  if(loading) return <div className="skeleton profile-skeleton"></div>

  if(!user) return <p>User not found</p>

  return(

    <div className="profile">

      <img src={user.avatar_url} alt="avatar"/>

      <h2>{user.name}</h2>

      <p>{user.bio}</p>

      <div className="stats">
        <span>Followers: {user.followers}</span>
        <span>Repos: {user.public_repos}</span>
      </div>

    </div>

  )
}

export default UserProfile