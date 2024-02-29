import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()
  const handleNavigate = () => {
    //navigate to home page
    navigate('/home')
  }
  return (
    <>
      <div className='container mt-5'>
        <div className="header row align-items-center">
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sint sit ipsum dolorum est aperiam officiis incidunt aliquam labore mollitia, maiores culpa enim minima recusandae voluptate inventore. Incidunt, similique asperiores.</p>
            <button onClick={handleNavigate} className='btn btn-info'>Get Started</button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" />
          </div>
        </div>
        <div className="features">
          <h3 className="text-center">Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
              <Card >
                <Card.Img variant="top" src="https://cdn.dribbble.com/users/1445486/screenshots/3856847/ondas-small.gif" />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content. 
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4"><Card >
              <Card.Img variant="top" src="https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif" />
              <Card.Body>
                <Card.Title>Categorize Video</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card></div>
            <div className="col-lg-4"><Card >
              <Card.Img variant="top" src="https://cdn.dribbble.com/users/497438/screenshots/2084032/xtyf_1.gif" />
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card></div>
          </div>
        </div>
        <div className="video row border p-5 mt-5 rounded mb-5 align-items-center">
       
        <div className="col-lg-5">
          <h3 className="text-warning">Simple,Fast,& Powerfull</h3>
          <p style={{textAlign:'justify'}}><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi enim ullam ipsum perferendis consectetur laboriosam dignissimos distinctio accusamus assumenda hic tempora repudiandae consequatur quo quas, architecto fuga placeat ducimus? Molestias?</p>
          <p style={{textAlign:'justify'}}><span className='fs-4'>Categorize Videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi enim ullam ipsum perferendis consectetur laboriosam dignissimos distinctio accusamus assumenda hic tempora repudiandae consequatur quo quas, architecto fuga placeat ducimus? Molestias?</p>
          <p style={{textAlign:'justify'}}><span className='fs-4'>Watch History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi enim ullam ipsum perferendis consectetur laboriosam dignissimos distinctio accusamus assumenda hic tempora repudiandae consequatur quo quas, architecto fuga placeat ducimus? Molestias?</p>

        </div>
<div className="col"></div>
        <div className="col-lg-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3P-t4WRoW5c?si=wCld-rc9FVDIRiSh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
       
      </div>
      <hr />
    </>
  )
}

export default Landing