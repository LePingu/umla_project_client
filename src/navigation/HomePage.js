import React from 'react'
import Image from 'react-bootstrap/Image';
import BackImage from '../static/homepage_UMLA.jpg';


class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage">
                <Image src={BackImage} fluid />
            </div>
        )
      }
}

export default HomePage;
