// src/components/Notify.tsx
import React from 'react';
import './notify.css';
 
const Notify = () => {
  return (
    <div className="layout">
      <div className="sidebar">
        <div className="sidebar-user">
          <img src="https://ui-avatars.com/api/?name=Tu+Nombre" alt="User" className="user-avatar" />
 
          <div className="user-name">Tú</div>
        </div>
        <div className="sidebar-nav">
          <ul>
            <li>👤 Editar perfil</li>
            <li className="active">🔔 Notificaciones</li>
            <li>🔒 Seguridad</li>
            <li>❓ Ayuda</li>
          </ul>
        </div>
      </div>
 
      <div className="main-content">
        <div className="notifications-header">
          <h1>Notifications</h1>
          <p>Stay updated with your latest notifications</p>
          <div className="tabs">
            <button className="tab active">All</button>
            <button className="tab">Unread (12)</button>
            <button className="mark-read">Mark all as read</button>
          </div>
        </div>
 
        <div className="notifications-list">
          {[
            {
              icon: '🧑',
              name: 'Pablo Ramirez',
              msg: 'te ofrece un trabajo',
              desc: 'Buenas tardes, necesito un soldador, es una urgencia.',
              date: 'July 16, 2024 · 03:47 PM',
            },
            {
              icon: '🧔',
              name: 'Pedro Pineda',
              msg: 'te ofrece un trabajo',
              desc: 'Buenas tardes, necesito un soldador, es una urgencia.',
              date: 'July 16, 2024 · 03:57 PM',
            },
            {
              icon: '👩',
              name: 'Marta Alas',
              msg: 'te ofrece un trabajo',
              desc: 'Buenas tardes, necesito un soldador el 23 de Julio.',
              date: 'July 16, 2024 · 02:17 PM',
            },
            {
              icon: '👨',
              name: 'Pablo Ramireze',
              msg: 'te ofrece un trabajo',
              desc: 'Buenas tardes, necesito un soldador, el 28 de Julio.',
              date: 'July 16, 2024 · 02:17 PM',
            },
          ].map((n, idx) => (
            <div key={idx} className="notification-item">
              <div className="avatar">{n.icon}</div>
              <div className="message">
                <strong>{n.name}</strong> {n.msg}
                <div>{n.desc}</div>
                <a href="#">Más información</a>
              </div>
              <div className="meta">
                <span className="dot" />
                {n.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default Notify;