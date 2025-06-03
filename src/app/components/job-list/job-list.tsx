import React from 'react';
export default function Main2() {
 const professionals = [
   {
     name: 'Olivia Gómez',
     role: 'Electrician',
     time: '8 am - 7 pm',
     phone: '1234-5678',
     stars: 5,
     image: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/adult-1867481_1280.jpg'
   },
   {
     name: 'Francisco Sánchez',
     role: 'Plumber',
     time: '7 am - 6 pm',
     phone: '4321-8765',
     stars: 4,
     image: 'https://cdn.pixabay.com/photo/2016/03/27/22/16/plumber-1283210_1280.jpg'
   },
   {
     name: 'Sandra Martínez',
     role: 'Babysitter',
     time: '9 am - 5 pm',
     phone: '6960-1214',
     stars: 5,
     image: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/child-1959828_1280.jpg'
   },
   {
     name: 'Elías Chicas',
     role: 'Welder',
     time: '8 am - 4 pm',
     phone: '1367-2468',
     stars: 5,
     image: 'https://cdn.pixabay.com/photo/2016/03/27/22/16/welder-1283208_1280.jpg'
   },
   {
     name: 'Javier Medina',
     role: 'Bricklayer',
     time: '7 am - 5 pm',
     phone: '1098-7654',
     stars: 4,
     image: 'https://cdn.pixabay.com/photo/2017/03/10/08/43/bricklayer-2133904_1280.jpg'
   }
 ];
 return (
<>
<header style={{
       backgroundColor: '#2f2f2f',
       color: 'white',
       display: 'flex',
       alignItems: 'center',
       padding: '10px 20px',
       position: 'fixed',
       width: '100%',
       top: 0,
       zIndex: 1000
     }}>
<div className="menu-icon" style={{ fontSize: '24px', cursor: 'pointer' }}>&#9776;</div>
<div className="title" style={{
         flexGrow: 1,
         textAlign: 'center',
         fontWeight: 500,
         fontSize: '20px'
       }}>Jambo 2.0</div>
</header>
<div className="container" style={{
       maxWidth: '1200px',
       margin: '80px auto 20px',
       backgroundColor: 'white',
       display: 'flex',
       borderRadius: '8px',
       overflow: 'hidden',
       minHeight: 'calc(100vh - 100px)',
       boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
     }}>
       {/* Aside: Filters */}
<aside className="sidebar" style={{
         width: '240px',
         padding: '20px',
         borderRight: '1px solid #ddd',
         color: 'black',
         overflowY: 'auto',
         height: 'calc(100vh - 100px)'
       }}>
<h3>Filters</h3>
         {[
           { title: 'Categories', options: ['Electrician', 'Gardener', 'Plumber', 'Welder', 'Bricklayer'] },
           { title: 'Prices', options: ['$10 - $20', '$20 - $60', '$30 - $50'] },
           { title: 'Location', options: ['Lourdes', 'Ciudad Arce', 'Santa Ana'] },
           { title: 'Languages', options: ['Spanish', 'English'] },
           { title: 'Level', options: ['New', 'Experienced', 'Advanced'] }
         ].map((section, i) => (
<div key={i} style={{ marginBottom: '20px' }}>
<strong>{section.title}</strong>
             {section.options.map((opt, j) => (
<label key={j} style={{ display: 'block', marginTop: '8px', cursor: 'pointer' }}>
<input type="radio" name={section.title.toLowerCase()} style={{ marginRight: '8px' }} /> {opt}
</label>
             ))}
</div>
         ))}
</aside>
       {/* Main: Worker Cards */}
<main className="main" style={{
         flex: 1,
         padding: '20px',
         color: 'black',
         overflowY: 'auto',
         height: 'calc(100vh - 100px)'
       }}>
<div className="topbar" style={{
           display: 'flex',
           justifyContent: 'space-between',
           alignItems: 'center',
           marginBottom: '20px',
           flexWrap: 'wrap',
           gap: '15px'
         }}>
<nav style={{ display: 'flex', gap: '30px', fontSize: '14px', flexWrap: 'wrap' }}>
<span style={{ cursor: 'pointer', color: '#555' }}>Categories</span>
<span style={{ cursor: 'pointer', color: '#555' }}>Departments</span>
<span style={{ cursor: 'pointer', color: '#555' }}>Search by Location</span>
</nav>
<button style={{
             backgroundColor: '#d82929',
             color: 'white',
             padding: '8px 18px',
             border: 'none',
             borderRadius: '5px',
             fontWeight: 'bold',
             cursor: 'pointer'
           }}>Sign In</button>
</div>
         {/* Cards */}
         {professionals.map((person, index) => (
<div key={index} className="card" style={{
             display: 'flex',
             alignItems: 'center',
             backgroundColor: '#f5f5f5',
             borderRadius: '10px',
             padding: '15px',
             marginBottom: '15px',
             boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
             color: 'black',
             gap: '20px'
           }}>
<img
               src={person.image}
               alt={person.name}
               style={{
                 width: '110px',
                 height: '110px',
                 objectFit: 'cover',
                 borderRadius: '15px',
                 border: '3px solid #fffff',
                 flexShrink: 0,
                 boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
               }}
             />
<div style={{ flexGrow: 1 }}>
<h4 style={{ margin: '0 0 6px' }}>{person.name}</h4>
<p style={{ margin: '4px 0' }}><strong>Role:</strong> {person.role}</p>
<p style={{ margin: '4px 0' }}><strong>Hours:</strong> {person.time}</p>
<p style={{ margin: '4px 0' }}>📞 <strong>{person.phone}</strong></p>
</div>
<div style={{ textAlign: 'right', minWidth: '100px' }}>
<div style={{ color: 'gold', fontSize: '20px', marginBottom: '10px' }}>
                 {'⭐'.repeat(person.stars)}
</div>
<button style={{
                 backgroundColor: '#d82929',
                 color: 'white',
                 padding: '8px 14px',
                 border: 'none',
                 borderRadius: '7px',
                 fontWeight: 'bold',
                 cursor: 'pointer',
                 width: '100%'
               }}>Contact</button>
</div>
</div>
         ))}
</main>
</div>
</>
 );
}