import { useState } from "react";

const Input = () => {
  const [topic, setTopic] = useState("");
  const [deadline, setDeadline] = useState("");

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
        <label>Done by:</label>
        <select value={deadline} onChange={(e) => setDeadline(e.target.value)}>
          <option value="1-week">1 week</option>
          <option value="2-week">2 weeks</option>
          <option value="3-week">3 weeks</option>
          <option value="4-week">4 weeks</option>
          <option value="2-months">2 months</option>
          <option value="3-4-months">3-4 months</option>
          <option value="6-months">6 months</option>
          <option value="ongoing">Ongoing</option>
        </select>
      </form>
    </div>
  );
};

export default Input;
