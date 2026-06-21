import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'The SDV NRW e.V. significant impact on Sudanese lives`s in Germany',
    content: 'The SDV NRW e.V. is making a significant impact on the lives of Sudanese immigrants and refugees in NRW by providing essential services, facilitating integration, supporting employment, enhancing social connections, addressing health needs, empowering women and children, and advocating for their rights. Through these comprehensive efforts, the SDV NRW e.V. can help create a welcoming and supportive environment that fosters successful integration and long-term stability for newcomers.',
  },
  {
    key: '2',
    title: 'Our Support is Granted',
    content: "Urgent support from SDV NRW e.V. to its members whenever needed is essential for managing crises, building trust, ensuring mental and emotional well-being, encouraging engagement, empowering individuals, and promoting long-term stability. This responsiveness creates a strong, supportive community where members feel safe, valued, and connected.",
  },
  {
    key: '3',
    title: 'With SDV NRW e.V.  Family Comes First',
    content: 'The SDV NRW e.V. can provide comprehensive support to Sudanese families in NRW, Germany, by addressing their legal, educational, employment, health, social, and advocacy needs. By offering these services, SDV can help Sudanese families build a stable, integrated, and fulfilling life in their new community.',
  },
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content" style={{transform: 'rotateX(0deg) rotateY(25deg)',
transformStyle: 'preserve-3d'}} >
                <h3>{item.title}</h3>
                <p>{item.content}</p>

              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;