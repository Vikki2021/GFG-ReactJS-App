
//method first
function List({item}) {
    return (
      <li>
        <div>{item.id}</div>
        <div>{item.firstName}</div>
        <div>{item.lastName}</div>
        <div>{item.year}</div>
      </li>
    );
}

//method 2nd
// function List(props) {
//   return (
//     <li>
//       <div>{props.item.id}</div>
//       <div>{props.item.firstName}</div>
//       <div>{props.item.lastName}</div>
//       <div>{props.item.year}</div>
//     </li>
//   );
// }


export default List;