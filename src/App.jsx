// import Home,{Profile,Address} from './User.jsx'
function Sum(){
  const a="Sunny saini";
  let x=23;

  let obj={
    id:"saini",
    name:"Sunny"
  };

function print(){
  return "I am a function";
}

function sum(a,b){
  return a+b;
}

let arr=[1,3,5,7];

function oper(p,q,op){
  if(op=="+"){
    return p+q;
  }else if(op=="*"){
    return p*q;
  }else{
    return "Not a valid operator";
  }
}
let path="https://imgs.search.brave.com/UY0p_nt1Qf6swvXysDxx89VmYOazjuPGbBF7JLy0F-k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmQu/c3NiY2RuLmNvbS9z/c2J3ZWIvbWVkaWEv/aW1hZ2VzLzElMjAt/JTIwcGVyc29uYWwv/YmFuay9kaWdpdGFs/JTIwYmFua2luZy9t/b2JpbGUlMjBiYW5r/aW5nL29ubGluZS1i/YW5raW5nLTIyLTg0/MHgxMTAwLmpwZz9l/eHQ9LmpwZw"
  return<>

  <h1>{a}</h1>
  <h1>{x}</h1>
  {/* <h1>{obj}</h1> */}
  <h1>{print()}</h1>
  <h1>{sum(2,4)}</h1>
  <h1>{arr[3]}</h1>
<h1>{oper(5,7,"")}</h1>
<h1>{obj.id}</h1>
  <img src={path}/>
  <br /> <br /><br />
  </>
}
export default Sum;

