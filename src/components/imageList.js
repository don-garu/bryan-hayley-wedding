import React, { useState } from "react";
import '../App.css';
import data from "../assets/image_data.json";
import ImageModal from "./imageModal";

const ImageList = () => {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.link);
        document.body.style.overflow = 'hidden';
    };

    const handleRotationRight = () => {
        const totalLength = data.data.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = data.data[0].link;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handleRotationLeft = () => {
        const totalLength = data.data.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = data.data[totalLength - 1].link;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    return (
        <div>
            <div className='gallery-image-list-wrapper row'>
                {data.data.map((item, index) => (
                    <div key={index} className='col-4'>
                        <img className='gallery-image' src={item.thumb_image_link} alt={item.text}
                             onClick={() => handleClick(item, index)}/>
                    </div>
                ))}
            </div>
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
