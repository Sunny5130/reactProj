import Child from "./ChildCall";
function Call() {
    function setAlart(name) {
        alert(name);
    }
    return (
        <>
            <h3>Hello parent function</h3>
            <Child setAlart={() => setAlart("name")} />
            <Child setAlart={() => setAlart("saini")} />
            <Child setAlart={() => setAlart("ji")} />
            <Child setAlart={() => setAlart("hai")} />
        </>
    );
}
export default Call;
