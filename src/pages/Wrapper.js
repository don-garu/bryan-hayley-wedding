import { useEffect, useState } from "react";
import Main from "./Main";
import Init from "./Init";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import '../App.css';
import { loadImages } from "../utils/loadImages";

const Wrapper = () => {
    const [showMain, setShowMain] = useState(false);

    useEffect(() => {
        loadImages(["pictures/main.jpeg"])
            .then(() => {
                setTimeout(() => {
                    setShowMain(true);
                }, 3000); // 모든 리소스가 로드된 후 5초 뒤에 화면 전환
            })
            .catch((error) => {
                console.error('Error loading images:', error);
            });
    }, []);

    return <TransitionGroup className="transition">
        <CSSTransition
            key={showMain ? "main" : "init"}
            timeout={500}
            classNames="fade"
        >
            {showMain ? <Main/> : <Init/>}
        </CSSTransition>
    </TransitionGroup>
}

export default Wrapper;
