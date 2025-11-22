import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Dashboard() {
  const { theme, toogleTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <main className={theme}>
      <h1>Dashboard</h1>
      <span>{theme}</span>
      <button onClick={toogleTheme}>ZMIEŃ MOTYW</button>
    </main>
  );
}

export default Dashboard;
