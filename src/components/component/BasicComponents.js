export const Button = (props) => {
    const { text, callback } = props
    return(
        <>
            <input type='button' value={text} onClick={callback} className="w-32 h-14 m-2 bg-button rounded hover:bg-amber-100 cursor-pointer"/>
        </>
    )
}