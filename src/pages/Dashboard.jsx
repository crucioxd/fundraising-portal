import { useEffect, useState } from "react";
import Rewards from "../components/Rewards.jsx";
import "./Dashboard.css";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/intern");
        if (!res.ok) throw new Error("Failed to fetch data.");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error:", err);
        setError("Unable to load intern data.");
      }
    };

    fetchData();
  }, []);

  if (error) return <main className="dashboard-container">{error}</main>;
  if (!data) return <main className="dashboard-container">Loading...</main>;

  return (
    <main className="dashboard-container">
      <div className="stats-card pulse">
        <h3>Hello, {data.name}</h3>
        <p>
          Referral Code: <span>{data.referralCode}</span>
        </p>
      </div>

      <div className="stats-card">
        <h3>Total Raised</h3>
        <p>₹{data.totalDonations.toLocaleString()}</p>
        <div className="progress-bar">
          <div
            className="fill"
            style={{ width: `${(data.totalDonations / data.goal) * 100}%` }}
          />
        </div>
        <small>Goal: ₹{data.goal.toLocaleString()}</small>
      </div>

      <section className="rewards-wrapper">
        <h3>🎁 Your Rewards</h3>
        <Rewards />
      </section>
    </main>
  );
}
