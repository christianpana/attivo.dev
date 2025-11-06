export function PrivacyPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Privacy Policy for Attivø Feature Flag Manager</h1>
                <h2 className="text-lg font-semibold">Last Updated: 2025-11-01</h2>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="mt-2">
                This Privacy Policy explains how Attivø Feature Flag Manager ("the Extension", "Attivø", "we", "our", or
                "us") handles user data and privacy. We are committed to protecting user privacy and ensuring
                transparency about our data practices.
            </p>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
            <h2 className="text-2xl font-semibold">2. Data Collection and Storage</h2>
            <h3 className="text-xl font-semibold mt-4">2.1 Local Storage</h3>
            <ul className="list-disc pl-5 mt-2">
                <li>All data created and managed by Attivø is stored exclusively in the user's browser</li>
                <li>Data storage locations include:
                    <ul className="list-disc pl-5">
                        <li>Chrome Extension Storage</li>
                        <li>Browser's Local Storage</li>
                        <li>Browser's Session Storage</li>
                        <li>Window Object modifications</li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">2.2 No External Data Transmission</h3>
            <ul className="list-disc pl-5 mt-2">
                <li>No data is transmitted to the Extension developer</li>
                <li>No data is transmitted to any third parties</li>
                <li>No analytics or tracking mechanisms are implemented</li>
                <li>No user behavior monitoring occurs</li>
                <li>No personal information is collected</li>
            </ul>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
            <h2 className="text-2xl font-semibold">3. Data Usage</h2>
            <h3 className="text-xl font-semibold mt-4">3.1 Feature Flag Configuration</h3>
            <ul className="list-disc pl-5 mt-2">
                <li>The Extension stores feature flag configurations locally</li>
                <li>Configurations are specific to domains and user preferences</li>
                <li>All stored data remains within the user's browser environment</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">3.2 Page Modifications</h3>
            <ul className="list-disc pl-5 mt-2">
                <li>The Extension injects necessary code into web pages where it is actively used</li>
                <li>Modifications are made to the window object to enable feature flag functionality</li>
            </ul>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
            <h2 className="text-2xl font-semibold">4. User Responsibilities</h2>
            <h3 className="text-xl font-semibold mt-4">4.1 Security Considerations</h3>
            <ul className="list-disc pl-5 mt-2">
                <li>Users should not input sensitive information as feature flag values</li>
                <li>Users should exercise caution when enabling feature flags on websites they don't own or manage</li>
                <li>Users are responsible for any consequences of modifying website behavior through feature flags</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">4.2 Third-Party Websites</h3>
            <ul className="list-disc pl-5 mt-2">
                <li>Users should only modify feature flags on websites where they have appropriate authorization</li>
                <li>The Extension developer is not responsible for any violations of third-party website terms of
                    service
                </li>
            </ul>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
            <h2 className="text-2xl font-semibold">5. Data Security</h2>
            <p className="mt-2">
                All data remains secure within the user's browser environment. The Extension does not implement any
                remote data storage or synchronization.
            </p>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
            <h2 className="text-2xl font-semibold">6. Children's Privacy</h2>
            <p className="mt-2">
                The Extension does not knowingly collect or store any personal information from children under 13 years
                of age.
            </p>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
            <h2 className="text-2xl font-semibold">7. Changes to Web Pages</h2>
            <h3 className="text-xl font-semibold mt-4">7.1 Code Injection</h3>
            <ul className="list-disc pl-5 mt-2">
                <li>The Extension injects JavaScript code into web pages for feature flag functionality</li>
                <li>Injected code is limited to feature flag management purposes</li>
                <li>Code injection occurs only on pages where the Extension is actively used</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">7.2 Storage Modifications</h3>
            <ul className="list-disc pl-5 mt-2">
                <li>The Extension may create, modify, or delete entries in:
                    <ul className="list-disc pl-5">
                        <li>Local Storage</li>
                        <li>Session Storage</li>
                        <li>Chrome Extension Storage</li>
                    </ul>
                </li>
                <li>All modifications are limited to Extension-specific data</li>
            </ul>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
            <h2 className="text-2xl font-semibold">8. Updates to Privacy Policy</h2>
            <p className="mt-2">
                We reserve the right to update this Privacy Policy at any time. Users will be notified of any changes
                through the Chrome Web Store or within the Extension itself.
            </p>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
            <h2 className="text-2xl font-semibold">9. Data Removal</h2>
            <h3 className="text-xl font-semibold mt-4">9.1 Extension Uninstallation</h3>
            <ul className="list-disc pl-5 mt-2">
                <li>Uninstalling the Extension will remove all stored configurations</li>
                <li>Local Storage and Session Storage modifications persist until cleared by the user</li>
                <li>Users can manually clear all Extension data through Chrome's extension management</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">9.2 Manual Data Clearing</h3>
            <p className="mt-2">
                Users can remove all Extension-related data by:
            </p>
            <ul className="list-disc pl-5 mt-2">
                <li>Clearing browser storage</li>
                <li>Removing the Extension through Chrome's extension manager</li>
            </ul>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
            <h2 className="text-2xl font-semibold">10. Contact Information</h2>
            <p className="mt-2">
                For privacy-related questions or concerns, please contact: <a href="mailto:hello@attivo.dev">hello@attivo.dev</a>
            </p>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
            <h2 className="text-2xl font-semibold">11. Compliance</h2>
            <p className="mt-2">
                This Privacy Policy complies with:
            </p>
            <ul className="list-disc pl-5 mt-2">
                <li>Chrome Web Store requirements</li>
                <li>General data protection principles</li>
                <li>Browser extension best practices</li>
            </ul>
            </div>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
            <h2 className="text-2xl font-semibold">12. Disclaimer</h2>
            <p className="mt-2">
                While the Extension modifies web page behavior, it does so solely for feature flag management purposes.
                Users acknowledge that such modifications are made at their own risk and discretion.
            </p>
            </div>

            <hr className="my-6 border-white"/>

            <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
            <p className="mt-4">
                By using Attivø Feature Flag Manager, you acknowledge that you have read and understood this Privacy Policy.
            </p>
            </div>

            <hr className="my-6 border-white"/>
        </div>
    );
}