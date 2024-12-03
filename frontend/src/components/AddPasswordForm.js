import React, { useState } from "react";
import { addPassword } from "../services/api";

const AddPasswordForm = () => {
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordEntry = {
      title,
      username,
      encrypted_password: password,
      url,
      notes,
      user_id: 1,
    }; // Replace 1 with the actual user_id
    const response = await addPassword(passwordEntry);
    if (response) {
      // Handle successful addition (e.g., refresh the list)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit">Add Password</button>
    </form>
  );
};

export default AddPasswordForm;
