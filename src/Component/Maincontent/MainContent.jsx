import { ExpLogo } from './ExpLogo';
import { Experience } from './Experience';
import './MainContent.css';
import { DataExperience } from '../Data-Component/DataExperience';


export function MainContent(){
    return(
        <div>
        <ExpLogo />
        <h1 className="title-exp">Experience & Certifications</h1>
        <Experience {...DataExperience[0]}/>
        <Experience {...DataExperience[1]}/>
        </div>
    );
}