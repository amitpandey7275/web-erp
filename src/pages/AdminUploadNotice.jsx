import { useEffect, useState } from "react";
import "../styles/adminUploadNotice.css";

const BASE_URL = "https://school-erp-zhpk.onrender.com";

function AdminUploadNotice() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editId, setEditId] = useState(null);
  const [notices, setNotices] = useState([]);

  const loadNotices = async () => {
    const res = await fetch(`${BASE_URL}/get_all_notices`);
    const data = await res.json();
    setNotices(data || []);
  };

  useEffect(() => {
    loadNotices();
  }, []);

  const submitNotice = async (e) => {
    e.preventDefault();

    const url = editId
      ? `${BASE_URL}/update_notice/${editId}`
      : `${BASE_URL}/upload_notice`;

    const method = editId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, desc }),
    });

    setTitle("");
    setDesc("");
    setEditId(null);
    loadNotices();
  };

  const editNotice = (n) => {
    setEditId(n.id);
    setTitle(n.title);
    setDesc(n.description);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteNotice = async (id) => {
    if (!window.confirm("Delete notice?")) return;
    await fetch(`${BASE_URL}/delete_notice/${id}`, { method: "DELETE" });
    loadNotices();
  };

  return (
    <div className="notice-container">

      {/* ===== FORM ===== */}
      <div className="notice-form-card">
        <h3>{editId ? "Edit Notice" : "Upload Notice"}</h3>

        <form onSubmit={submitNotice}>
          <input
            placeholder="Notice Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Notice Description"
            rows="4"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />

          <button type="submit">
            {editId ? "Update Notice" : "Publish Notice"}
          </button>
        </form>
      </div>

      {/* ===== LIST ===== */}
      <div className="notice-list-card">
        <h4>Uploaded Notices</h4>

        {notices.map((n) => (
          <div key={n.id} className="notice-row">
            <div>
              <b>{n.title}</b>
              <p>{n.description}</p>
              <small>{new Date(n.time).toLocaleString()}</small>
            </div>

            <div className="notice-actions">
              <button onClick={() => editNotice(n)}>Edit</button>
              <button className="danger" onClick={() => deleteNotice(n.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default AdminUploadNotice;
