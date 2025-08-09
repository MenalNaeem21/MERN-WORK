import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import card from './Card.jsx'
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import Greeting from "./Greeting.jsx";
import List from "./List.jsx";
import Name from "./Name.jsx";
import Animals from "./Animals.jsx";
import Numbers from "./Numbers.jsx";
import Profilepic from "./Profilepic.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
function App() {

  const fruit=[{id:1,name:"apple",calorie:82},
    {id:2,name:"pineapple",calorie:13},
    {id:3,name:"banana",calorie:50},
    {id:4,name:"cherry",calorie:40},
]
const vegs=[{id:5,name:"brocoli",calorie:82},
  {id:6,name:"onion",calorie:13},
  {id:7,name:"capsicum",calorie:50},
  {id:8,name:"carrot",calorie:40},
]
const AnimalList=[{id:1,name:'dog'}
  ,{id:2, name:'cat'}
  ,{id:3,name:'bear'},
  {id:4,name:'snake'}]


  return(
    <>
     
    {/* <Header></Header>
     <Food></Food>
     <Footer></Footer>
     <Card></Card>
     
     <Student name="menal" age={21} isStudent={true}/>
     <Student name="jack" age={21} isStudent={false}/>
     <Student/>
     
    
     
    
    <Name/>
  <h1 className="Animal-heading">Animal list</h1>
   <Animals list={AnimalList}/>
   <Numbers></Numbers>
   
{fruit.length>0 ? <List items={fruit} category="fruits"/> :null}
      {vegs.length>0? <List items={vegs} category="veggies"/>:null}


    
       <Greeting isLoggedIn={true} />
 <MyComponent/>
  <Profilepic/>
   <Button/>
   <Student name="menal" age={21} isStudent={true}/>
      <Counter/>
*/}
     
     

   
    <MyComponent></MyComponent>



     </>
   
  );


}

export default App
