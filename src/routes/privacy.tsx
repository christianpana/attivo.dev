import { createFileRoute } from '@tanstack/react-router'
import {PrivacyPage} from "../pages/PrivacyPage.tsx";

export const Route = createFileRoute('/privacy')({
    component: PrivacyPage,
})