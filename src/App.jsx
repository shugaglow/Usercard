import Usercard from './Usercard.jsx';
import User1 from './assets/Images/User1.jpg';
import User2 from './assets/Images/User2.png';
import User3 from './assets/Images/User3.png';
function App() {

  return (

    <>
      <div>
        <Usercard
        image={User1}
        name="Joy Kelly"
        age={25} 
        occupation="Product Designer" 
        description={"Joy is a creative product designer with expertise in building user-centric web and mobile applications. She specializes in UX/UI design, wireframing, prototyping, and is experienced in using design tools such as Figma, Sketch, and Adobe XD to craft elegant, functional user interfaces."}
        email={"joykelly@gmail.com"}/>

<Usercard
        image={User2}
        name="Charity Davis"
        age={30} 
        occupation="Software Engineer" 
        description={"Charity is a full-stack software engineer with a focus on developing scalable web applications. She has extensive experience in React, Node.js, and Python. Her role involves designing efficient architectures, writing clean code, and integrating APIs, ensuring applications are both high-performing and user-friendly."}
        email={"charitydavis@gmail.com"}/>

<Usercard
        image={User3}
        name="Austine Rowland"
        age={28} 
        occupation="UIUX Designer" 
        description={" Austine is a UI/UX designer with a passion for creating seamless user experiences. He collaborates with developers to design intuitive interfaces for web and mobile platforms. Austine excels in user research, wireframing, and usability testing, ensuring that design solutions meet both user needs and business goals."}
        email={"austinerowland@gmail.com"}/>
    </div>
    </>
  )
}

export default App
