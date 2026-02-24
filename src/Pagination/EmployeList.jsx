import { useState , useMemo } from "react";
import { useEmployee } from "./Employee";
import { useDebounce } from "./debounce";

export default function EmployeeComponent() {
  const { users, loading, error } = useEmployee();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const filtererdUsers = useMemo(() => {
    return users.filter((user) => 
      user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
  },[users, debouncedSearch])
  if (loading) return <p>Loading Users.....</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h2>Employees List</h2>
      <input type="text"
        placeholder="Enter Employee Name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filtererdUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}