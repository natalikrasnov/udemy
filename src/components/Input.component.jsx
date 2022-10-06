import { useState } from "react"

export function Input({ placeholder, searchFunc }) {
    const [inputText, setInputText] = useState("")

    const onChangeInput = (e) => {
        setInputText(e.target.value)
    }

    return (
        <form onSubmit={searchFunc} className="input">
            <button disabled={ !inputText }>⌕</button>
            <input placeholder={placeholder} onChange={onChangeInput} value={ inputText } />
        </form>
    )
}