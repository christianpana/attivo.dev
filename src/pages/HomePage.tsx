import {useFeatureFlags} from "@attivo/hooks";
import {WalkingStickMan} from "../components/WalkingStickMan.tsx";
import {Ricked} from "../components/Ricked.tsx";

export function HomePage() {
    const isSnowing = useFeatureFlags('snowing', false);
    const isRocketMan = useFeatureFlags('rocket-man', false);
    const isShowTheStick = useFeatureFlags('show-the-stick', false);
    const isWalkTheStick = useFeatureFlags('walk-the-stick', false);
    const isGetRicked = useFeatureFlags('get-ricked', false);

    return (
        <>
            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
                <h2 className="text-2xl font-semibold accent">Overview</h2>
                <p className="">
                    Attivø is a powerful feature flag management tool that gives you
                    control of your web application's features. Whether you're a
                    developer, QA engineer, or product manager, you can toggle settings
                    directly from your browser without complex configurations.
                </p>
            </div>

            {isShowTheStick &&
                <WalkingStickMan
                    animate={isWalkTheStick}
                />
            }

            {isGetRicked && (
                <Ricked />
            )}

            {isRocketMan && (
            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
                <h2 className="text-2xl font-semibold accent">Rocket Man 🚀</h2>
                <pre className="whitespace-pre-line bg-black text-green-500 rounded-lg overflow-auto p-4">
                {`
                    🎵 And I think it's gonna be a long, long time
                    🎵 'Til touchdown brings me 'round again to find
                    🎵 I'm not the man they think I am at home
                    🎵 Oh, no, no, no
                    🎵 I'm a rocket man
                `.trim()}
                </pre>
            </div>
            )}

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
                <h2 className="text-2xl font-semibold accent">Key Features</h2>
                <ul className="list-disc pl-5">
                    <li>🚀 Instantly toggle feature flags on any website</li>
                    <li>💾 Save and manage feature flag configurations per domain</li>
                    <li>🔄 Apply settings automatically on return visits</li>
                    <li>🔒 Store configurations locally for privacy</li>
                </ul>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
                <h2 className="text-2xl font-semibold accent">Who Is It For?</h2>
                <ul className="list-disc pl-5">
                    <li>Developers testing new features in production</li>
                    <li>QA teams switching between feature combinations</li>
                    <li>Product managers previewing upcoming features</li>
                    <li>Teams working in feature-flagged environments</li>
                </ul>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
                <h2 className="text-2xl font-semibold accent">Accessing Feature Flags</h2>
                <p className="">
                    To retrieve and monitor feature flags, use the following locations:
                </p>
                <ul className="list-disc pl-5 ">
                    <li><strong>Window:</strong> The flag configuration is stored
                        as <code className="bg-black rounded-lg px-2 py-1">window.__feature_flags__</code>.
                    </li>
                    <li><strong>Local Storage:</strong> Look for the key <code className="bg-black rounded-lg px-2 py-1">__feature_flags__</code> for a persisted
                        copy.
                    </li>
                    <li><strong>Session Storage:</strong> A session-specific copy is also available with the same key.
                    </li>
                </ul>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
                <h2 className="text-2xl font-semibold accent">Live updates</h2>
                <p className="">
                    The feature flag data is automatically updated whenever a flag is changed. To capture live changes,
                    listen for these events:
                </p>
                <ul className="list-disc pl-5 ">
                    <li>
                        <code className="bg-black rounded-lg px-2 py-1">ATTIVO_HOST_INIT</code>
                        – triggered during initialization with the default flags.
                    </li>
                    <li>
                        <code className="bg-black rounded-lg px-2 py-1">ATTIVO_FEATURE_FLAG_UPDATE</code>
                        – triggered whenever a flag is updated.
                    </li>
                </ul>
                <pre className="whitespace-pre-line bg-black rounded-lg overflow-auto p-4">
                    window.addEventListener('ATTIVO_HOST_INIT', handleHostInit);
                    window.addEventListener('ATTIVO_FEATURE_FLAG_UPDATE', handleFlagUpdate);
                </pre>
                <p className="">
                    Monitoring these events ensures that you your app instantly reflects any changes made to the feature
                    flags.
                </p>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-4">
                <h2 className="text-2xl font-semibold accent">Attivø with React</h2>
                <p className="">
                    The <code className="bg-black rounded-lg px-2 py-1">useFeatureFlags</code> hook retrieves the current state of a feature flag or a default you
                    supply.
                    The state also gets automatically updated when feature flags change.
                </p>
                <pre className="whitespace-pre-line bg-black rounded-lg overflow-auto p-4">
                    npm install @attivo/hooks
                </pre>
                <pre className="whitespace-pre-line bg-black rounded-lg overflow-auto p-4">
                import {`{ useFeatureFlags }`} from '@attivo/hooks';{`\n`}
                ...{`\n`}
                const isSnowing = useFeatureFlags('snowing', false);
                </pre>
                <div>
                    {isSnowing && (
                        <p className="text-green-500">It's snowing!</p>
                    )}
                </div>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
                <h2 className="text-2xl font-semibold accent">Contact Information</h2>
                <p className="">
                    For any questions regarding the extension or to request modifications, please contact: <a
                    href="mailto:hello@attivo.dev" className="accent">hello@attivo.dev</a>
                </p>
            </div>
        </>
    );
}