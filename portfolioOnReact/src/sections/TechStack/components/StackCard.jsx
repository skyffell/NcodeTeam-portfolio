import TechList from "./TechList"
const StackCard = () =>{
    return(<div class="stack-category">
                   
                   <TechList 
                   iconsClass ={['fab fa-html5','fab fa-css3-alt','fab fa-js-square']} 
                   titels = {['HTML5',"CSS3","JavaScript"]} 
                   progress ={[90,85,85]}
                   mainText = "Frontend" 
                   version = "frontendStack"
                   />
                
                     <TechList 
                     iconsClass ={['fab fa-python','fas fa-flask','fas fa-bolt']} 
                     titels = {['Python',"Flask","FastAPI"]} 
                     progress ={[90,87,89]}
                     mainText = "Backend" version = "backendStack"
                     />
                </div>)
}
export default StackCard