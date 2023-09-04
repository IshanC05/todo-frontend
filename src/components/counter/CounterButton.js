import React from 'react'
import { PropTypes } from 'prop-types'

export default function CounterButton(props) {

    const { by, incrementMethod, decrementMethod } = props;

    return (
        <div className="Counter">
            <div>
                <button className="button counterButton" onClick={() => incrementMethod(by)}>+ {by}</button>
                <button className="button counterButton" onClick={() => decrementMethod(by)}>- {by}</button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
} 