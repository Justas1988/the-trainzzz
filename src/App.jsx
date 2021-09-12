import trains from "./data";
import "./trains.css"


const TrainGenerator = trains.map((train) =>    
        <div><img key={train} src={train.img} alt={"traukinys"} className="TrainyMcTrain" />        
        <div className="TrainyMcName">{train.desc}</div> </div>
        );
        


const App = () => {
    console.log(typeof trains);
 
    return TrainGenerator;
    
}


export default App;