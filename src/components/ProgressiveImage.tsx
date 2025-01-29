import { useEffect, useMemo, useState } from 'react';

type ProgressiveImageProps = {
    preview: string;
    image: string;
    alt: string;
};

const ProgressiveImage = ({ preview, image, alt }: ProgressiveImageProps) => {
    const [currentImage, setCurrentImage] = useState(preview);
    const [loading, setLoading] = useState(false);

    const fetchImage = (src: string) => {
        const loadingImage = new Image();
        loadingImage.src = src;
        loadingImage.onload = () => {
            setCurrentImage(loadingImage.src);
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchImage(image);
    }, []);

    const style = useMemo(() => {
        return {
            transition: '0.5s filter linear',
            filter: `${loading ? 'blur(50px)' : ''}`,
        };
    }, [loading]);

    return <img style={{ ...style }} src={currentImage} alt={alt} />;
};

export default ProgressiveImage;
