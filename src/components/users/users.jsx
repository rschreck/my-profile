import React, { Fragment, useContext } from "react";
import { users } from "./user-list";
import { UserItem } from "./user-item";
//import ContactContext from "../../context/contact/contact-context";
export function Users() {
  //const contactContext = useContext(ContactContext);
  //const { contacts } = contactContext;
  return (
    <Fragment>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </Fragment>
  );
}
