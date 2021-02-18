import Display from "./Display";
import ButtonsContainer from "./ButtonsContainer";

export default function Calculator () {
    return (
        <div className="calculator">
            <Display />
            <ButtonsContainer />
        </div>
    )
}