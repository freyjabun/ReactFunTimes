import React from "react";

interface IBobProps {
    name: string;
}

const Bob: React.FC<IBobProps> = ({ name }) => {
    return (
        <>
            <h1>{name}</h1>
            <h2>hej bob</h2>
        </>
    );
}

export default Bob;