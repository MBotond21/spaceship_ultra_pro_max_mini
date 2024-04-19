import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../../pages/Layout/index";
import { Home } from "../../pages/Home";
import { Main } from "../../pages/Main";
import { AddNew } from '../../pages/AddNew';
import { NoPage } from "../../pages/NoPage";

export function Navi() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/rockets" element={<Main />} />
                        <Route path="/addnew" element={<AddNew />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}