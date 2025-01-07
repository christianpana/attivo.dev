# Attivø: Feature Flag Manager

## Overview

Attivø is a powerful feature flag management tool that puts you in control of your web applications' features. Whether you're a developer, QA engineer, or product manager, this extension makes it effortless to toggle features on and off across any website—all directly from your browser.

## Key Features

- 🚀 Instantly toggle feature flags on any website
- 💾 Save and manage feature flag configurations per domain
- 🔄 Apply configurations automatically when revisiting sites
- 🎯 Create and manage multiple feature flag presets
- 🌐 Works seamlessly across all websites
- 🔒 Local storage ensures your configurations remain private

## Who Is It For?

Attivø is perfect for:
- Developers testing new features in production
- QA teams switching between different feature combinations
- Product managers previewing upcoming features
- Teams working with feature-flagged environments

No more complex configuration files or backend changes needed—simply install Attivø, set up your feature flags, and take control of your application's features with just a few clicks. Experience the simplicity of modern feature flag management today!

## Permissions

### Storage Permission
This permission is essential for saving users' feature flag configurations and settings. It allows the extension to remember user preferences and feature flag states between browser sessions, ensuring configurations persist even after closing and reopening the browser. Without this permission, the extension would be unable to save any of the user's feature flag settings or preferences.

### Tabs Permission
The tabs permission is necessary for the extension to identify which website users are currently visiting and apply the correct feature flags for that specific site. It enables the extension to detect when users navigate between different pages and automatically apply their configured feature flags. This permission ensures seamless functionality as users browse different websites.

### Scripting Permission
This permission is required for the extension to modify website behavior based on users' feature flag configurations. It allows the extension to inject the necessary code that enables or disables features on the websites users visit. Without this permission, the extension would be unable to apply feature flag settings to the websites being accessed.

### Host Permissions (<all_urls>)
The extension requires access to all URLs because feature flags can be managed on any website. This permission allows the extension to read and modify website data to apply feature flag configurations, regardless of which site users are visiting. It's necessary for the core functionality of managing feature flags across different websites and ensuring configurations work consistently across the web.

## License

./LICENSE file.
