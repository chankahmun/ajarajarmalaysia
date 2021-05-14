
import {useState} from 'react';
import '../App.css';
import Collapsible from 'react-collapsible';

const  _MISSION = "OUR MISSION";
const _CVALUE = "OUR CORE VALUE";
const _OBJECTIVE = "OUR OBJECTIVE"
const _MINUS ="fa fa-minus";
const _PLUS = "fa fa-plus"

export function CollapseComponent(){
    
    const [collapse, setCollaspse] = useState("")

    let mission_icon = _MINUS;
    let core_value_icon = _MINUS;
    let objective_icon = _MINUS;

    let onClick = (selection)=>{

        if(collapse === selection){selection = ""}
        setCollaspse(selection)
    }
    
    if(collapse === _MISSION){ mission_icon = _PLUS }
    if(collapse === _CVALUE){ core_value_icon = _PLUS }
    if(collapse === _OBJECTIVE){ objective_icon = _PLUS }



    return (
        <div> 
            <div class="collapse"  onClick={()=>onClick(_MISSION)}>
                <h2> <i class={mission_icon} aria-hidden="true"></i> {_MISSION}</h2>
                {
                    collapse === _MISSION &&
                    <div>
                        <p>To Raise Leader <span class="spanText">- To raise up young leaders with noble and selfness character</span></p>
                        <p>Quality Education <span class="spanText">– To inspire, educate and empower scholars from underprivileged communities.</span></p>
                        <p>Services for Society <span class="spanText">– To promote the spirit of volunteerism among youth to develop the community in a good way.</span></p>
                        <p>To strengthen family relationship <span class="spanText">– To strengthen family relationships as fundamental solution for social problems.</span></p>    
                    </div>

                }
                
                
            </div>
            <div class="collapse" onClick={()=>onClick(_CVALUE)}>
                <h2><i class={core_value_icon} aria-hidden="true"></i> {_CVALUE}</h2>
                {
                     collapse === _CVALUE &&
                     <div>
                        <p><i class="fa fa-check-circle-o" aria-hidden="true"></i> Integrity</p>
                        <p><i class="fa fa-check-circle-o" aria-hidden="true"></i> Joy</p>
                        <p><i class="fa fa-check-circle-o" aria-hidden="true"></i> Intention</p>
                        <p><i class="fa fa-check-circle-o" aria-hidden="true"></i> Teamwork</p>
                        <p><i class="fa fa-check-circle-o" aria-hidden="true"></i> Development</p>
                    </div>

                }
                
                
            </div>
            <div  class="collapse" onClick={()=>onClick(_OBJECTIVE)} >
                <h2><i class={objective_icon} aria-hidden="true"></i> {_OBJECTIVE}</h2>
                {
                    collapse === _OBJECTIVE &&
                    <div>
                        <h3>To Help Students with To Help Student with:</h3>
                        <p><i class="fa fa-circle" aria-hidden="true"></i> Poor academic performance</p>
                        <p><i class="fa fa-circle" aria-hidden="true"></i> Unaffordability to pay tuition fee</p>
                        <p><i class="fa fa-circle" aria-hidden="true"></i> Lack of guidance, hence interest in studies</p>
                    </div>
                }
                
                
            </div>

        </div>
        
      );

}



