import React from "react";
import ReactDOM from "react-dom";
import PriceCart from "./components/PriceCart";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">

    <div className="row">
  <div className="col-lg-4">

    <PriceCart
      cl1="text-muted"
      plan="Free"
      price="$0"
      cl2="text-muted"
      cl3="text-muted"
      cl4="text-muted"
      users="Single User"
      storage="5GB"
      subdomain="Free Subdomain"
      check1="fas fa-times"
      check2="fas fa-times"
      check3="fas fa-times"
      check4="fas fa-times"
      />
      </div>
      <div className="col-lg-4">
    <PriceCart
      plan="Plus"
      price="$9"
      cl4="text-muted"
      users="5 Users"
      storage="50GB"
      subdomain="Free Subdomain"
      check1="fas fa-check"
      check2="fas fa-check"
      check3="fas fa-check"
      check4="fas fa-times"
      />
</div>
<div className="col-lg-4">

    <PriceCart
      plan="Pro"
      price="$49"
      users="Unlimited Users"
      storage="150GB"
      subdomain="Unlimited Free Subdomain"
      check1="fas fa-check"
      check2="fas fa-check"
      check3="fas fa-check"
      check4="fas fa-check"
      />
      </div>
      </div>
      </div>
  </React.StrictMode>,
  document.getElementById("root")
);
