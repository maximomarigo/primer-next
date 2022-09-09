import Router from "next/router";

const Users = (props) => {
  return (
    <div>
      <ul className="list-group">
        {props.users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
            key={user.id}
            onClick={() => Router.push(`/users/[id]`, `/users/${user.id}`)}
          >
            <p>
              {user.first_name} {user.last_name}{" "}
            </p>
            <p>EMAIL:{user.email}</p>
            <img src={user.avatar} alt="" style={{ borderRadius: "50%" }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
