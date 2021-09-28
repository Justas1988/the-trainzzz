 // import trains from "./data";
import "./trains.css"
  
import React from 'react';

import ChangeColorButton from './ChangeColorButton';

class App extends React.Component {

    constructor() {
        super();
        this.state = {bg: 'palegreen',
                      in: 'spalva', 
                      br: 'naujas skersmuo', 
                      plotis: 300,
                      aukstis: 300,
                      radius: '50%',
                        };
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

    inChange = (e) => {
        this.setState({
            in: e.target.value,
            bg: e.target.value,
        });
    }

    sizeChange = (e) => {
        this.setState({            
            plotis: parseInt(e.target.value),
            aukstis: parseInt(e.target.value),
        });
    }

    toSquare = (e) => {
        this.setState(state => {
            let newRadius;
               if (state.radius == '50%') {
                newRadius = 0;

            }  else if (state.radius == 0) {
                newRadius = '50%';
            }           
        
            return(                
                {radius: newRadius}                
            )   
            
        });
    }

    render() {
        return (
            <div className="circle" style={{backgroundColor: this.state.bg, width: this.state.plotis, height: this.state.aukstis, borderRadius: this.state.radius}}>
                <ChangeColorButton buttonColor={'red'} clickToChangeColor={this.changeColor('red')}></ChangeColorButton>
                <ChangeColorButton buttonColor={'green'} clickToChangeColor={this.changeColor('green')}></ChangeColorButton>
                <ChangeColorButton buttonColor={'orange'} clickToChangeColor={this.changeColor('orange')}></ChangeColorButton>
                <input type="text" value={this.state.in} onChange={this.inChange}/>                
                <input type="number" value={this.state.plotis} onChange={this.sizeChange}/>
                <input type="checkbox" onChange={this.toSquare} />


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