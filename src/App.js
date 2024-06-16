import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Init from "./pages/Init";

const App = () => {
    return (
        <Routes>
            <Route path="*" element={<Init/>}/>
            <Route path="main" element={<Main/>}/>
        </Routes>
    );
};

export default App;