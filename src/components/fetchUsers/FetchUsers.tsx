import React, { useState } from "react";

function SearchUsers() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch(
      `https://api.github.com/search/users?q=${inputValue}`
    );
    const data = await response.json();
    console.log(data.items); // logs the users
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search users"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SearchUsers;
