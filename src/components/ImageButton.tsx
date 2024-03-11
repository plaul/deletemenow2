// components/ImageButton.tsx
//import React from "react";

interface ImageButtonProps {
    image: string;
    onClick: () => void;
}

function ImageButton({ image, onClick }: ImageButtonProps) {
    return (
        <button className="imageButton" onClick={onClick}>
            <img src={image} alt="Button Image" />
        </button>
    );
}

export default ImageButton;
