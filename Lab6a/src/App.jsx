import { useState, useEffect } from "react";
import "./index.css";

export default function App() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  // Validation using useEffect
  useEffect(() => {

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
    }

    else if (
      !form.email.includes("@") ||
      !form.email.includes(".")
    ) {
      setError("Enter valid email");
    }

    else if (form.password.length < 6) {
      setError("Password must be 6 characters");
    }

    else {
      setError("");
    }

  }, [form]);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (error === "") {

      setData(form);

      setForm({
        name: "",
        email: "",
        password: ""
      });
    }
  };

  return (

    <div className="container">

      <div className="card">

        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <label>

            <input
              type="checkbox"
              onChange={() => setShow(!show)}
            />

            Show Password

          </label>

          <button type="submit">
            Submit
          </button>

        </form>

        {error && <p className="error">{error}</p>}

      </div>

      {data && (

        <div className="result">

          <h3>Submitted Data</h3>

          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>

        </div>

      )}

    </div>
  );
}
