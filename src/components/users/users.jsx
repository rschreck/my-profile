import React from "react";
import { users } from "./user-list";
import { UserItem } from "./user-item";
export function Users() {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
