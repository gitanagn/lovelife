import React, {Component} from 'react';
import Image from "./Image";
import imagesData from "../../data/images";
import './Gallery.css';

class Gallery extends Component {

    state = {
        images: imagesData.slice(0, 15),
        loadedCounter: 15
    }

    renderImages(images) {
        return images.map((image) => {
            return (
                <Image imgPath={image.imgPath} imgName={image.imgName}/>
            );
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        const currentCounter = this.state.loadedCounter;
        const newCounter = currentCounter + 15;
        this.setState({
            images: imagesData.slice(0, newCounter),
            loadedCounter: newCounter
        })
    }

    render() {
        const {images} = this.state;
        return (
            <div className="gallery">
                {/*<Image imgPath="images/gyvenimas-grazus.jpg" imgName="It always seems impossible until it\'s done"/>*/}
                {this.renderImages(images)}
                <div className="button-center">
                    {this.state.loadedCounter < imagesData.length && <button className="load-more" onClick={this.handleClick}>Rodyti daugiau...</button>}
                </div>
            </div>
        );
    }
}

export default Gallery;