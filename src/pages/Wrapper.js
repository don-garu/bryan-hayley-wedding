import { useEffect, useState } from "react";
import data from "../assets/image_data.json";
import Main from "./Main";
import Init from "./Init";

const Wrapper = () => {
    const [showMain, setShowMain] = useState(false);

    useEffect(() => {
        const loadImages = (urls) => {
            return Promise.all(
                urls.map(
                    (imageSource) =>
                        new Promise((resolve, reject) => {
                            const img = new Image();
                            img.src = imageSource;
                            img.onload = resolve;
                            img.onerror = reject;
                        })
                )
            );
        };

        loadImages(data.all)
            .then(() => {
                setTimeout(() => {
                    setShowMain(true);
                }, 3000); // 모든 리소스가 로드된 후 5초 뒤에 화면 전환
            })
            .catch((error) => {
                console.error('Error loading images:', error);
            });
    }, []);

    return <>
        {showMain && <Main/>}
        {!showMain && <Init/>}
    </>
}

export default Wrapper;
