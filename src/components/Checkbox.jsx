import React from 'react'

function Checkbox(props) {
    return (
        <div>
            <div id="check">
                <input type="checkbox" id={props.id} name={props.id} value={props.val} />
                <label htmlFor={props.id}> {props.val}</label>
            </div>
        </div>
    )
}

export default Checkbox
