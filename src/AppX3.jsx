import React from "react";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            masyvas: [],
            input: 3,            
            
            
        };
    }

    addThree = () => {
        const cow = {skaicius: this.state.input + 3};
        const cows = this.state.masyvas.slice();
        cows.push(cow);

        this.setState({
            masyvas: cows,
            input: this.state.input + 3
        })
        localStorage.setItem('masyvas', JSON.stringify(cows));
    }

 

    componentDidMount() {
        const cows = JSON.parse(localStorage.getItem('masyvas'));
        if (null === cows) {
            return;
        }
        this.setState({
            masyvas: cows,
            input: cows[cows.length -1].skaicius
        });

      
    }
   

render () {
    return (
        < >
            <div>
                <button className="inputbutonas" onClick={this.addThree}>X{this.state.input}</button>
            </div>
        </>
      
        );
    }
}  
        export default App;