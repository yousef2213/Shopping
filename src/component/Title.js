import React from 'react'
import styled from 'styled-components'

export default function Title({title,center}) {
    return (
        <TitleWrapper className="row m-0 text-main" center={center}>
            <div className="col">
                <h1 className="text-capitalize">{title}</h1>
            </div>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
    text-align: ${props => props.center ? "center" : "left"};
    text-transform:capitalize;
    padding: 50px 0px;

`