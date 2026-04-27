import { useState, useEffect } from "react";
import "./index.css";

export default function App() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Name is required";

    if (!form.email.includes("@"))
      err.email = "Enter valid email";

    if (form.password.length < 6)
      err.password = "Min 6 characters";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  useEffect(() => {
    validate();
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(form);
      setForm({ name: "", email: "", password: "" });
    }
  };

  return (
    <div className="container">

      <div className="card">

        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <label className="checkbox">
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>

          <button type="submit">Submit</button>

        </form>

      </div>

      {submitted && (
        <div className="result-card">
          <h3>Submitted Data</h3>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Password: {submitted.password}</p>
        </div>
      )}

    </div>
  );
}