import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import data from "../assets/image_data.json";
import ImageModal from "./imageModal";

const ImageList = () => {
    const preloadImage = src => {
        const img = new Image();
        img.src = src;
    };

    const MyComponent = () => {
        useEffect(() => {
            data.data.map((imgSrc) =>
                preloadImage(imgSrc.link)
            )
        }, []);

        return <div></div>;
    };

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const handleClick = (item, index) => {
        document.body.style.overflow = 'hidden';
        setCurrentIndex(index);
        setClickedImg(item.link);
    };

    const handleRotationRight = () => {
        const totalLength = data.data.length;
        let nextIndex = currentIndex + 1;
        if (nextIndex >= totalLength) {
            nextIndex = 0;
        }
        const newUrl = data.data[nextIndex].link;
        setClickedImg(newUrl);
        setCurrentIndex(nextIndex);
    };

    const handleRotationLeft = () => {
        const totalLength = data.data.length;
        let nextIndex = currentIndex - 1;
        if (nextIndex < 0) {
            nextIndex = totalLength - 1;
        }
        const newUrl = data.data[nextIndex].link;
        setClickedImg(newUrl);
        setCurrentIndex(nextIndex);
    };

    const handleShowMore = () => {
        if (showAll) {
            imageStart.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
        setShowAll(!showAll)
    }

    const imagesToShow = showAll ? data.data : data.data.slice(0, 6);

    const imageStart = useRef()

    return (
        <div>
            <div className='gallery-image-list-wrapper row' ref={imageStart}>
                {imagesToShow.map((item, index) => (
                    <div key={index} className='col-4'>
                        <img className='gallery-image' src={item.link} alt={item.text}
                             onClick={() => handleClick(item, index)}/>
                    </div>
                ))}
            </div>
            <div className='gallery-section-expand' onClick={() => handleShowMore()}>
                {showAll ? 'Show Less' : 'Show More'}
            </div>
            <MyComponent/>
            {clickedImg && <ImageModal
                clickedImg={clickedImg}
                handleRotationRight={handleRotationRight}
                handleRotationLeft={handleRotationLeft}
                setClickedImg={setClickedImg}
            />}
        </div>
    );
};

export default ImageList;
