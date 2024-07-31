import React,{useEffect,useRef} from 'react';
import 'C:\\Users\\snaku\\OneDrive\\Desktop\\web_Resume\\resume\\src\\App.css'
import { image_show} from '../Image';
import { projects } from '../Projects';
import { certificate } from '../certificate';



function Main() {
  return (
    <>
    <Top/>
    <About/>
    <div id='myskill'>
        <div className='myskill-name'>
            <h1>My Skills</h1>
        </div>
        <div className='skills'>
            {image_show.map((v,i)=>{
                return(
                    <>       
                     <My_skills items={v}/>  
                    </>
                )
            })}
        </div>
    </div>

    <div style={{height:'600px',width:'1519px',backgroundColor:'#3b3b3b'}}>
        <div className='Projects-name'>
                <h1>My Projects</h1>
        </div>
        <div style={{display:'flex'}}>

        {projects.map((v,i)=>{
            return(
                <>       
                         <My_Projects prop={v}/>  
                        </>
                    )
                })}

            
        </div>
    </div>


    <div style={{height:'198px',width:'1520',textAlign:'center',backgroundColor:'#3b3b3b',paddingTop:'86px'}}>
      <h1 style={{color:'yellow',backgroundColor:'#3b3b3b',height:'107px',width:'1520px'}}>Certificate</h1>
    </div>
    <div style={{display:'flex',backgroundColor:'#3b3b3b',height:'400px',width:'1520px',justifyContent:'space-evenly'}}>
    {certificate.map((v,i)=>{
            return(
                <>       
                  <Certification prop={v}/>  
                </>
                    )
                })}
    </div>


    
    <Experience/>
    </>
  )
}

export default Main


function Top(){
    return(
<>
    <div className='Container'>
        <div className='container-left'>
            <h4>I'm<h1>Nakul Sharma</h1> python Developer & Web Developer</h4>
            <div className='buttonshow'>
                <button type="button" class="btn btn-outline-warning">Contact Me</button>
                <button type="button" class="btn btn-outline-warning">Download CV</button>
            </div>
        </div>
        <div className='container-Middle'>
        <img src={`${process.env.PUBLIC_URL}/Image/man.png`} class="d-block w-100" alt="..." className='nakul-image'/>
        </div>
        <div className='container-right'>
          <div style={{paddingLeft:'15px'}} >
              <div style={{height:'78px',width:'3px',backgroundColor:'white'}}>

              </div>
          </div>
          <img src={`${process.env.PUBLIC_URL}/Image/github1.png`} class="d-block w-100" alt="..." style={{height:'34px',width:'78px',cursor:'pointer'}}/>
          <img src={`${process.env.PUBLIC_URL}/Image/linkdin.png`} class="d-block w-100" alt="..." style={{height:'34px',width:'78px',cursor:'pointer'}}/>
           
            
        </div>
    </div>
    </>
    )
}



function About(){
    return(
        <>
        <div className='AboutSection'>

            <div className='About-heading'>
                <h1>About</h1>
            </div>
            <div className="About-para">
                <p>My name is Nakul Sharma, a dedicated student with a strong passion for coding, particularly in Python. Successfully earned an NPTEL
                    certificate in Python for Data Science and completed comprehensive Java training.
                    Committed to continuous learning and actively participating in extracurricular
                    activities to enhance technical skills.I can work as part of team or on my own. I can deliver result on time and with maximum efficiency.
                    </p>
            </div>
        </div>
        </>
    )
}



function My_skills({items}){
    return(
        <>
        <div class="card" id="card1">
            <div className="imagesfit">
                <img src={items.src} class="d-block w-100" alt="..." className='skill-image'/>
            </div>
            <div class="card-body" id='card-text'>
              <h5>{items.title}</h5>
            </div>
        </div>
           
        
        </>
    )
}


function My_Projects({ prop }) {
    const mainRef = useRef(null);
    const imageRef = useRef(null);
    const paraRef = useRef(null);
    const titleRef = useRef(null);
  
    useEffect(() => {
      const main = mainRef.current;
      const image = imageRef.current;
      const para = paraRef.current;
      const title = titleRef.current;
  
      const handleMouseOver = () => {
        para.style.visibility = 'visible';
        image.style.opacity = 0.3;
        image.style.cursor = 'pointer';
        title.style.visibility = 'visible';
      };
  
      const handleMouseOut = () => {
        para.style.visibility = 'hidden';
        title.style.visibility = 'hidden';
        image.style.opacity = 0.9;
       
      };
  
      if (main) {
        main.addEventListener('mouseover', handleMouseOver);
        main.addEventListener('mouseout', handleMouseOut);
  
        // Clean up the event listeners on component unmount
        return () => {
          main.removeEventListener('mouseover', handleMouseOver);
          main.removeEventListener('mouseout', handleMouseOut);
        };
      }
    }, []);
  
    return (
      <>
        <div className='card bg-dark text-white' id='projects-card'>
          <div style={{ height: '30px' }}>
            <img src={prop.src} className='card-img' alt='...' id='projects-image' ref={imageRef}/>
          </div>
          <div className='card-img-overlay overlay' ref={mainRef}>
            <h5 className='cardtitle' ref={titleRef}>{prop.title}</h5>
            <p id='cardtext' ref={paraRef}>
              {prop.description}
            </p>
          </div>
        </div>
        
      </>
    );
    
  }




function Certification({prop}){
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const descriptionRef = useRef(null)
  const displayimgRef = useRef(null)

  useEffect(()=>{
    const card = cardRef.current;
    const title = titleRef.current;
    const img = imgRef.current;
    const description = descriptionRef.current;
    const displayimg = displayimgRef.current;

    const handleMouseOver=()=>{
      title.style.display = 'none';
      description.style.display = 'none';
      img.style.display = 'none';
      displayimg.style.display = 'block';
      displayimg.style.cursor = 'pointer';
      

    }
    const handleMouseOut=()=>{
      title.style.display = 'block'; 
      description.style.display = 'block'; 
      img.style.display = 'block' ;
      displayimg.style.display = 'none'
      displayimg.style.cursor = 'none';
    }
    if(card){
      card.addEventListener('mouseover',handleMouseOver);
      card.addEventListener('mouseout',handleMouseOut);

      return()=>{
        card.removeEventListener('mouseover',handleMouseOver);
        card.removeEventListener('mouseout',handleMouseOut);
      }
    }

  })

  return(
    <>
    <div class="card" style={{"width": "400px",backgroundColor:'#585555'}} ref={cardRef}>
      <img src={prop.src} class="card-img-top" i alt="..." style={{height:'276px'}} ref={imgRef}/>
      <div class="card-body" style={{textAlign:"center"}}>
        <h1 style={{color:'white'}} ref={titleRef}>{prop.title}</h1>
        <p class="card-text" style={{color:'white'}} ref={descriptionRef}>{prop.description}</p>
        <img src={prop.display} class="card-img-top" i alt="..." style={{display:'none',height:'380px'}} ref={displayimgRef}/>
      </div>
    </div>
    </>
  )
}

function Experience(){
  return(
    <>
    <div id="capture-all" style={{width:'1520px',height:'600px'}}>
      <div id="title-Experience" style={{color:'yellow',paddingTop:'117px', backgroundColor:'#3b3b3b',height:'141px'}}>
        <h1>Experience</h1>
      </div>
      <div id="title-box" style={{backgroundColor:'#888585',width:'1520px',height:'282px'}}>
          <div id="addmargin" style={{display:'flex',paddingTop:'113px',margin:'1400px',maxWidth:'1185px',width:'1520px',margin:'auto',height:'500px'}}>
              <div id="left-box" style={{width:'33px',height:'200px'}}>
                  <div style={{paddingTop:'15px'}}>
                    <div style={{width:'12px',height:'13px',borderRadius:'40px',backgroundColor:'yellow',boxShadow:'0px 0px 18px yellow'}}>

                    </div>
                  </div>
                  <div style={{paddingLeft:'4px',paddingTop:'10px'}}>
                    <div style={{height:'119px',width:'4px',backgroundColor:'white'}}>

                    </div>
                  </div>
              </div>
              <div id="right-box" style={{width:'1000px',heigt:'600px',color:'white'}}>
                  <h1>Programmer</h1>
                  <h5>PROMINENT COMTECH PVT LTD</h5>
                  <p>Programming  of Two Stage Reduction Gear Shifter System For ATV</p>
              </div>
          </div>
      </div>
    </div>

    </>
  )
}