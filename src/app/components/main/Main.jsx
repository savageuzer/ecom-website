import banner from '../../../../public/assets/banner.png'
import './main.css'

export default function Main() {
  return (
    <>
      <section>
        <div className="container">
          <div className="main">
            <div className="main-heading">
              <h3>WELCOME TO CHAIRY</h3>
              <h2>Best Furniture Collection For Your Interior</h2>
              <button>Shop Now →</button>
            </div>
            <div className="main-image">
                <img src={banner.src} alt="banner" />
            </div>
          </div>
        </div>
      </section>




      

    </>
  );
}

