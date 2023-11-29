interface InputProps {
    tipo?: 'text' | 'number' | 'date'
    texto: string
    valor: any
    readOnly?: boolean
    onChange?: (valor: any) => void
}

export default function Input(props: InputProps) {
    return (
        <div className="flex flex-col mt-3" >

            <label className="mb-2">{props.texto}</label>

            <input type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.readOnly}
                onChange={e => props.onChange?.(e.target.value)}
                className={`border border-indigo-500 rounded-l g focus:outline-none bg-gray-100 px-4 py-2
            ${props.readOnly ? '' : 'focus:bg-white'} `} />
        </div>
    )
}