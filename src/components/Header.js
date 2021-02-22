import "./Header.css";
export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-lite bg-primary flex">
        <div className="rendi">
          <div className="w-100"></div>
          <div className="carticon">
            Navbar
            <div className=" rendich">
              {props.cartItem.length}
              <i className="fab fa-opencart ms-auto me-4" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
