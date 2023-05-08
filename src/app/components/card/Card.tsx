import { StCardItem, StCardWrapper } from "./Card.style";

const Card = (props: any) => (
    <StCardWrapper>
        <StCardItem>
            {props.children}
        </StCardItem>
    </StCardWrapper>
);

export default Card;