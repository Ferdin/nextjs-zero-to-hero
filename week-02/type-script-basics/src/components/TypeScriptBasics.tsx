type User = {
  id: number;
  name: string;
};

export default function Test() {
  const name: string = "Ferdin";
  const year: number = new Date().getFullYear();
  const isLoggedIn: boolean = true;
  const fruits: string[] = ["Apple", "Banana", "Cherry"];
  const users: User[] = [
    { id: 1, name: "Ferdin" },
    { id: 2, name: "Norbert" },
  ];
  // let status: "waiting" | "success";
  // status = "waiting"; // ✅
  // status = "success"; // ✅
  // status = "error";   // ❌ Type '"error"' is not assignable

  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>The year is {year}</p>
      <div>
        {isLoggedIn ? (
          <p>✅ You are logged in</p>
        ) : (
          <p>❌You are not logged in</p>
        )}
      </div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
