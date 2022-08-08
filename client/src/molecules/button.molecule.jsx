
import './molecules.style.scss'

export const ButtonBrown = ({onClick = () => {}}) => {
    return (
        <button onClick={onClick} className="btn btn-brown">Send</button>
    )
}