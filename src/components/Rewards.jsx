import "./Rewards.css";

export default function Rewards() {
  const items = [
    { level: "Bronze", target: 1000 },
    { level: "Silver", target: 3000 },
    { level: "Gold", target: 5000 },
  ];
  return (
    <div className="rewards-grid">
      {items.map((i) => (
        <div key={i.level} className="reward-card">
          <h4>{i.level}</h4>
          <p>₹{i.target.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
