export default function ContainerHome({children}){
    return(
        <>
        <div className="flex justify-evenly bg-fundo2(o) h-[260px] p-5 max-desktop8:h-[230px] max-desktop7.1:grid max-desktop7.1:grid-cols-2 max-desktop7.1:justify-items-center max-desktop7.1:h-[365px] max-desktop7.1:-mb-16">
            {children}
        </div>
        </>
    )
}