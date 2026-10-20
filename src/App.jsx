import { useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

const bowls = [
  {
    name: 'The Green Machine',
    detail: 'Herby chickpeas · avocado · crunchy greens',
    protein: '22g protein',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85',
    alt: 'Colorful bowl of fresh greens, vegetables, and grains',
    className: 'bowl-image--green',
  },
  {
    name: 'Smoky Peanut Crunch',
    detail: 'Smoky tofu · peanut dressing · roasted veggies',
    protein: '24g protein',
    image:
      'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1000&q=85',
    alt: 'Fresh plant-based bowl with vegetables and grains',
    className: 'bowl-image--peanut',
  },
  {
    name: 'Everyday Dal Bowl',
    detail: 'Comforting lentils · brown rice · bright chutney',
    protein: '21g protein',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85',
    alt: 'Warm bowl of nourishing lentils and vegetables',
    className: 'bowl-image--dal',
  },
];

function Header() {
  return (
    <header className="site-header">
      <Link aria-label="Protein Per Gram home" className="wordmark" to="/">
        <span className="wordmark-mark">P<span>+</span></span>
        <span>protein per gram</span>
      </Link>
      <nav aria-label="Main navigation" className="main-nav">
        <NavLink end to="/">Home</NavLink>
        <NavLink to="/gym">Bowl at my Gym</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Link className="header-cta" to="/gym">Partner with us <span aria-hidden="true">↗</span></Link>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <Link aria-label="Protein Per Gram home" className="footer-wordmark" to="/">P+ protein per gram</Link>
      <span>Good food. More strength. Less fuss.</span>
      <a href="https://www.swiggy.com/search?query=protein%20bowl%20Pashan" rel="noreferrer" target="_blank">
        Find us on Swiggy <span aria-hidden="true">↗</span>
      </a>
    </footer>
  );
}

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> FUEL FOR YOUR EVERYDAY</p>
          <h1>Big protein.<br /><span>Little price.</span></h1>
          <p className="hero-description">
            Plant-powered bowls made fresh for your next rep, run, or regular Tuesday.
          </p>
          <div className="hero-proof">
            <span className="proof-icon" aria-hidden="true">✳</span>
            <p><strong>20+ grams</strong> of plant protein<br />for <strong>under ₹100.</strong></p>
          </div>
          <Link className="button button--dark" to="/gym">Bring bowls to my gym <span aria-hidden="true">↗</span></Link>
          <a className="text-link" href="https://www.swiggy.com/search?query=protein%20bowl%20Pashan" rel="noreferrer" target="_blank">
            Order on Swiggy <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-visual" aria-label="Fresh plant-based protein bowl" role="img">
          <div className="hero-sun" />
          <img
            alt="Fresh salad bowl with colorful vegetables and greens"
            className="hero-bowl"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=90"
          />
          <div className="hero-sticker"><span>PLANTS</span><strong>POWER<br />PEOPLE</strong><span>✳ EVERY DAY</span></div>
          <div className="hero-caption">Fresh things<br />for strong days <span>↗</span></div>
        </div>
        <div aria-hidden="true" className="hero-index">01 / 03</div>
      </section>

      <section className="bowls-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE GOOD STUFF</p>
            <h2>Bowls that do<br />a little <em>extra.</em></h2>
          </div>
          <p className="section-intro">Real ingredients, proper portions, and plant protein that shows up when you do.</p>
        </div>
        <div className="bowl-grid">
          {bowls.map((bowl, index) => (
            <article className="bowl-card" key={bowl.name}>
              <div className={`bowl-image ${bowl.className}`}>
                <img alt={bowl.alt} loading="lazy" src={bowl.image} />
                <span className="bowl-number">0{index + 1}</span>
                <span className="protein-pill">{bowl.protein}</span>
              </div>
              <div className="bowl-card-copy">
                <div><h3>{bowl.name}</h3><p>{bowl.detail}</p></div>
                <span aria-hidden="true" className="card-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
        <div className="menu-note"><span>✳</span> Made with plants. Built for people who move.</div>
      </section>

      <section className="bottom-banner">
        <p className="eyebrow">GOOD FOOD BELONGS EVERYWHERE</p>
        <h2>Your gym could<br />be our <em>next stop.</em></h2>
        <Link className="button button--light" to="/gym">Let’s make it happen <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}

function Gym() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="inner-page">
      <section className="page-intro gym-intro">
        <p className="eyebrow"><span className="eyebrow-dot" /> FOR GYMS & COMMUNITIES</p>
        <h1>Good bowls.<br /><em>Good company.</em></h1>
        <p>Bring affordable, plant-powered protein to the people who make your gym feel like a community.</p>
      </section>
      <section className="gym-content">
        <div className="gym-aside">
          <span className="aside-mark">P+</span>
          <h2>A better<br />post-workout<br /><em>starts here.</em></h2>
          <p>Tell us a little about your space. We’ll get back to you about stocking fresh bowls at your gym.</p>
          <div className="aside-facts"><span>20+ g protein</span><span>Under ₹100</span><span>Plant powered</span></div>
        </div>
        <form className="gym-form" onSubmit={handleSubmit}>
          <p className="eyebrow">LET’S TALK</p>
          <h2>Tell us about your gym.</h2>
          <label htmlFor="name">Your name</label>
          <input autoComplete="name" id="name" name="name" placeholder="e.g. Aarya Shah" required />
          <label htmlFor="email">Email address</label>
          <input autoComplete="email" id="email" name="email" placeholder="you@example.com" required type="email" />
          <label htmlFor="gym-name">Gym or community name</label>
          <input id="gym-name" name="gym" placeholder="Where do you train?" required />
          <label htmlFor="message">Anything else? <span>(optional)</span></label>
          <textarea id="message" name="message" placeholder="Tell us what you have in mind..." rows="3" />
          <button className="button button--dark form-submit" type="submit">
            Send an enquiry <span aria-hidden="true">↗</span>
          </button>
          {submitted && (
            <p aria-live="polite" className="form-success" role="status">
              Thanks for your interest! This form is a front-end preview and does not send enquiries yet.
            </p>
          )}
          <p className="form-note">We’re starting around Pashan, Pune. We’d love to hear from you.</p>
        </form>
      </section>
    </main>
  );
}

function Contact() {
  const latitude = 18.5362;
  const longitude = 73.792;

  return (
    <main className="inner-page">
      <section className="page-intro contact-intro">
        <p className="eyebrow"><span className="eyebrow-dot" /> COME SAY HI</p>
        <h1>Good things<br /><em>are close by.</em></h1>
        <p>We’re bringing plant-powered bowls to gym-goers around Pashan, Pune.</p>
      </section>
      <section className="contact-content">
        <div className="contact-details">
          <div className="contact-detail">
            <span className="detail-number">01</span>
            <div><p className="eyebrow">FIND OUR NEIGHBOURHOOD</p><h2>Pashan, Pune</h2><p>Maharashtra, India</p></div>
          </div>
          <div className="contact-detail">
            <span className="detail-number">02</span>
            <div><p className="eyebrow">GET IN TOUCH</p><h2>Gym or community?</h2><p>Tell us where you train and we’ll explore bringing bowls to your space.</p><Link className="inline-link" to="/gym">Send us an enquiry <span aria-hidden="true">↗</span></Link></div>
          </div>
          <div className="contact-detail">
            <span className="detail-number">03</span>
            <div><p className="eyebrow">HUNGRY RIGHT NOW?</p><h2>Check Swiggy</h2><p>Search for protein bowls around Pashan.</p><a className="inline-link" href="https://www.swiggy.com/search?query=protein%20bowl%20Pashan" rel="noreferrer" target="_blank">Find us on Swiggy <span aria-hidden="true">↗</span></a></div>
          </div>
        </div>
        <div className="map-wrap">
          <iframe
            title="Map showing Pashan, Pune"
            src={`https://www.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="map-coordinate"><span className="map-pin">●</span><span><strong>PASHAN, PUNE</strong><small>{latitude}° N, {longitude}° E</small></span></div>
        </div>
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">OOPS, WRONG BOWL</p>
      <h1>That page<br /><em>isn’t on the menu.</em></h1>
      <Link className="button button--dark" to="/">Back to home <span aria-hidden="true">↗</span></Link>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Gym />} path="/gym" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<NotFound />} path="*" />
      </Routes>
      <Footer />
    </>
  );
}
