import Button from "./evento/Button"

function Evento(){
    function meuEvento(){
        console.log(`Ativando Primeiro evento!`)
    }

    function segundoEvento(){
        console.log("Ativanto o segundo evento!")
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Evento