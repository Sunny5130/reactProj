    // const fruit=(name)=>{      // js function ko bahar bhe rakh sakhte hai component ke
    //     alert(name);
    // }

function Operation(){
    function saini(){
        alert("I am pop up");
    }
    const fruit=(name)=>{
        alert(name);
    }

    return(
        <>

        <button onClick={saini}>Click me</button> {/*dont use brackets after functions*/}
        <button onClick={()=>fruit("apple")}>fruits</button>
        </>
    )
}
export default Operation;