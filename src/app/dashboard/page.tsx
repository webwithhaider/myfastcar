"use client";

import { useEffect, useState } from "react";
import { UserService } from "@/services/user.services";
import { User } from "@/types/models";

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    UserService.getAll()
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
