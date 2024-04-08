import { useContext, useEffect } from "react";
import { UserContext } from "../../components/context/userContext";

const Dashboard = () => {
  const { user, logout } = useContext(UserContext);

  useEffect(() => {
    // This function now triggers on 'user' change
    console.log("User state changed", user);
  }, [user]); // Dependency array ensures effect runs on 'user' change
  return (
    <div>
      <h1>Dashboard</h1>
      {!!user && <h2>Hello {user.name}!</h2>}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
