export function ArrowButton({ isLeft, isRight, onClick }) {
    
    const onButtonClick = (e) => {
        e.preventDefault()
        onClick()
    }

    return (
        <button onClick={onButtonClick} className={"arrow-button dark "+(isLeft? 'left': 'right')}>{ isLeft ? '<' : '>'}</button>
    )
}