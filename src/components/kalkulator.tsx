import { useEffect, useState } from "react"

export default function Kalkulator() {
    let [display, setDisplay] = useState<string>("0");

    function isNumber(str: string) {
        return /^[0-9]+$/.test(str);
    }

    function toggleAnimation(e: any) {
        e.target.style.animation = "btn 0.5s";
        setTimeout(() => {
            e.target.style.animation = "";
        }, 500)
    }

    function handleDisplay(e: any) {
        toggleAnimation(e);
        if (display === "0" && !isNumber(e.target.innerText)) {
            return;
        }
        else if (display.length === 1 && display === "0") {
            return setDisplay(e.target.innerText);
        }
        else if (!isNumber(display.slice(-1)) && 
                 !isNumber(e.target.innerText)) {
                    return;
        }
        setDisplay(prev => prev + e.target.innerText);
    }

    function handleResoult(e: any) {
        toggleAnimation(e);
        if (!isNumber(display.slice(-1))) return;
        let fixedNumber = String(eval(display)).split(".");
        if (fixedNumber.length === 1) return setDisplay(fixedNumber[0]);
        setDisplay(prev => String(parseFloat((eval(prev))).toFixed(2)));
    }

    function handleReset(e: any) {
        toggleAnimation(e);
        setDisplay("0");
    }

    function handleC(e: any) {
        toggleAnimation(e);
        setDisplay(prev => prev.substring(0, prev.length - 1))
    }

    useEffect(() => {
        document.getElementsByClassName('Display')[0].innerHTML = display;
    }, [display])

    return (
        <div className="content">
            <button id="btn-reset" onClick={handleReset}>RESET</button>
            <button id="btn-c" onClick={handleC}>C</button>
            <button className='btns-action' id="btn-multiply" onClick={handleDisplay}>*</button>
            <button className='btns-number' id="btn-1" onClick={handleDisplay}>1</button>
            <button className='btns-number' id="btn-2" onClick={handleDisplay}>2</button>
            <button className='btns-number' id="btn-3" onClick={handleDisplay}>3</button>
            <button className='btns-action' id="btn-divide" onClick={handleDisplay}>/</button>
            <button className='btns-number' id="btn-4" onClick={handleDisplay}>4</button>
            <button className='btns-number' id="btn-5" onClick={handleDisplay}>5</button>
            <button className='btns-number' id="btn-6" onClick={handleDisplay}>6</button>
            <button className='btns-action' id="btn-add" onClick={handleDisplay}>+</button>
            <button className='btns-number' id="btn-7" onClick={handleDisplay}>7</button>
            <button className='btns-number' id="btn-8" onClick={handleDisplay}>8</button>
            <button className='btns-number' id="btn-9" onClick={handleDisplay}>9</button>
            <button className='btns-action' id="btn-sub" onClick={handleDisplay}>-</button>
            <button className='btns-action' id="btn-dot" onClick={handleDisplay}>.</button>
            <button className='btns-number' id="btn-0" onClick={handleDisplay}>0</button>
            <button id="btn-equals" onClick={handleResoult}>=</button>
        </div>
    )
}