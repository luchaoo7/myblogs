import React, { CSSProperties } from 'react'

interface SmallerHeadingProps {
    // Add any props you might need
    heading: string;
    style?: CSSProperties | undefined;
}

const SmallerHeading = ({ heading, style }: SmallerHeadingProps): JSX.Element => {

    return (
        <h6 style={style} className="">{heading}</h6>
    );
};

export default SmallerHeading;
