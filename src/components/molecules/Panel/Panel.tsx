import React from "react";
import styled from "styled-components"

import Button from "../../atoms/Button"
import Icon from "../../atoms/Icon"

interface IPanelProps {
    icon: string;
    label: string;
    children: React.ReactNode;
}

interface IPanelState {
    open: boolean;
}

interface IArrowIconProps {
    flipped: boolean;
}

const ArrowIcon = styled(Icon)<IArrowIconProps>`
    margin-left: 1rem;
    svg {
        transform: scaleY(${(props) => props.flipped ? -1 : 1});
        transition: transform 0.3s;
    }
`

class Panel extends React.PureComponent<IPanelProps, IPanelState> {
    state: IPanelState = {
        open: false,
    }

    toggleOpen = () => {
        this.setState(prevState => ({ 
            open: !prevState.open, 
        }));
    }

    render(){
        return (
            <div>
                <Button onClick={this.toggleOpen}>
                    <Icon name="graduation-cap" /> 
                    Instructions
                    <ArrowIcon name="angle-down" flipped={this.state.open} />
                </Button>
                {this.state.open && 
                <div>Step 1: open the box</div>}
            </div>
        );
    }
}

export default Panel;
