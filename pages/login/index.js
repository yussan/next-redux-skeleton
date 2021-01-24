import { useEffect, useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("login...");

    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    }).then((res) => res.json());

    alert(response.message);

    if (response.status === 200) location.href = "/dashboard";
  };

  return (
    <div>
      <h1>Sample Login Page</h1>
      <form method="post" action="#" onSubmit={onSubmit}>
        <input
          placeholder="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
