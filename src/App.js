import "./App.css";
import { Navbar } from "./components/Navbar";
import { Users } from "./components/users/users.jsx";

function App() {
  return (
    <div className="App">
      <Navbar title=" My Profile Finder" />
      <Users />
    </div>
  );
}

export default App;
