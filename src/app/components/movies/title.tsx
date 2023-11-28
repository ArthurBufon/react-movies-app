export default function Title(props: any) {
    return (
        <div className={`flex flex-col justify-center text-white bg-indigo-500 rounded-t-xl`}>

            <h1 className="px-5 py-2 text-2xl">
                {props.children}
            </h1>

        </div>
    )
}