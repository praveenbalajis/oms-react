import { StBtnPrimary } from "./PrimaryButton.style";

const PrimaryButton = (props: any) => {
    return (
        <>
            <StBtnPrimary onClick={props.onClick}>{props.label}</StBtnPrimary>
        </>
    );
}

export default PrimaryButton;