import { Routes, Route } from "react-router-dom";
import Wrapper from "./pages/Wrapper";

const App = () => {
    return (
        <Routes>
            <Route path="*" element={<Wrapper/>}/>
        </Routes>
    );
};

export default App;