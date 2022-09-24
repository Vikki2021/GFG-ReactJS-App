import List from "./List";

// let myArray = ["one", "two", "three", "four"];

let myObjectList = [
  {
    id: "1234",
    firstName: "Vikas",
    lastName: "Kumar",
    year: 2000
  },
  {
    id: "12345",
    firstName: "Vikas",
    lastName: "Kumar",
    year: 2000
  },
  {
    id: "123456",
    firstName: "Vikas",
    lastName: "Kumar",
    year: 2000
  },
];

function ShowList() {
  return (
    <ul>
      {
        // myArray.map(function (item) {
        //   return <li key={item}> {item} </li>;
        // })

        // myArray.map( item => <li key={item}> {item} </li> )  //same as above function

        // Whatever we passed here get attached to "props" object
        // Components can refer(call) to other Component

        myObjectList.map((itemValue) => (
          <List key={itemValue.id} item={itemValue} />
        ))
      }
    </ul>
  );
}

export default ShowList;
