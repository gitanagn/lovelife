import React, {Component} from 'react';
import Blockquote from "./About/Blockquote";
import Description from "./About/Description";
// import Targets from "./About/Targets";
// import FormWriteUs from "../forms/FormWriteUs"

class About extends Component {
    render() {
        return (
            <div className="About">

                <Blockquote/>
                <Description/>
                {/*<Targets/>*/}
                {/*<FormWriteUs/>*/}

            </div>
        );
    }
}

export default About;