
import './servicePage.css';

import { Tabs,Tab,Container , Accordion, Card, Button} from 'react-bootstrap';
import  Galery from './galery'
import ControlledCarousel from './slider'
import Coustem from './coustem'
import sa1 from '../images/2.jpeg'
import sa2 from '../images/3.jpeg'
import sa3 from '../images/4.jpeg'

import sa5 from '../images/6.jpeg'
import sa6 from '../images/7.jpeg'

import sa9 from '../images/9.jpeg'
import sa10 from '../images/10.jpeg'
import sa7 from '../images/8.jpeg'


 

function ServicPage() {
  const babies = [

    {
        img: sa3,
        content: "have a nice outdoor graduation session with your family and dears ,in this offer you will have outdoor tow hours session with our greatest photographer omar khyami  wiht his Photography accessories ",
        cost:"50 JOD",
        location:"indoor"
          // id=1 
    },

    {
      img: sa5,
        content: "Accordions use Card components to provide styling of the Accordion components. Use AccordionToggle to provide a button that switches between each AccordionCollapse component.",
        // id=2 
      },
             
    {
      img: sa6,
        content: "Accordions use Card components to provide styling of the Accordion components. Use AccordionToggle to provide a button that switches between each AccordionCollapse component.",
        // id=3 
      
        
    },
    {
      img:sa7,
        content: "Accordions use Card components to provide styling of the Accordion components. Use AccordionToggle to provide a button that switches between each AccordionCollapse component.",
        // id=4 
           
    }
]
  const couples = [

    {
        img: sa2,
        content: "Accordions use Card components to provide styling of the Accordion components. Use AccordionToggle to provide a button that switches between each AccordionCollapse component.",
            
    },

    {
      img: sa1,
        content: "Accordions use Card components to provide styling of the Accordion components. Use AccordionToggle to provide a button that switches between each AccordionCollapse component.",},
             
    {
      img: sa9,
        content: "Accordions use Card components to provide styling of the Accordion components. Use AccordionToggle to provide a button that switches between each AccordionCollapse component.",
      
        
    },
    {
      img: sa10,
        content: "Accordions use Card components to provide styling of the Accordion components. Use AccordionToggle to provide a button that switches between each AccordionCollapse component.",
           
    }
]
  const graduation = [

    {
        img: "https://www.avnidaphotography.com/wp-content/uploads/2015/05/20-4896-post/6-month-old-baby-Jacob-shows-off-the-cutest-pout-we-have-seen(pp_w768_h512).jpg",
        content: "Accordions use Card components to provide styling of the Accordion components. Use AccordionToggle to provide a button that switches between each AccordionCollapse component.",
            
    },

    {
      img: "https://bambiniphoto.sg/wp-content/uploads/baby-photoshoot-7.jpg",
        content: "Accordions use Card components to provide styling of the Accordion components. Use AccordionToggle to provide a button that switches between each AccordionCollapse component.",},
             
    {
      img: "https://bambiniphoto.sg/wp-content/uploads/Sitter-Baby-Portrait.jpg",
        content: "Accordions use Card components to provide styling of the Accordion components. Use AccordionToggle to provide a button that switches between each AccordionCollapse component.",
      
        
    },
    {
      img: "https://i.pinimg.com/564x/69/c4/81/69c48166cae8cf633fe84558669d6cd1.jpg",
        content: "Accordions use Card components to provide styling of the Accordion components. Use AccordionToggle to provide a button that switches between each AccordionCollapse component.",
           
    }
]


const sessionData1=[
  {
    location:'outdoor',
    photography:'saja dahamsheh',
    sessionHoures:'one hour',
    theming:'whith them',
    price:'50 JOD',
    id:0


  },
  {
    location:'indoor',
    photography:'duha dahamsheh',
    sessionHoures:'tow hour',
    theming:'whithout them',
    price:'40 JOD',
    id:1


  },
  {
    location:'outdoor',
    photography:'saja dahamsheh',
    sessionHoures:'one hour',
    theming:'whith them',
    price:'50 JOD',
    id:2


  },
  {
    location:'outdoor',
    photography:'saja dahamsheh',
    sessionHoures:'one hour',
    theming:'whith them',
    price:'50 JOD',
    id:3


  },
  {
    location:'dana',
    photography:'dana',
    sessionHoures:'one hour',
    theming:'whith them',
    price:'50 JOD',
    id:4


  },
  {
    location:'dana',
    photography:'dana',
    sessionHoures:'one hour',
    theming:'whith them',
    price:'50 JOD',
    id:5


  },
]
const sessionData1Obj={sessionData1}

 const setData =(index)=>{
   localStorage.setItem('user',JSON.stringify(sessionData1Obj[index]))
   console.log(sessionData1Obj)
 }



  return (
    
    <div className="App">
      <ControlledCarousel />
       

       <Container fluid >

       <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle  className='Accordion-color' as={Button} variant="link" eventKey="0">
      Our spacial offers
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
     <Tabs className='servis-taps' fluid defaultActiveKey="profile" id="uncontrolled-tab-example">
       
  <Tab eventKey="home" title="Graduation">
    {
      babies.map((baby,index)=>
      
      
< Galery
img={baby.img} 
content={baby.content}
cost={baby.cost}
setData={setData[index]}

/>
      
      )

}
  </Tab>

  <Tab eventKey="profile" title="Couples">
  {
    couples.map((couples)=>
    
< Galery
img={couples.img} 
content={couples.content}
setData={setData} />
)
}
  </Tab>


  <Tab eventKey="contact" title="Babies" >
  {
    graduation.map(( graduation)=>
< Galery
img={ graduation.img} 
content={ graduation.content} />
)
}

  </Tab>

  
</Tabs></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle  className='Accordion-color' as={Button} variant="link" eventKey="1">
        Customize your session
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body><Coustem/></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
      
    

  

</Container>
 
 
    </div>
  );
}


export default ServicPage;
