import React, {Component} from 'react';
import './Image.css';

class Image extends Component {
    render() {
        return (
            <div className="gallery-img">
                <img className="one-img"
                     src={this.props.imgPath}
                     alt={this.props.imgName} width="500" height="500"/>
            </div>

        );
    }
}

export default Image;