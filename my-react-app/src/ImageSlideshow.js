import React from 'react';
import yobaEnjoy from './yobaEnjoy.jpg';
import yobaGreen from './yobaGreen.jpg';
import yobaSun from './yobaSun.png';
import './ImageSlideshow.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class ImageSlideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
        };
        this.images = [yobaEnjoy, yobaGreen, yobaSun]; // Add more images to the array
    }

    componentDidMount() {
        this.interval = setInterval(this.nextImage, 4550); // Change image every 4.55 seconds
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    nextImage = () => {
        this.setState(prevState => ({
            currentImageIndex: (prevState.currentImageIndex + 1) % this.images.length,
        }));
    };

    render() {
        return (
            <div className="image-slideshow">
                <TransitionGroup>
                    <CSSTransition
                        key={this.state.currentImageIndex}
                        timeout={1000}
                        classNames="slide"
                    >
                        <img
                            src={this.images[this.state.currentImageIndex]}
                            alt="Slideshow"
                            className="image-slideshow-img"
                            width={500}
                            height={500}
                        />
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default ImageSlideshow;