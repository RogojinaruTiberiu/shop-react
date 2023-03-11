import React from "react";
import { NavLink } from "react-router-dom";

const users = [
    {
        name: "home",
        link: "/",
        id: 0,
    },
    {
        name: "blog",
        link: "/blog",
        id: 1,
    },
];

const Header = () => {
    return (
        <div className="header">
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <NavLink to={user.link}>{user.name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Header;
