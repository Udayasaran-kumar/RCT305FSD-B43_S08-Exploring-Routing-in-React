import { Link } from "react-router-dom";

function Users() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  return (
    <div>
      <h1>Users Page</h1>
      {users.map((user) => (
        <Link key={user.id} to={`/user/${user.id}`}>
          {user.name}
        </Link>
      ))}
    </div>
  );
}

export default Users;