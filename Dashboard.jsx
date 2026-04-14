import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetch("/api/analytics")
      .then((res) => res.json())
      .then(setStats);
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Total Messages: {stats.totalMessages}</p>
      <p>Users: {stats.users}</p>
    </div>
  );
}