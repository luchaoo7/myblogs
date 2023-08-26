import React from 'react'

interface PostImageProps {
    // Add any props you might need
    image_path: string;
    caption?: string;
}

const PostImage = ({ image_path, caption }: PostImageProps): JSX.Element => {

    return (
        <>
            <img className="img-fluid" src={image_path} alt="..." />
            { caption ?  <span className="caption text-muted">{caption}</span> : null }
        </>
    );
};

export default PostImage;
