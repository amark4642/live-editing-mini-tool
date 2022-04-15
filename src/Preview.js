import React from "react";

export default function Preview(props) {
    return (
        <div style={{ fontSize: `${props.fontSize}`, padding: `${props.padding}` }}>
            {props.content}
        </div>
    )
}