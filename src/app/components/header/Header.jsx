import Cart from "@/app/utilities/Cart";
import "./header.css";
import Heart from "@/app/utilities/Heart";
import People from "@/app/utilities/People";
import Link from "next/link";
import Menu from "@/app/utilities/Menu";

export default function Header() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="header-main">
            <div className="header-logo">
              <h3>
                <b>Comforty</b>
              </h3>
            </div>
            <div className="header-right">
              <div className="header-buttons">
                <input type="text" placeholder="Search" />
                <button className="card-button">
                  <Cart /> Cart
                </button>
                <button className="heart-button">
                  {" "}
                  <Heart />{" "}
                </button>
                <button className="people-button">
                  <People />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Header */}

      <section>
          <div className="container-fluid">
            <div className="header-links">
              <div className="main-header-left">
                <div className="navigation-button">
                  <button> <Menu /> All Categories</button>
                  </div>
                  <div className="header-navigation">
                    <Link href="#home">Home</Link>
                    <Link href="#about">About</Link>
                    <Link href="#product">Product</Link>
                    <Link href="#shop">Shop</Link>
                    <Link href="#pages">Pages</Link>
                </div>
              </div>
              <div className="navigation-contact">
                <h3>Contact:(808) 555-0111</h3>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
