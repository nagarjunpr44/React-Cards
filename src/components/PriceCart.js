import '../components/Pricecartstyle.css'
function PriceCart(props)
{
  return(
      <section className="pricing py-5">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">

            <h5 className="card-title text-muted text-uppercase text-center">{props.plan}</h5>
            <h6 className="card-price text-center">{props.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li ><span className="fa-li"><i className="fas fa-check"></i></span><strong>{props.users}</strong></li>
              <li ><span className="fa-li"><i className="fas fa-check"></i></span>{props.storage+ ' Storage'}</li>
              <li ><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li ><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li className={props.cl1}><span className="fa-li"><i className={props.check1}></i></span>Unlimited Private Projects</li>
              <li className={props.cl2}><span className="fa-li"><i className={props.check2}></i></span> Dedicated Phone Support</li>
              <li className={props.cl3}><span className="fa-li"><i className={props.check3}></i></span>{props.subdomain}</li>
              <li className={props.cl4}><span className="fa-li"><i className={props.check4}></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
         </div>
         </div>
     </section>
      
    )
}

export default PriceCart;