// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer'
// import ShowList from './components/ShowList';
import Blogs from './components/blogs';

//Vanilla JS : Imperative approach
// const para = document.createElement('p');
// para.textContent = 'Intro to JS';
// document.getElementById('root').append(para);

//React: Declarative Approach
//Functional Components, looks like exactly JS function (JSX)

function App() {
  return (

    //JSX
    // <div>
    //   <h1>Introduction to React Js</h1>
    //   <h2>this is the body of appliction</h2>
    // </div>
    // <>
    //   <h1>Introduction to React Js</h1>
    //   <p>this is the body of appliction</p>
    // </>

    <>
      <Header/>
       <Blogs/>

       {/* <ShowList/> */}
      <Footer/>
    </>
  );
}

export default App;
