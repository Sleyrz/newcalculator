import { useState } from "react";
import '../Styles/style_add_numbers.css';
function ShowAddNumbers() {
    const [count, setAddNumbers] = useState("");
    console.log(count);
    return (
        <div className="conteiner">
            <div className="input">
                <p>{count}</p>
            </div>
            <div>
                <div className="clear_backspace">
                    <button onClick={() => setAddNumbers("")}>Clear</button>
                    <button onClick={() => setAddNumbers(count.slice(0, -1))}>
                        {" "}
                        Backspace
                    </button>
                </div>
                <div className="row_center">
                    <button onClick={() => setAddNumbers(count + "7")}> 7</button>
                    <button onClick={() => setAddNumbers(count + "8")}> 8</button>
                    <button onClick={() => setAddNumbers(count + "9")}> 9</button>
                    <button onClick={() => setAddNumbers(count + "/")}>/</button>
                </div>
                <div className="row_center">
                    <button onClick={() => setAddNumbers(count + "4")}> 4</button>
                    <button onClick={() => setAddNumbers(count + "5")}> 5</button>
                    <button onClick={() => setAddNumbers(count + "6")}> 6</button>
                    <button onClick={() => setAddNumbers(count + "*")}>*</button>
                </div>
                <div className="row_center">
                    <button onClick={() => setAddNumbers(count + "1")}> 1</button>
                    <button onClick={() => setAddNumbers(count + "2")}> 2</button>
                    <button onClick={() => setAddNumbers(count + "3")}> 3</button>
                    <button onClick={() => setAddNumbers(count + "-")}>-</button>
                </div>
                <div className="row_center">
                    <button onClick={() => setAddNumbers(count + "0")}>0</button>
                    <button onClick={() => setAddNumbers(count + ".")}>.</button>
                    <button onClick={() => setAddNumbers(eval(count))}>=</button>
                    <button onClick={() => setAddNumbers(count + "+")}>+</button>
                </div>
            </div>
        </div>
    );
}

export default ShowAddNumbers;
