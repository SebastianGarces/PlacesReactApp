import React from "react";

import UserList from "../components/UsersList";

const Users = () => {
	const USERS = [
		{
			id: "u1",
			name: "Sebas Garces",
			image:
				"https://i.ibb.co/ZMVkwVP/long-exposure-of-photography-of-brown-tree-3536526.jpg",
			places: 3
		}
	];

	return <UserList items={USERS} />;
};

export default Users;
