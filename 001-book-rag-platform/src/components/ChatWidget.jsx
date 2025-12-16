import React, { useState } from 'react';

export default function ChatWidget() {
  const [q, setQ] = useState('');
  const [msgs, setMsgs] = useState([]);
  const [loading, setLoading] = useState(false);
  const send = async () => {
    if (!q.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, use_llm: true })
      });
      const payload = await res.json();
      setMsgs([...msgs, { question: q, payload }]);
      setQ('');
    } catch (e) {
      setMsgs([...msgs, { question: q, error: String(e) }]);
      setQ('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed', right: 20, bottom: 20, width: 340, maxWidth: 'calc(100% - 40px)',
      background: '#fff', boxShadow: '0 6px 24px rgba(0,0,0,0.12)', borderRadius: 8, zIndex: 9999
    }}>
      <div style={{ padding: 10, borderBottom: '1px solid #eee', fontWeight: 600 }}>Book Chatbot</div>
      <div style={{ padding: 10, maxHeight: 260, overflowY: 'auto' }}>
        {msgs.length === 0 && <div style={{ color: '#666' }}>Ask questions about the book.</div>}
        {msgs.map((m, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <div><b>Q:</b> {m.question}</div>
            {m.error && <div style={{ color: 'red' }}>{m.error}</div>}
            {m.payload && <>
              {m.payload.answer && <div><b>A:</b> {m.payload.answer}</div>}
              {m.payload.matches && m.payload.matches.map((mt, j) => (
                <div key={j} style={{ fontSize: 13, color: '#444', marginTop: 6 }}>
                  • <b>{mt.title}</b>: {mt.excerpt}
                </div>
              ))}
            </>}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, padding: 10, borderTop: '1px solid #eee' }}>
        <input value={q} onChange={e => setQ(e.target.value)} onKeyDown={e=>{ if(e.key==='Enter') send(); }} placeholder="Ask about the book..." style={{ flex: 1, padding: 8 }} />
        <button onClick={send} disabled={loading} style={{ padding: '8px 12px' }}>{loading ? '...' : 'Ask'}</button>
      </div>
    </div>
  );
}
