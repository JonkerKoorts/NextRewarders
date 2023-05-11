import React, { useState, useEffect } from "react";
import withAuth from "@/hoc/withAuth";
import { fetchUsers } from "@/utils/parse";
import Link from "next/link";

const Rewards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchAndSetUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    };

    fetchAndSetUsers();
  }, []);

  useEffect(() => {
    const results = users.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(results);
  }, [searchTerm, users]);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setSearchTerm("");
    setFilteredUsers([]);
  };

  return (
    <div className="bg-color-2 min-h-screen flex flex-col items-center justify-start py-32 px-6">
      <h1 className="mb-4 text-xl font-bold text-center">Admin Rewards Page</h1>
      <input
        type="text"
        placeholder="Search for a user..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-3 py-2 border border-main rounded focus:outline-none focus:border-secondary mb-4"
      />
      {selectedUser ? (
        <p className="mb-4 text-sm font-medium">
          Selected user: {selectedUser.name}
        </p>
      ) : (
        searchTerm &&
        (filteredUsers.length > 0 ? (
          <div
            onClick={() => handleUserSelect(filteredUsers[0])}
            className="cursor-pointer bg-main hover:bg-secondary text-color-2 px-4 py-2 rounded"
          >
            {filteredUsers[0].name}
          </div>
        ) : (
          <div className="mb-4 text-sm font-medium">
            No matching user found.
          </div>
        ))
      )}
      <Link
        href="/home"
        className="bg-color-8 text-color-2 py-3 px-8 rounded-md hover:bg-main"
      >
        Back
      </Link>
    </div>
  );
};

export default withAuth(Rewards);
