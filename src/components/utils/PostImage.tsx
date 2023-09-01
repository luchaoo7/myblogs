import React, { CSSProperties } from 'react'

interface PostImageProps {
    // Add any props you might need
    image_path: string;
    caption?: string;
    style?: CSSProperties;
}

const PostImage = ({ image_path, caption, style }: PostImageProps): JSX.Element => {

    return (
        <>
            <img style={style} className="img-fluid" src={image_path} alt="..." />
            { caption ?  <span className="caption text-muted">{caption}</span> : null }
        </>
    );
};

export default PostImage;
