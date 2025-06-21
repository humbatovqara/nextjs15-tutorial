import UsersTable from "@/components/UsersTable";
import UserForm from "@/components/UserForm";

async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("international delay");
    }, 2000);
  });

  return (
    <div className="flex flex-col w-md m-auto">
      <h1>Users</h1>
      <UserForm /> {/* Client Component */}
      <UsersTable users={users} /> {/* Server Component */}
    </div>
  );
}

export default UsersPage;
