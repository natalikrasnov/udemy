import { useState } from "react"

export function Input({ placeholder, searchFunc , isSearch=true}) {
    const [inputText, setInputText] = useState("")

    const onChangeInput = (e) => {
        setInputText(e.target.value)
    }

    return (
        <form onSubmit={searchFunc} className="input">
            {isSearch && <button disabled={ !inputText } type="submit">⌕</button>}
            <input placeholder={placeholder} onChange={onChangeInput} value={ inputText } />
        </form>
    )
}