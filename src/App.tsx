import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { LicensePage } from './components/LicensePage';
import { PrivacyPage } from './components/PrivacyPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="license" element={<LicensePage />} />
                    <Route path="privacy" element={<PrivacyPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;