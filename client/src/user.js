import React, { useEffect, useState } from "react";
import axios from "axios";

function Intro(props) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUsers = async () => {
    setLoading(true);
    const data = await axios.get("/api/users").then((res) => res.data);
    setUsers(data);
    return data;
  };

  useEffect(() => {
    if (loading) getUsers();
    return () => setLoading(false);
  }, [loading]);

  return users.map((user) => (
    <div key={user.id}>
      <div>{user.id}</div> <div>{user.password}</div>
      <div>{user.name}</div>
    </div>
  ));
}

export default Intro;
