import { Routes, Route } from "react-router-dom";
import Wrapper from "./pages/Wrapper";
import Main from "./pages/Main";

const App = () => {
    return (
        <Routes>
            <Route path="*" element={<Wrapper/>}/>
            <Route path="/main" element={<Main/>}/>
        </Routes>
    );
};

export default App;