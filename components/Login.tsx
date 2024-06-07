import { FunctionComponent } from "preact";

const Login: FunctionComponent = () => {
  //{<p class="error-message">{"Credenciales incorrectas"}</p>}
  return (
    <div class="login-container">
      <h2>Login</h2>

      <form method="POST" action="/login">
        <label for="email">Email</label>
        <input type="text" id="email" name="email" required />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
        <p class="register-link">
          Don't have an account?
          <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};
export default Login;
