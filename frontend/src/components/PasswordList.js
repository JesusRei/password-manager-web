import React, { useEffect, useState } from "react";
import { getPasswords } from "../services/api";
const PasswordList = () => {
  const [passwords, setPasswords] = useState([]);
  useEffect(() => {
    const fetchPasswords = async () => {
      const response = await getPasswords();
      if (response) {
        setPasswords(response);
      }
    };
    fetchPasswords();
  }, []);
  return (
    <ul>
      {" "}
      {passwords.map((password) => (
        <li key={password.id}>
          {" "}
          {password.title} - {password.username} - {password.encrypted_password}{" "}
        </li>
      ))}{" "}
    </ul>
  );
};
export default PasswordList;
