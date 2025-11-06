import { useFeatureFlags } from '@attivo/hooks';
import {ReactNode} from "react";
import { Link } from '@tanstack/react-router'
import {Footer} from "./Footer.tsx";

interface LayoutProps {
    children: ReactNode
}

export function Layout({ children }: LayoutProps) {
    const ffSpin = useFeatureFlags('make-it-spin', false);

    return (
        <div className="max-w-3xl mx-auto p-8 space-y-6">
            <nav className="flex justify-between items-center py-4 px-5 bg-zinc-800/[0.75] rounded-md">
                <Link to="/" className="flex items-center space-x-3">
                    <img src="/attivo-active.png" alt="Logo" className={`w-7 h-7 ${ffSpin ? 'animate-spin' : ''}`} />
                    <div>
                        <p className="text-sm">Attivø</p>
                        <p className="text-xs">Feature Flag Manager</p>
                    </div>
                </Link>
                <div className="space-x-4">
                    <Link to="/license" className="hover:text-accent">License</Link>
                    <Link to="/privacy" className="hover:text-accent">Privacy</Link>
                </div>
            </nav>
            {children}
            <Footer />
        </div>
    );
}