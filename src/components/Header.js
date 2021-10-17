import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
export class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar  navbar-dark bg-dark ">
            <ul className="nav" data-testid="head">
              <li className="nav-item">
                <Link to="/" data-testid="Products" className="nav-link active">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link data-testid="Carts" to="/carts" className="nav-link">
                  Carts :{" "}
                  <span data-testid="cartValue">{this.props.numberCart}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart
  };
};
export default connect(mapStateToProps, null)(Header);
