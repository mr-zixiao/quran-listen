import {useState} from "react";
import AppDrawer from "@/layout/AppDrawer.tsx";
import AppMenuBar from "@/layout/AppMenuBar.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import Chapter from "@/pages/chapter";
import Collection from '@/pages/collection';
import Qari from '@/pages/qari';
import Search from '@/pages/search';
import Setting from '@/pages/setting'
import Player from '@/pages/play'
import { useNavigate } from "react-router";
function AppRedirect() {
    const navigate = useNavigate();
    navigate('/chapter/all');
    return <></>;
}
function App() {
    const [open, setOpen] = useState(false);
    return <BrowserRouter>
        <AppMenuBar openDrawer={() => setOpen(true)}>
            <Routes>
                <Route path="/" element={<AppRedirect/>}/>
                <Route path="/chapter/:qariId" element={<Chapter/>}/>
                <Route path="/collection" element={<Collection/>}/>
                <Route path="/qari/:chapterId" element={<Qari/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/setting" element={<Setting/>}/>
                <Route path="/play" element={<Player/>}/>
            </Routes>
        </AppMenuBar>
        <AppDrawer open={open} onClose={() => setOpen(false)}/>

    </BrowserRouter>
}

export default App