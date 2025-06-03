// app/page.tsx
import React from 'react';
import './home.css';
import Image from 'next/image';
import wk from '../../../../public/worker.png';

export default function HomePage() {
 return (
<main className="home-container">
<header className="navbar">
<div className="logo">JAMBO</div>

<nav>
<a href="#">Home</a>
<a href="#">About us</a>
<a href="#">Sign in</a>
<a href="#">Contact us</a>
</nav>
</header>
<section className="hero-section">
<div className="text-content">
<h1>Jambo</h1>
<p>
           We are dedicated to <strong>providing home solutions</strong> that meet the needs of both our <strong>customers</strong> and <strong>workers</strong>.
</p>
<div className="form-section">
<h2>Do you need a quick repair?</h2>
<form>
<input type="text" placeholder="Full Name" />
<input type="email" placeholder="Email" />
<input type="tel" placeholder="Phone" />
<button type="submit">Create Account</button>
</form>
</div>
<div className="call-box">
<h3>Call/Text Us</h3>
<p>+503 0000 0000</p>
<small>Tell us what you need repaired. We accept almost everything!</small>
</div>
</div>
<div className="image-container">
<Image
priority
src={wk}
alt="Follow us on Twitter"
/>
</div>
</section>
</main>
 );
}