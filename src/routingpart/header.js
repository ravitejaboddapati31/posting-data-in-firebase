import React from 'react';
import { Link } from 'react-router-dom';

const Routing = () => (

        <header>
          
    <nav className="navbar navbar-expand-lg navbar-primary bg-warning">
  <a className="navbar-brand" href="https://www.google.com/search?q=INDIAN+CRICKET&rlz=1C1GCEU_enIN998IN998&oq=INDIAN+CRICKET&aqs=chrome..0i131i355i433i512j69i57j0i433i512j0i512j0i433i512j46i433i512j0i131i433i512j0i433i512j0i512l2.6637j0j15&sourceid=chrome&ie=UTF-8#cobssid=s&sie=t;/m/024nj1;5;/m/021q23;mt;fp;1;;">Indian Cricket Team <i class="fa fa-flag"></i></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to ="/crickters"> India Probable(X11)</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to ="/schedule">Schedule matches</Link>
      </li>
    
      <li className="nav-item">
        <Link className="nav-link" to ="/footer">Footer</Link>
      </li>
    
      <li className="nav-item">
        <Link className="nav-link" to ="/footer">Footer</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to ="/footer">Footer</Link>
      </li>

    </ul>
    
  </div>
</nav>
  
    
        </header>
    

)

export default Routing;