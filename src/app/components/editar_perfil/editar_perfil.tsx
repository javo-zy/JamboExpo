import React, { useState } from 'react';
interface Contact {
 name: string;
 role: string;
 image: string;
}
const contacts: Contact[] = [
 { name: 'Mario Rivas', role: 'Bricklayer', image: '/mario.jpg' },
 { name: 'José Medina', role: 'Electrician', image: '/jose.jpg' },
 { name: 'Ramón Sanchez', role: 'Plumber', image: '/ramon.jpg' },
];
export default function MessagesView() {
 const [selectedContact, setSelectedContact] = useState<Contact>(contacts[0]);
 const styles = {
   container: {
     display: 'flex',
     height: '100vh',
     fontFamily: 'Arial, sans-serif',
   },
   sidebar: {
     width: '25%',
     backgroundColor: '#30000',
     color: 'white',
     padding: '1rem',
   },
   input: {
     width: '100%',
     padding: '0.5rem',
     marginBottom: '1rem',
     borderRadius: '5px',
     border: 'none',
   },
   ul: {
     listStyle: 'none',
     padding: 0,
   },
   li: {
     display: 'flex',
     alignItems: 'center',
     marginBottom: '1rem',
     cursor: 'pointer',
   },
   img: {
     width: '40px',
     height: '40px',
     borderRadius: '50%',
     marginRight: '0.5rem',
   },
   chat: {
     flex: 1,
     backgroundColor: '#f0f0f0',
     padding: '1rem',
   },
   chatHeader: {
     display: 'flex',
     alignItems: 'center',
     marginBottom: '1rem',
   },
   chatHeaderImg: {
     width: '60px',
     height: '60px',
     borderRadius: '50%',
     marginRight: '1rem',
   },
   messages: {
     backgroundColor: 'white',
     padding: '1rem',
     borderRadius: '10px',
     display: 'flex',
     flexDirection: 'column' as const,
   },
   messageLeft: {
     backgroundColor: '#dfe6e9',
     padding: '0.5rem 1rem',
     borderRadius: '20px',
     maxWidth: '60%',
     marginBottom: '0.5rem',
     alignSelf: 'flex-start' as const,
   },
   messageRight: {
     backgroundColor: '#74b9ff',
     color: 'white',
     padding: '0.5rem 1rem',
     borderRadius: '20px',
     maxWidth: '60%',
     marginBottom: '0.5rem',
     alignSelf: 'flex-end' as const,
   },
 };
 return (
<div style={styles.container}>
<div style={styles.sidebar}>
<h2>Messages</h2>
<input type="text" placeholder="Find your contact" style={styles.input} />
<ul style={styles.ul}>
         {contacts.map((contact, index) => (
<li key={index} style={styles.li} onClick={() => setSelectedContact(contact)}>
<img src={contact.image} alt={contact.name} style={styles.img} />
<span>{contact.name}</span>
</li>
         ))}
</ul>
</div>
<div style={styles.chat}>
<div style={styles.chatHeader}>
<img src={selectedContact.image} alt={selectedContact.name} style={styles.chatHeaderImg} />
<div>
<h3>{selectedContact.name}</h3>
<p>{selectedContact.role}</p>
</div>
</div>
<div style={styles.messages}>
<div style={styles.messageLeft}>
           Hello, my name is {selectedContact.name}. How can I help you today?
</div>
<div style={styles.messageRight}>
           Hi, I need your help with a project.
</div>
</div>
</div>
</div>
 );
}