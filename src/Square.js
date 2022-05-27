
const Square = ({value, play}) =>{

    return(
        <>
            <div className={"square"}
            onClick={play}
            >
                {value}
            </div>
        </>
    )
}

export default Square