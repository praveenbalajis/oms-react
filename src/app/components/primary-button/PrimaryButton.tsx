import { BtnPrimary } from "./PrimaryButton.style";

const PrimaryButton = (props: any) => {
    return (
        <>
            <BtnPrimary onClick={props.onClick}>{props.label}</BtnPrimary>
        </>
    );
}

export default PrimaryButton;