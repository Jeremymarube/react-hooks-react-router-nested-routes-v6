import { useState, useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import UserCard from "../components/UserCard";
import NavBar from "../components/NavBar";

function Home() {
  //const [users, setUsers] = useState([]);
  const users = useOutletContext();
    

  useEffect(() =>{
    fetch("http://localhost:4000/users")
      .then(r => r.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);
  
  const userList = users.map(user =>{
    return <UserCard key={user.id} user={user}/>;
  });

  return (
      <main>
        <h1>Home!</h1>
        <Outlet />
        {userList}
      </main>
  );
};

export default Home;