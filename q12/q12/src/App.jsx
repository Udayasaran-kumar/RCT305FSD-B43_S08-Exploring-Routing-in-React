import { Routes, Route } from "react-router-dom";
import Users from "./Users";
import UserDetails from "./UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/users/:id" element={<UserDetails />}></Route>
    </Routes>
  );
}

export default App;