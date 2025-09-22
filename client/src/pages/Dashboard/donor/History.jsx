import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spin, List } from "antd";

const FoodHistory = ({ donorEmail }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!donorEmail) return;

    const fetchHistory = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:8000/donate/food/history?donorEmail=${donorEmail}`);
        setHistory(res.data.donations);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [donorEmail]);

  if (loading) return <Spin tip="Loading donation history..." />;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Food Donation History</h2>
      {history.length === 0 ? (
        <p>No donations yet.</p>
      ) : (
        <List
          bordered
          dataSource={history}
          renderItem={item => (
            <List.Item>
              <strong>{item.foodType}</strong> - {item.quantity} - {new Date(item.createdAt).toLocaleString()}
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default FoodHistory;
