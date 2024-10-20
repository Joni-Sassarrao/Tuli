export default function ContainerHome2({children}){
    return(
        <>
        <div className="flex justify-center mb-10 max-desktop5:grid max-desktop5:grid-cols-2 max-desktop5:p-10 max-[1220px]:px-10">
            {children}
        </div>
        </>
    )
}