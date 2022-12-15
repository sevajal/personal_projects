import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import testimonialpic1 from './images/pic-person-01.jpg';
import testimonialpic2 from './images/pic-person-02.jpg';
import testimonialpic3 from './images/pic-person-03.jpg';
import logo from './images/logo.png';
import entrepreneur from './images/Entrepreneur.png'
import trade from './images/trade.png'
import luz from './images/luz.png'
import bank from './images/bank.png'
import work from './images/work.jpg'
import money from './images/money.png'
import strategy from './images/strategy.png'


const myFirstElement = (
    <body>
      <header class="header" data-section-theme="dark">
        <div class="container main-container">
          <div class="main-container-left">
            <div class="item-container">
              <a href='#'>+1 212 946 2700</a>
            </div>
            <div class="item-container">
              <a href='#'>Help Desk</a>
            </div>
            <div class="item-container">
              <a href='#'>Why sway</a>
            </div>
          </div> 
          <div class="col-1-2 main-container-right">
            <ul class="social nav">
              <li class="social-item nav-item item-container-social">
                <a href="https://es-la.facebook.com/libelacademy/" class="social-link">
                  <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                    <title>
                      Facebook icon
                    </title>
                    <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>
                  </svg>
                </a>
              </li>
              <li class="social-item nav-item item-container-social">
                <a href="https://twitter.com/studioslibel" class="social-link">
                  <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                    <title>
                      Twitter icon
                    </title>
                    <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>
                  </svg>
                </a>
              </li>
              <li class="social-item nav-item item-container-social">
                <a href="https://www.instagram.com/libelacademy/" class="social-link">
                  <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                    <title>
                      Instagram icon
                    </title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="container">
          <div class="header-logo">
            <a href="#">
              <img src={logo} alt="libel logo" width="160" height="40"></img>
            </a>
          </div>
          <nav class="navbar-menu">
            <ul class="nav">
              <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link">About</a>
              </li>
              <li class="nav-item">
                <a href="#services" class="nav-link">Services</a>
              </li>
              <li class="nav-item">
                <a href="#pricing" class="nav-link">Pricing</a>
              </li>
              <li class="nav-item">
                <a href="#products" class="nav-link">Products</a>
              </li>
              <li class="nav-item">
                <a href="#latest_news" class="nav-link">News</a>
              </li>
              <li class="nav-item">
                <form action="#" method="post" class="form-search">
                  <input type="search" name="q" id="search-input" placeholder="Search..." aria-label="Search through site content"></input>
                  <button class="search-button">
                    <svg viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="search-icon">
                      <title>
                        Search icon
                      </title>
                      <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"/>
                    </svg>
                  </button>
                </form>
              </li>
              <li class="nav-item">
                <button class="libel-button"><a href="#contact">Contact us</a></button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <h1 class="visually-hidden">Homepage</h1>
        <section class="section-hero" data-section-theme="dark">
          <div class="container">
            <div class="section-body">
              <section class="section-inner">
                <h2 class="section-title">Empowering Startups</h2>
                <p>Providing our clients with the strategic guidance to make the right technology and business decisions. We will help you develop the best operational processes for your startup.</p>
              </section>
            </div>
          </div>
        </section>
        <section id="services" class="section">
          <div class="container">
            <header class="section-header">
              <p class="section-tagline">WE HELP INNOVATIVE STARTUPS TO FIND AND FIX WEAK POINTS AND LAUNCH THE PRODUCT</p>
              <h2 class="section-title">Spacial outstanding services for startups</h2>
            </header>
            <div class="section-body">
              <ul class="row">
                <li class="col-1-4">
                  <div class="card-services">
                    <a href="#">
                      <img src={entrepreneur} alt="entreprenour" width="40" height="40"></img>
                      <h3 class="card-title">Entrepreneurs</h3>
                      <p class="card-description">We work with ecosystem leaders, corporations and startups worldwide</p>
                    </a>
                  </div>
                </li>
                <li class="col-1-4">
                  <div class="card-services">
                    <a href="#">
                      <img src={trade} alt="trade" width="40" height="40"></img>
                      <h3 class="card-title">Capital Markets</h3>
                      <p class="card-description">We work with ecosystem leaders, corporations and startups worldwide</p>
                    </a>
                  </div>
                </li>
                <li class="col-1-4">
                  <div class="card-services">
                    <a href="#">
                      <img src={bank} alt="entreprenour" width="40" height="40"></img>
                      <h3 class="card-title">Business Plan</h3>
                      <p class="card-description">We work with ecosystem leaders, corporations and startups worldwide</p>
                    </a>
                  </div>
                </li>
                <li class="col-1-4">
                  <div class="card-services">
                    <a href="#">
                      <img src={luz} alt="entreprenour" width="40" height="40"></img>
                      <h3 class="card-title">Startups</h3>
                      <p class="card-description">We work with ecosystem leaders, corporations and startups worldwide</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="about" class="section">
          <div class="container">
            <header class="section-header">
              <h2 class="section-title">All startups need to make their business work</h2>
              <p class="section-tagline">We work with a huge pool of investors, venture capital firms and business angels</p>
            </header>
            <div class="section-body">
              <div class="row">
                <div class="col-1-2">
                  <img src={work} alt="work" width="460" height="460"></img>
                </div>
                <div class="col-1-2">
                  <h3>Design business model and write a business plan</h3>
                  <p>We designed special services for startups, focused on the most important issues to be solved:</p>
                  <div class="col-1-1">
                    <img src={money} alt="money" width="40" height="40"></img>
                  </div>
                  <div class="col-1-2">
                    <h3>Find an investor</h3>
                    <p>Access to financial resources is essentially important for many startups</p>
                  </div>
                </div>
                <div class="col-1-2">
                  <div class="col-1-1">
                    <img src={strategy} alt="strategy" width="40" height="40"></img>
                  </div>
                  <div class="col-1-2">
                    <h3>Build a strategy</h3>
                    <p>Access to financial resources is essentially important for many startups</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" class="section">
          <div class="container">
            <header class="section-header">
              <h2 class="section-title">We are people with passion and experience</h2>
              <p class="section-tagline">Our staff and fellows come from many different backgrounds, disciplines and countries</p>
            </header>
            <div class="section-body">
              <ul class="row">
                <li class="col-1-3">
                  <article class="card-testimonial">
                    <img src={testimonialpic2} alt="Thomas avatar" width="100" height="100" class="card-avatar"></img>
                    <h2>Thomas Smith</h2>
                    <p class="section-tagline">CEO & Co-Founder</p>
                    <p>Creative directors are the creative leads at advertising agencies or in-house for the marketing department of a company</p>
                  </article>
                </li>
                <li class="col-1-3">
                  <article class="card-testimonial">
                    <img src={testimonialpic1} alt="Eloise avatar" width="100" height="100" class="card-avatar"></img>
                    <h2>Eloise Smith</h2>
                    <p class="section-tagline">Financial Director</p>
                    <p>Creative directors are the creative leads at advertising agencies or in-house for the marketing department of a company</p>
                  </article>
                </li>
                <li class="col-1-3">
                  <article class="card-testimonial">
                    <img src={testimonialpic3} alt="Vincent avatar" width="100" height="100" class="card-avatar"></img>
                    <h2>Vincent Smith</h2>
                    <p class="section-tagline">Creative Director</p>
                    <p>Creative directors are the creative leads at advertising agencies or in-house for the marketing department of a company</p>
                  </article>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="contact" class="section">
          <div class="container">
            <header class="section-header">
              <h2 class="section-title">Contact</h2>
              <p class="section-tagline">We'd love to hear from you!</p>
            </header>
            <div class="section-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?</p>
            </div>
            <div class="section-footer">
              <a href="#" class="button">Get in touch</a>
            </div>
          </div>
        </section>
              </main>
      <footer class="footer" data-section-theme="dark">
        <div  class="container">
          <div class="row">
            <div class="col-1-2">
              <img src={logo} alt="Libel logo" width="160" height="40"></img>
              <address class="footer-address">
                Colombia
              </address>
            </div>
            
          </div>
          <div class="row">
            <div class="col-1-2">
              <p class="footer-copyright">© 2020 Libel Academy, made with ♥ by Sebastian Carvajal.</p>
            </div>
          </div>
        </div>
      </footer>
    </body>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
