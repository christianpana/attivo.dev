import { createFileRoute } from '@tanstack/react-router'
import {LicensePage} from "../pages/LicensePage.tsx";

export const Route = createFileRoute('/license')({
    component: LicensePage,
})