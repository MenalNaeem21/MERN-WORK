 import Proptypes from'prop-types'
function List(props){
    const category=props.category
    const itemList=props.items

//const lowCalFruit=fruit.filter(fruit=>fruit.calorie<80); 
const listItems=itemList.map(item=> <li key={item.id}>
    {item.name}:&nbsp;
    <b>{item.calorie}</b></li>);
/*fruit.sort((a,b)=> a.name.localeCompare(b.name))*/
/*add key, unique prop 
const listItems=lowCalFruit.map(lowCalFruit=> <li key={lowCalFruit.id}>
    {lowCalFruit.name}:&nbsp;
   <b> {lowCalFruit.calorie}</b></li>);*/
return(<>
<h3 className="category"> {category}</h3>
<ul className="list-item">{listItems}</ul>
</>)
}
List.Proptypes={
    category: Proptypes.string,
    items:  Proptypes.arrayOf(Proptypes.shape({id:Proptypes.number,
        name:Proptypes.string,
        calorie: Proptypes.number})),
}
List.defaultProps={
    category:"category",
    items:[],

}

export default List