export const Button = (props) => {
    const { text, callback } = props
    return(
        <>
            <input type='button' value={text} onClick={callback} className="w-32 h-14 m-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"/>
        </>
    )
}