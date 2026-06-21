import React from 'react'
import Carousel from 'better-react-carousel'

const Supporters = () => {
  return (
   <>
    <div className='content' style={{paddingLeft:'50px', paddingRight:'50px', fontFamily:'initial'}}> <h1> SOME OF OUR MAIN SUPPORTERS </h1>
    <p>Support play a big role in the community, This includes providing resources, counseling, and assistance to help, during our mission<br /> we have earn our community trust so we have those who they are always there fore this community</p>
  </div>
  
     <Carousel autoPlay cols={5} rows={1} gap={20} loop>

      <Carousel.Item>
      <a href="../../../images/collection/IMG-20200223-WA0010.jpg" target="_blank" rel="noopener noreferrer">
        <img width="100%" src={`${process.env.PUBLIC_URL}/images/collection/IMG-20200223-WA0010.jpg`} />
        <h5> Dr. Mohamed Ibraheem</h5>
        <p> SDV NRW President</p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="../../../images/collection/IMG-20200223-WA0012.jpg" target="_blank" rel="noopener noreferrer">
        <img width="100%" src={`${process.env.PUBLIC_URL}/images/collection/IMG-20200223-WA0012.jpg`} />
        <h5> Dr.Jad</h5>
        <p> SDV NRW Late President</p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="../../../images/collection/IMG-20200222-WA0098.jpg" target="_blank" rel="noopener noreferrer">
        <img width="100%" src={`${process.env.PUBLIC_URL}/images/collection/IMG-20200222-WA0098.jpg`} />
        <h5> Ibraheem Talab</h5>
        <p> Events Organizer</p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="../../../images/collection/IMG-20200302-WA0174.jpg" target="_blank" rel="noopener noreferrer">
        <img width="100%" src={`${process.env.PUBLIC_URL}/images/collection/IMG-20200302-WA0174.jpg`} />
        <h5> Sana Khalid</h5>
        <p> Tram Leader-Events Organizer</p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="../../../images/collection/IMG-20200117-WA0145.jpg" target="_blank" rel="noopener noreferrer">
        <img width="100%" src={`${process.env.PUBLIC_URL}/images/collection/IMG-20200117-WA0145.jpg`} />
        <h5> Mohamed  Lamatna</h5>
        <p> Events Organizer</p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="../../../images/collection/IMG-20200302-WA0291.jpg" target="_blank" rel="noopener noreferrer">
        <img width="100%" src={`${process.env.PUBLIC_URL}/images/collection/IMG-20200302-WA0291.jpg`} />
        <h5> kushi</h5>
        <p> Events Organizer</p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="../../../images/collection/IMG-20200224-WA0156.jpg" target="_blank" rel="noopener noreferrer">
        <img width="100%" src={`${process.env.PUBLIC_URL}/images/collection/IMG-20200224-WA0156.jpg`} />
        <h5> Azza Sati</h5>
        <p> Events Organizer</p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="../../../images/collection/IMG-20200224-WA0047.jpg" target="_blank" rel="noopener noreferrer">
        <img width="100%" src={`${process.env.PUBLIC_URL}/images/collection/IMG-20200224-WA0047.jpg`} />
        <h5> Hassan Sati</h5>
        <p> Events Organizer</p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="../../../images/collection/SnaaHausband.jpg" target="_blank" rel="noopener noreferrer">
        <img width="100%" src={`${process.env.PUBLIC_URL}/images/collection/SnaaHausband.jpg`} />
        <h5> Khalid Hassan</h5>
        <p> Events Organizer</p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="../../../images/collection/Sohaib.jpg" target="_blank" rel="noopener noreferrer">
        <img width="100%" src={`${process.env.PUBLIC_URL}/images/collection/Sohaib.jpg`} />
        <h5> Sohaib Aljemabi</h5>
        <p> Events Organizer</p>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
    </>
  )
}
export default Supporters;