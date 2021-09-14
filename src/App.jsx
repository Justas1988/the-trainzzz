 // import trains from "./data";
import "./trains.css"
  
import React from 'react';

import ChangeColorButton from './ChangeColorButton';

class App extends React.Component {

    constructor() {
        super();
        this.state = {bg: 'palegreen'};
    }

    changeColor = (spalva) => e => {
     
        this.setState(state => {

            let color;
            // if (state.bg == 'palegreen') {
            //     color = spalva;
            // }
            // else if (state.bg == 'orangered') {
                color = spalva;
           // }

            return(
                {bg: color}
                )
            });

    }

    render() {
        return (
            <div className="circle" style={{backgroundColor: this.state.bg}}>
                <ChangeColorButton buttonColor={'red'} clickToChangeColor={this.changeColor('red')}></ChangeColorButton>
                <ChangeColorButton buttonColor={'green'} clickToChangeColor={this.changeColor('green')}></ChangeColorButton>
                <ChangeColorButton buttonColor={'orange'} clickToChangeColor={this.changeColor('orange')}></ChangeColorButton>
            </div>
        );
    }
}
    
export default App;






















// const TrainGenerator = trains.map((train, index) =>    
//         <div key={index}><img  src={train.img} alt={"traukinys"} className="TrainyMcTrain" />        
//         <div className="TrainyMcName">{train.desc}</div> </div>
//         );
        


// const App = () => {
//     console.log(typeof trains);
 
//     return TrainGenerator;
    
// }


// export default App;