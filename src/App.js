import { Routes, Route } from "react-router-dom";
import Wrapper from "./pages/Wrapper";
import Main from "./pages/Main";

const App = () => {
    return (
        <Routes>
            <Route path="/main" element={<Main/>}/>
            <Route path="*" element={<Wrapper/>}/>
        </Routes>
    );
};

export default App;