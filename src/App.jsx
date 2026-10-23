import { useState } from 'react';
import { Link, NavLink, Route, Routes, useSearchParams } from 'react-router-dom';
import mixBowlImage from '../pictures/mix-bowl.png';
import chanaBowlImage from '../pictures/chana-bowl.jpeg';
import moongMatkiBowlImage from '../pictures/moong-matki.PNG';
import logo from '../pictures/logo.png';

const bowls = [
  {
    name: 'Mix Sprouts Bowl',
    detail: 'Boiled Sprouts · Boiled Peanuts · Chopped Onions · Lemon · Tangy Chutney',
    protein: '20g protein',
    image: mixBowlImage,
    alt: 'Mix Sprouts Bowl',
    className: 'bowl-image--green',
  },
  {
    name: 'Chana Sprouts Bowl',
    detail: 'Boiled Chana · Boiled Peanuts · Chopped Onions · Lemon · Tangy Chutney',
    protein: '20g protein',
    image: chanaBowlImage,
    alt: 'Chana Bowl',
    className: 'bowl-image--peanut',
  },
  {
    name: 'Matki-Moong Sprouts Bowl',
    detail: 'Boiled Matki-Moong · Boiled Peanuts · Chopped Onions · Lemon · Tangy Chutney',
    protein: '20g protein',
    image: moongMatkiBowlImage,
    alt: 'Matki-Moong Sprouts Bowl',
    className: 'bowl-image--dal',
  },
];

function Header() {
  return (
    <header className="site-header">
      <Link aria-label="Protein Per Gram home" className="wordmark" to="/">
        <img alt="Protein Per Gram logo" className="wordmark-mark" src={logo} />
        <span>Protein Per Gram</span>
      </Link>
      <nav aria-label="Main navigation" className="main-nav">
        <NavLink end to="/">Home</NavLink>
        <NavLink to="/order">Order</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Link aria-label="Protein Per Gram home" className="hidden wordmark" to="/">
        <img alt="Protein Per Gram logo" className="wordmark-mark" src={logo} />
        <span>Protein Per Gram</span>
      </Link>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <Link aria-label="Protein Per Gram home" className="footer-wordmark" to="/">
        <img alt="Protein Per Gram logo" className="wordmark-mark" src={logo} />
        <span>Protein Per Gram</span>
      </Link>
      <span>Good food. More strength. Less fuss.</span>
      <a href="https://www.swiggy.com/menu/1461049" className="swiggy-link" rel="noreferrer" target="_blank">
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
          <div className="hero-branding">
            <img alt="Protein Per Gram logo" className="hero-logo" src={logo} />
            <h1>Protein Per Gram</h1>
          </div>
          <p className="hero-description">
            Plant-powered bowls for your next rep, run, or a regular high protein day.
          </p>
          <div className="hero-proof">
            <span className="proof-icon" aria-hidden="true">✳</span>
            <p><strong>20+ grams</strong> of plant protein</p>
          </div>
          <a className="swiggy-button" href="https://www.swiggy.com/menu/1461049" rel="noreferrer" target="_blank">
            Order on Swiggy <span aria-hidden="true">↗</span>
          </a>
          <Link className="gap-left button button--dark" to="/order">Deliver At My Community</Link>
        </div>
        <div className="hero-visual" aria-label="Fresh plant-based protein bowl" role="img">
          <img
            alt="Fresh salad bowl with colorful vegetables and greens"
            className="hero-bowl"
            src={mixBowlImage}
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
        <Link className="button button--light" to="/order">Order now <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}

const COMMUNITIES = [
  { name: 'Five Elements Fit Nation', value: 'fit-nation' }
];

const BOWLS = [
  { name: 'Matki Sprouts', value: 'matki', price: 90 },
  { name: 'Moong Sprouts', value: 'moong', price: 90 },
  { name: 'Chana Sprouts', value: 'chana', price: 90 },
  { name: 'Matki-Moong Sprouts', value: 'matki-moong', price: 100 },
  { name: 'Mix Sprouts', value: 'mix', price: 110 },
];

function Order() {
  const [searchParams] = useSearchParams();
  const [boiledPeanuts, setBoiledPeanuts] = useState(true);

  const communityParam = searchParams.get('community');
  const validCommunity = COMMUNITIES.some((community) => community.value === communityParam)
    ? communityParam
    : '';

  const [choppedOnion, setChoppedOnion] = useState(true);
  const [lemonSlices, setLemonSlices] = useState(true);
  const [tangyTomatoChutney, setTangyTomatoChutney] = useState(true);
  const [cutlery, setCutlery] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const communitySelect = document.getElementById('community');
    const nameInput = document.getElementById('name');
    const bowlSelect = document.getElementById('bowl');

    if (!communitySelect?.value) {
      communitySelect?.focus();
      return;
    }

    if (!nameInput?.value.trim()) {
      nameInput?.focus();
      return;
    }

    if (!bowlSelect?.value) {
      bowlSelect?.focus();
      return;
    }

    const phone = '+917028835294';
    const selectedBowl = BOWLS.find((bowl) => bowl.value === bowlSelect.value);
    const communityName = COMMUNITIES.find((community) => community.value === communitySelect.value)?.name;
    const orderHash = new Date().getTime().toString(36).toUpperCase();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const date = tomorrow.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    const text = encodeURIComponent(
      '_Protein Per Gram_,\n\nI am *' + nameInput.value.trim() + '*\n\nOrder for' + ` ${date} - ` + ` *#${orderHash}*` + '\n' +
      'At: ' + (communityName ? `*${communityName}*` :  'Not selected') + '\n\n' +
      'Bowl: ' + (selectedBowl ? `*${selectedBowl.name} | ₹${selectedBowl.price}*` : 'Not selected') + '\n\n' +
      'Peanuts: *' + (boiledPeanuts ? '✅ I want Peanuts' : '❌ Don’t send Peanuts') + '*\n' +
      'Onion: *' + (choppedOnion ? '✅ I want Onion' : '❌ Don’t send Onion') + '*\n' +
      'Lemon: *' + (lemonSlices ? '✅ I want Lemon' : '❌ Don’t send Lemon') + '*\n' +
      'Chutney: *' + (tangyTomatoChutney ? '✅ I want Chutney' : '❌ Don’t send Chutney') + '*\n' +
      'Cutlery: *' + (cutlery ? '✅ I want Cutlery' : '❌ Don’t send Cutlery') +
      '*\n\nBelow is the screenshot of payment of ' + `₹${selectedBowl.price}.`
    );

    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <main className="inner-page">
      <section className="gym-content">
        <div className="gym-aside">
          <div className="logo-with-swiggy-link">
            <img alt="Protein Per Gram logo" className="aside-mark" src={logo} />
            <a
              className="aside-swiggy-link"
              href="https://www.swiggy.com/menu/1461049"
              rel="noreferrer"
              target="_blank"
            >
              Order on Swiggy <span aria-hidden="true">↗</span>
            </a>
          </div>
          <h2>A better<br />post-workout<br /><em>starts here.</em></h2>
          <div className="aside-facts"><span>20+ g protein</span><span>Plant powered</span></div>
        </div>
        <form className="gym-form" onSubmit={handleSubmit}>
          <p className="eyebrow">ORDER FOR TOMORROW</p>
          <label htmlFor="community">Community</label>
          <select id="community" name="community" required {...(Boolean(validCommunity) ? { disabled: true, value: validCommunity || '' } : {} )}>
            <option value="">Select your community</option>
            {COMMUNITIES.map((community) => (
              <option key={community.value} value={community.value}>
                {community.name}
              </option>
            ))}
          </select>
          <label htmlFor="name">Your name</label>
          <input autoComplete="name" id="name" name="name" placeholder="e.g. Aarya Shah" required />
          <label htmlFor="bowl">Community</label>
          <select id="bowl" name="bowl" required>
            <option value="">Select a Bowl</option>
            {BOWLS.map((bowl) => (
              <option key={bowl.name} value={bowl.value}>
                {bowl.name } | ₹{bowl.price}
              </option>
            ))}
          </select>

          <div className="toggle-row">
            <div className="toggle-label-group">
              <label htmlFor="boiled-peanuts">Boiled Peanuts</label>
              <span className="toggle-status">{boiledPeanuts ? '✅ I want Boiled Peanuts' : '❌ Don’t send Boiled Peanuts'}</span>
            </div>
            <div className="toggle-control">
              <button
                aria-pressed={boiledPeanuts}
                className={`toggle-button ${boiledPeanuts ? 'is-on' : ''}`}
                id="boiled-peanuts"
                onClick={() => setBoiledPeanuts((prev) => !prev)}
                type="button"
              >
                <span className="toggle-thumb" />
              </button>
            </div>
          </div>
          <div className="toggle-row">
            <div className="toggle-label-group">
              <label htmlFor="chopped-onion">Chopped Onion</label>
              <span className="toggle-status">{choppedOnion ? '✅ I want Chopped Onion' : '❌ Don’t send Chopped Onion'}</span>
            </div>
            <div className="toggle-control">
              <button
                aria-pressed={choppedOnion}
                className={`toggle-button ${choppedOnion ? 'is-on' : ''}`}
                id="chopped-onion"
                onClick={() => setChoppedOnion((prev) => !prev)}
                type="button"
              >
                <span className="toggle-thumb" />
              </button>
            </div>
          </div>
          <div className="toggle-row">
            <div className="toggle-label-group">
              <label htmlFor="lemon-slices">Lemon Slices</label>
              <span className="toggle-status">{lemonSlices ? '✅ I want Lemon Slices' : '❌ Don’t send Lemon Slices'}</span>
            </div>
            <div className="toggle-control">
              <button
                aria-pressed={lemonSlices}
                className={`toggle-button ${lemonSlices ? 'is-on' : ''}`}
                id="lemon-slices"
                onClick={() => setLemonSlices((prev) => !prev)}
                type="button"
              >
                <span className="toggle-thumb" />
              </button>
            </div>
          </div>
          <div className="toggle-row">
            <div className="toggle-label-group">
              <label htmlFor="tangy-tomato-chutney">Tangy Tomato Chutney</label>
              <span className="toggle-status">{tangyTomatoChutney ? '✅ I want Tangy Tomato Chutney' : '❌ Don’t send Tangy Tomato Chutney'}</span>
            </div>
            <div className="toggle-control">
              <button
                aria-pressed={tangyTomatoChutney}
                className={`toggle-button ${tangyTomatoChutney ? 'is-on' : ''}`}
                id="tangy-tomato-chutney"
                onClick={() => setTangyTomatoChutney((prev) => !prev)}
                type="button"
              >
                <span className="toggle-thumb" />
              </button>
            </div>
          </div>
          <div className="toggle-row">
            <div className="toggle-label-group">
              <label htmlFor="cutlery">Cutlery (Tissue & Spoon)</label>
              <span className="toggle-status">{cutlery ? '✅ I want Cutlery' : '❌ Don’t send Cutlery'}</span>
            </div>
            <div className="toggle-control">
              <button
                aria-pressed={cutlery}
                className={`toggle-button ${cutlery ? 'is-on' : ''}`}
                id="cutlery"
                onClick={() => setCutlery((prev) => !prev)}
                type="button"
              >
                <span className="toggle-thumb" />
              </button>
            </div>
          </div>
          <button className="order-button order-button--dark form-submit" type="submit">
            Order <span aria-hidden="true">↗</span>
          </button>
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
      <section className="contact-content">
        <div className="contact-details">
          <div className="contact-detail">
            <span className="detail-number">01</span>
            <div><p className="eyebrow">FIND OUR NEIGHBOURHOOD</p><h2>Pashan, Pune</h2><p>Maharashtra, India</p><a className="inline-link" href="tel:+917028835294" rel="noreferrer" target="_blank">+91 70288 35294</a></div>
          </div>
          <div className="contact-detail">
            <span className="detail-number">02</span>
            <div><p className="eyebrow">GET BREAKFAST AT NEARBY CENTER</p><h2>Order tomorrow breakfast</h2><p>Tell us where you train and we’ll explore bringing bowls to your space.</p><Link className="inline-link" to="/order">Order at nearby center <span aria-hidden="true">↗</span></Link></div>
          </div>
          <div className="contact-detail">
            <span className="detail-number">03</span>
            <div><p className="eyebrow">HUNGRY RIGHT NOW?</p><h2>Order on Swiggy</h2><p>Search for protein bowls around Pashan.</p><a className="inline-link swiggy-link" href="https://www.swiggy.com/menu/1461049" rel="noreferrer" target="_blank">Find us on Swiggy <span aria-hidden="true">↗</span></a></div>
          </div>
        </div>
        <div className="map-wrap">
          <iframe
            title="Protein Per Gram"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.829857437662!2d73.78964097453076!3d18.53658928256006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfd2497a352d%3A0x942a8c143ae8d7e7!2sProtein%20Per%20Gram!5e0!3m2!1sen!2sin!4v1792491815214!5m2!1sen!2sin`}
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
        <Route element={<Order />} path="/order" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<NotFound />} path="*" />
      </Routes>
      <Footer />
    </>
  );
}
