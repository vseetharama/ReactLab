import { useState, useEffect } from "react";

export default function App() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {

    setLoading(true);

    try {

      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await res.json();

      setUsers(data);

      setError("");

    }

    catch {

      setError("Failed to fetch data");

    }

    setLoading(false);
  };

  useEffect(() => {

    fetchUsers();

  }, []);

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div>

      <h1>User Data</h1>

      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={fetchUsers}>
        Refresh
      </button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <table border="1">

        <thead>

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>

        </thead>

        <tbody>

          {filteredUsers.map((u) => (

            <tr key={u.id}>

              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.address.city}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}