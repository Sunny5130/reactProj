// import { useRef, useState } from "react";
// function Useref() {
//     const input = useRef(null);
//     const button = useRef(null);
//     const [data, setData] = useState("");
//     const setFocus = () => {
//         console.log(input);
//         input.current.focus();
//         input.current.style.color = "blue";
//         input.current.placeholder = "Enter name";
//         button.current.style.backgroundColor = "yellow";

//     };
//     const handleClick = () => {
//         setFocus();
//         setData(input.current.value);
//     };
//     return (
//         <>
//             <div>
//                 <h1>UseRef Hook</h1>
//                 <input ref={input} type="text" placeholder="Enter name" />
//                 <button ref={button} onClick={handleClick}>Focus on input</button>
//                 <h3>Input data: {data}</h3>
//             </div>
//         </>
//     );
// }
// export default Useref;

import { useRef, useState } from "react";

function Useref() {
    const input = useRef(null);
    const [data, setData] = useState("");
    const [clicked, setClicked] = useState(false); // track click state

    const handleClick = () => {
        input.current.focus();
        input.current.style.color = "red";
        input.current.placeholder = "Enter name";

        setData(input.current.value);
        setClicked(!clicked); // toggle between true/false
    };

    return (
        <>
            <div>
                <h1>UseRef Hook</h1>
                <input ref={input} type="text" placeholder="Enter name" />
                <button
                    onClick={handleClick}
                    style={{
                        backgroundColor: clicked ? "red" : "gray",
                        color: "white",
                    }}
                >
                    Focus on input
                </button>
                <h3>Input data: {data}</h3>
            </div>
        </>
    );
}

export default Useref;

