export const CheckBox = (props) =>{
    return (
        <>
            {
                props.countries?
                props.countries.map((data) =>{
                    return(
                        <div className="country">
                            <input type="checkbox" value={data.id} name={data.name} onClick={(e)=>props.show(e)}/>
                            <label>{data.name}</label>
                        </div>
                    )
                }):""
            }
        </>
    )
}