import React from 'react';

class ChangeColorButton extends React.Component {

    render() {
        return (
            <button className="container" onClick={this.props.clickToChangeColor}>{this.props.buttonColor}</button>
        );
    }
}

export default ChangeColorButton;