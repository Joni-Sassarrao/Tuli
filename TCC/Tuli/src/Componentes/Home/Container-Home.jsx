export default function ContainerHome({children}){
    return(
        <>
        <div className="flex justify-evenly bg-fundo2(o) h-[260px] p-5 max-desktop8:h-[230px]">
            {children}
        </div>
        </>
    )
}