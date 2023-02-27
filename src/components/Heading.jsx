import React from 'react';
import PropTypes from 'prop-types';

export const Heading = (props) => {

    // validando usando if
    /* if(props.type !== "h1" && props.type !== "h2" && props.type !== "h3"){
        return (
            <h1>Invalid Heading</h1>
        )
    } */

    /* return ( // operador ternario (condicion ? true : false ) // operador and (&&) (condicion && (rendering))
        <>
            {
                (props.type === "h1" || props.type === "h2" || props.type === "h3") ? (
                    <props.type className={props.className}>{props.texto}</props.type>
                ) : (
                    <h1>Invalid Heading</h1>
                )
            }
        </>
    ) */

    return (
        <>
        {
            (props.type === "h1" || props.type === "h2" || props.type === "h3") && (
                <>
                    <props.type className={props.className}>{props.texto}</props.type>
                </>
            )
        }
        </>
    )
}

Heading.defaultProps = {
    texto: "Sample Heading",
    className: ""
}

Heading.propTypes = {
    texto: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string.isRequired
}