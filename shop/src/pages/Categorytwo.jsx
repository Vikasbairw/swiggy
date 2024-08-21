function Categorytwo(props){
    return(
        <>
        <div className="w-[270px] grow-1 shrink-0">

<div className="w-full h-[182px] object-cover overflow-hidden relative   rounded-[15px]">
    <img src={props.value} alt="" className="h-full w-full" />
     <div className="absolute top-0 background left-0 h-full w-full text-white font-bold text-[25px] ps-2 flex items-end">item price $72</div>
</div>
</div>
        </>
    )
}
export default Categorytwo;