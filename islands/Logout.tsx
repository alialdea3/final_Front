const Logout = () => {
  const onLogout = () => {
    document.cookie = "auth=; path=/;";
    window.location.href = "/login";
  };
  return <a onClick={onLogout} class="logout-button">Logout</a>;
};
export default Logout;
