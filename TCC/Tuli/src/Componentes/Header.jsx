import Logo from "/Tuli.svg"

export default function Header(){
    return(
        <>
        <div className="flex w-full bg-black text-white p-7 justify-between items-center">
            <div>
                <div className="flex flex-row items-center">
                    <h1 className="font-josefin text-7xl mr-5">tuli</h1>
                    <img className="w-7" src={Logo}/>
                </div>
                <div className="flex-col">
                    <h1 className="font-josefin text-2xl">tratamentos estéticos</h1>
                </div>
            </div>
        </div>
        </>
    )
}