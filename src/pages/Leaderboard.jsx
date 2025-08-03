import "./Leaderboard.css";

export default function Leaderboard() {
  const data = [
    { name: "Alice", amount: 9000 },
    { name: "Bob", amount: 7500 },
    { name: "You", amount: 4520 },
  ];
  return (
    <main className="leaderboard-container">
      <h2>Top Fundraisers</h2>
      <ol>
        {data.map((p, i) => (
          <li key={i} className={p.name === "You" ? "highlight" : ""}>
            <span>{p.name}</span>
            <span>₹{p.amount.toLocaleString()}</span>
          </li>
        ))}
      </ol>
    </main>
  );
}
