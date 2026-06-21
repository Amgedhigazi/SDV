
// components/common/footer.js
import React from 'react';

import { BackTop } from 'antd';
import logo1 from '../../assets/images/Logo3.png';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo1">
          

       
       <img alt="logo1" src={logo1} />
      <br/>
      <br/>
      <br/>

        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/sdvnrw/"><i className="fab fa-instagram"></i></a></li>
        </ul>

        <div className="copyright">Copyright &copy; 2024 Sudanesisch-Dt. Verein e.V.</div>
        <div><br/>
        Telefon: +49 176 61048483
| Web: www.sudandeutschverein.de
| E-Mail: de.sd.verein@gmail.com<br/>
C/O: Marienstr. 92
|  45307 Essen. <br/>
 Bankverbindung:
Sudanesisch-Dt. Verein e.V. | 
Commerzbank 
IBAN: DE61300400000826440000 <br/>
Vereinsregister: 
10665 | 
Geschäftsführer: 
Mohamed</div>
<br/>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;




