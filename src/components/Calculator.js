import Display from "./Display";
import ButtonsContainer from "./ButtonsContainer";
import { calculator } from "../css/Calculator.module.css";

export default function Calculator () {
    return (
        <div className={calculator}>
            <Display />
            <ButtonsContainer />
        </div>
    )
}