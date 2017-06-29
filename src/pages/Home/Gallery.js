import React, {Component} from 'react';
import Image from "./Image";
import imagesData from "../../data/images";
import './Gallery.css';

class Gallery extends Component {


    renderImages() {
        return imagesData.map((image) => {
            return (
                <Image imgPath={image.imgPath} imgName={image.imgName}/>
            );
        })
    }

    render() {
        return (
            <div className="gallery">
                {/*<Image imgPath="images/gyvenimas-grazus.jpg" imgName="It always seems impossible until it\'s done"/>*/}
                {this.renderImages()}
            </div>
        );
    }
}

export default Gallery;