// import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useRef } from 'react';
import './home.css'
import image1 from './bar-tender-sprinkles-golden-glitter-into-cocktail-champagne-glass.jpg'
import image2 from './side-view-cinnamon-with-stewed-candle-dried-flowers.jpg'
import image3 from './sweet-ball-covered-with-red-powder-stands-circle-red-rose-petals.jpg'
import image4 from './still-life-cosmetic-products (1).jpg'
import image5 from './beautiful-roses-petals-arrangement.jpg'
import image6 from './india-women-with-perfume.jpg'
import image7 from './aromatic-saffron-still-life-arrangement.jpg'

const Home = () => {

  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const slides = carousel.querySelectorAll('.carousel__slide');
      const totalSlides = slides.length;
      const currentScroll = carousel.scrollLeft;
      const slideWidth = carousel.offsetWidth;
      const currentIndex = Math.round(currentScroll / slideWidth);

      const nextIndex = (currentIndex + 1) % totalSlides;
      carousel.scrollTo({
        left: nextIndex * slideWidth,
        behavior: 'smooth',
      });
    }, 5000); // change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Home">
      <div className='carousel-home-ss'>
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport" ref={carouselRef}>
          <li id="carousel__slide1" tabindex="0" className="carousel__slide">
            <img src={image1} alt="Slide 1" className="carousel-image" />
            <div className="carousel__snapper">
              <a href="#carousel__slide4" className="carousel__prev">
                Go to last slide
              </a>
              <a href="#carousel__slide2" className="carousel__next">
                Go to next slide
              </a>
            </div>
          </li>
          <li id="carousel__slide2" tabindex="0" className="carousel__slide">
          <img src={image2} alt="Slide 2" className="carousel-image" />
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide1" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide3" className="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide3" tabindex="0" className="carousel__slide">
          <img src={image3} alt="Slide 3" className="carousel-image" />
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide2" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide4" className="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide4" tabindex="0" className="carousel__slide">
          <img src={image4} alt="Slide 4" className="carousel-image" />
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide3" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide1" className="carousel__next">
              Go to first slide
            </a>
          </li>
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            <li className="carousel__navigation-item">
              <a href="#carousel__slide1" className="carousel__navigation-button">
                Go to slide 1
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a href="#carousel__slide2" className="carousel__navigation-button">
                Go to slide 2
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a href="#carousel__slide3" className="carousel__navigation-button">
                Go to slide 3
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a href="#carousel__slide4" className="carousel__navigation-button">
                Go to slide 4
              </a>
            </li>
          </ol>
        </aside>
      </section>
      </div>
      <div className='home-statistics'>
      <div className="stats-heading">
          <h1>Experts in Flavour Ingredients</h1>
        </div>
        
        <div className="stats-container">
          <div className="stat-item">
            <h2>25+</h2>
            <p>Aroma Chemicals</p>
          </div>
          
          <div className="stat-item">
            <h2>1500+</h2>
            <p>Flavours</p>
          </div>
          
          <div className="stat-item">
            <h2>500+</h2>
            <p>Fine Fragrance</p>
          </div>
          
          <div className="stat-item">
            <h2>150+</h2>
            <p>Natural Extracts</p>
          </div>
        </div>
        
        <div className="company-description">
          <p>
          Founded with a vision to redefine sensory experiences, <strong>Modern Fragrant Merchants (MFM)</strong> is an innovation-led fragrance and flavor house based in India. With a legacy rooted in craftsmanship and a forward-looking approach to formulation science, we serve global markets with bespoke aromatic solutions.
          <br />
          <br />
          Our portfolio spans luxurious perfumes, fine food flavors, and aroma ingredients crafted through sustainable sourcing and cutting-edge research. We collaborate with brands to co-create unique, emotionally resonant products that drive loyalty and delight consumers.
          <br />
          <br />
          We operate with core values of sustainability, transparency, and innovation. Every formulation reflects our commitment to ethical practices and environmental stewardship while delivering uncompromising quality.
          <br />
          <br />
          Whether you’re a beauty brand, food company, or an artisan entrepreneur, MFM is your partner in crafting unforgettable sensorial journeys.
          </p>
        </div>
      </div>
      <div className='product-categories-section'>
        <div className="category-row">
          <div className="category-item">
            <div className="category-content">
              <h2>Aroma Ingredients</h2>
              <p>
              We supply premium aroma chemicals and natural extracts to perfumers and flavorists. Our R&D-driven approach ensures consistency, safety, and excellence, making us a preferred partner across industries.
              </p>
            </div>
            <div className="category-image">
              <img src={image5} alt="Aroma Ingredients" />
            </div>
          </div>
        </div>
        
        <div className="category-row reverse">
          <div className="category-item">
            <div className="category-content">
              <h2>Luxurious Perfumes</h2>
              <p>
              Crafted with rare ingredients and timeless elegance, our perfumes deliver a rich olfactory experience. Each scent is designed to evoke emotion and leave a lasting impression — setting a new standard for Indian luxury fragrance.
              </p>
            </div>
            <div className="category-image">
              <img src={image6} alt="Luxurious Perfumes" />
            </div>
          </div>
        </div>
        
        <div className="category-row">
          <div className="category-item">
            <div className="category-content">
              <h2>Fine Food Flavors</h2>
              <p>
              From savory to sweet, our food flavors are formulated to bring gourmet quality to every bite. Trusted by top chefs and food brands, our flavors combine innovation with purity for unmatched taste.
              </p>
            </div>
            <div className="category-image">
              <img src={image7} alt="Fine Food Flavors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
