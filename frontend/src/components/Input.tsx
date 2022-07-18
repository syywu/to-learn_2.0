import { useState } from "react";

const Input = () => {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="input-form">
      <h2>Insert a new topic</h2>
      <form onSubmit={handleSubmit}>
        <label>New Topic:</label>
        <input
          type="text"
          required
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Input;
