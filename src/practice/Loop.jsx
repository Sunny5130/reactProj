function Loop(){
    const arr=["sunny",20,"NArnaul"];
    const arr1={
        name:"saini",
        age:20,
        address:"sekhpura"
    };
    return(
    <>
    
    <h2>Array Items:</h2>
    {arr.map((names,index)=>{
        return <h3 key={index}>{names}</h3>
    })}
    <hr />
    <h2>Array object items</h2>
    {Object.entries(arr1).map(([key, value], index) => (
        <h3 key={index}>
          {key}: {value}
        </h3>
      ))}
    </>
    )
}
export default Loop;