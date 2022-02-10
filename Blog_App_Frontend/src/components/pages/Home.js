import React from 'react'
import {Carousel} from 'react-bootstrap';

const Home = () => {
  return (
    <>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/anatomy-of-a-blog-post-deconstructed-open-graph.jpg"
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
      
    </>
  )
}

export default Home
