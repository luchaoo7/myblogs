import React from 'react'

interface SectionHeadingProps {
    // Add any props you might need
    heading: string;
}

const SectionHeading = ({ heading }: SectionHeadingProps): JSX.Element => {

    return (
        <h2 className="section-heading">{heading}</h2>
    );
};

export default SectionHeading;
