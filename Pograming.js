import { isDisabled } from "@testing-library/user-event/dist/utils"
import { useState } from "react"

function Pro_Calc() {
    var ope,i,b1
    const [fval, setfvalue] = useState('')
    const [sval, setsvalue] = useState('')
    const [operator, setoperator] = useState('')
    const [decimal, setdecimal] = useState('')
    const [binary, setbinary] = useState('')
    const [octal, setoctal] = useState('')
    const [hexad, sethexad] = useState('')
    const [disable, setdisable] = useState(false)
    const [disableo, setdisableo] = useState(false)
    const [disableh, setdisableh] = useState(false)
    const [disabled, setdisabled] = useState(false)

    const handlerbtn = (m) => {
        i = m.target.value
        setfvalue(fval + i)
        // b1=i
        // alert(b1)
    }
    const bin = (m) => {
        setdisable(true)
        // alert(m.target.value)
        setbinary(m.target.value)

    }
    const oct = () => {
        setdisable(false)
        setdisableo(true)
    }
    const hex = () => {
        setdisable(false)
        setdisableo(false)
    }
    const dec = () => {
        setdisable(false)
        setdisableo(false)
    }
    const signhandler = (x) => {
        ope = x.target.value
        setoperator(ope)
        setsvalue(fval)
        setfvalue('')
    }
    const equalhandler = (c) => {
        if (operator == '+') {
            setfvalue(parseInt(sval) + parseInt(fval))
            setfvalue(parseFloat(sval) + parseFloat(fval))
        }
        convertevent()
        // else if (operator == '-') {
        //     setfvalue(parseInt(sval) - parseInt(fval))
        //     setfvalue(parseFloat(sval) - parseFloat(fval))
        // }
        // else if (operator == '/') {
        //     setfvalue(parseInt(sval) / parseInt(fval))
        //     setfvalue(parseFloat(sval) / parseFloat(fval))
        // }
        // else if (operator == '*') {
        //     setfvalue(parseInt(sval) * parseInt(fval))
        //     setfvalue(parseFloat(sval) * parseFloat(fval))
        // }
        // else if (operator == '%') {
        //     setfvalue((parseInt(sval) / 100) * parseInt(fval))
        // }
    }
    const clear = () => {
        setfvalue('')
        setdecimal('')
        setbinary('')
        setoctal('')
        sethexad('')
        setdisable(false)
        setdisableo(false)
    }
    const back = () => {
        var v = fval.slice(0, fval.length - 1)
        setfvalue(v)
    }
    const convertevent = () => {
        setdecimal(Number(fval))
        setbinary(Number(sval + fval).toString(2))
        setoctal(Number(sval + fval).toString(8))
        sethexad(Number(sval + fval).toString(16))
    }
    return (
        <>
            <div className="pro_calc mt-4 calc ">
                <div className="display text-center">
                    Value : <input type="text" value={fval} placeholder="Enter Value..." className="ms-4" />
                    Decimal : <input type="text" value={decimal} onClick={dec} className="mt-3 ms-1" placeholder="Decimal Value..." />
                    Binary : <input type="text" value={binary} onClick={bin} className="mt-3 ms-3" placeholder="Binary Value..." />
                    Octal : <input type="text" value={octal} onClick={oct} className="mt-3 ms-4" placeholder="Octal Value..." /><br></br>
                    Hexa : <input type="text" value={hexad} onClick={hex} className="mt-3 ms-4" placeholder="Hexadecimal Value..." />
                </div>
                <div className="buttons mt-4 d-flex align-items-center justify-content-center gap-4">
                    <input type={'button'} disabled={disable} className="btn" value="7" onClick={handlerbtn}></input>
                    <input type={'button'} disabled={disable + disableo} className="btn" value="8" onClick={handlerbtn}></input>
                    <input type={'button'} disabled={disable + disableo} className="btn" value="9" onClick={handlerbtn}></input>
                    <input type={'button'} className="sign" value="-" onClick={signhandler}></input>
                </div>
                <div className="buttons mt-4 d-flex align-items-center justify-content-center gap-4">
                    <input type={'button'} disabled={disable} className="btn" value="4" onClick={handlerbtn}></input>
                    <input type={'button'} disabled={disable} className="btn" value="5" onClick={handlerbtn}></input>
                    <input type={'button'} disabled={disable} className="btn" value="6" onClick={handlerbtn}></input>
                    <input type={'button'} className="sign" value="/" onClick={signhandler}></input>
                </div>
                <div className="buttons mt-4 d-flex align-items-center justify-content-center gap-4">
                    <input type={'button'} className="btn" value="1" onClick={handlerbtn}></input>
                    <input type={'button'} disabled={disable} className="btn" value="2" onClick={handlerbtn}></input>
                    <input type={'button'} disabled={disable} className="btn" value="3" onClick={handlerbtn}></input>
                    <input type={'button'} className="sign" value="+" onClick={signhandler}></input>
                </div>
                <div className="buttons mt-4 d-flex align-items-center justify-content-center gap-4">
                    <input type={'button'} className="btn" value="00" onClick={handlerbtn}></input>
                    <input type={'button'} className="btn" value="0" onClick={handlerbtn}></input>
                    <input type={'button'} className="btn" value="." onClick={handlerbtn}></input>
                    <input type={'button'} className="sign" value="=" onClick={equalhandler}></input>
                </div>
                <div className="buttons mt-4 d-flex align-items-center justify-content-center gap-4">
                    <input type={'button'} disabled={disable + disableo} className="btn" value="a" onClick={handlerbtn}></input>
                    <input type={'button'} disabled={disable + disableo} className="btn" value="b" onClick={handlerbtn}></input>
                    <input type={'button'} disabled={disable + disableo} className="btn" value="c" onClick={handlerbtn}></input>
                    <input type={'button'} disabled={disable + disableo} className="btn" value="d" onClick={handlerbtn}></input>
                </div>
                <div className="buttons mt-4 d-flex align-items-center justify-content-center gap-4">
                    <input type={'button'} disabled={disable + disableo} className="btn" value="e" onClick={handlerbtn}></input>
                    <input type={'button'} disabled={disable + disableo} className="btn" value="f" onClick={handlerbtn}></input>
                    <input type={"button"} className="btn" value="AC" onClick={clear}></input>
                    <input type={"button"} className="btn" value="C" onClick={back}></input>
                </div>
                <div className="convert mt-4 text-center">
                    {/* <input type="button" onClick={convertevent} value="Click The Button" /> */}
                </div>
            </div>
        </>
    )
}

export default Pro_Calc