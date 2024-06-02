import { ReactComponent as LeftArrow } from '../assets/arrow-left.svg';
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';
import { useState } from "react";

const ImageModal = ({clickedImg, handleRotationRight, handleRotationLeft, setClickedImg}) => {

    const [startX, setStartX] = useState(null);

    const handleClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null);
            document.body.style.overflow = '';
        }
    }

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!startX) return;

        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;

        if (Math.abs(diff) < 10) return;

        if (diff > 50) {
            handleRotationRight();
            setStartX(null); // 드래그가 끝나면 startX 초기화
        } else if (diff < -50) {
            handleRotationLeft();
            setStartX(null); // 드래그가 끝나면 startX 초기화
        }
    };

    const handleTouchEnd = () => {
        setStartX(null);
    };

    return <div className='overlay'>
        <img className="" src={clickedImg} alt="original size"
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}/>
        <span className="dismiss" onClick={handleClick}>X</span>
        <div onClick={handleRotationRight}>
            <div>
                <RightArrow className="overlay-arrows_right"
                            width="50" height="50"/>
            </div>
        </div>
        <div onClick={handleRotationLeft}>
            <div>
                <LeftArrow className="overlay-arrows_left"
                           width="50" height="50"/>
            </div>
        </div>
    </div>
};

export default ImageModal;