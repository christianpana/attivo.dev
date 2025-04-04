# Attivø: Feature Flag Manager

## Overview

Attivø is a powerful feature flag management tool that gives you control of your web application's features. Whether you're a developer, QA engineer, or product manager, you can toggle settings directly from your browser without complex configurations.

## Key Features

- 🚀 Instantly toggle feature flags on any website
- 💾 Save and manage feature flag configurations per domain
- 🔄 Apply settings automatically on return visits
- 🔒 Store configurations locally for privacy

## Who Is It For?

- Developers testing new features in production
- QA teams switching between feature combinations
- Product managers previewing upcoming features
- Teams working in feature-flagged environments

## Accessing Feature Flags

To retrieve and monitor feature flags, use the following locations:

- **Window:** The flag configuration is stored as `window.__feature_flags__`.
- **Local Storage:** Look for the key `__feature_flags__` for a persisted copy.
- **Session Storage:** A session-specific copy is also available with the same key.

## Live Updates

The feature flag data is automatically updated whenever a flag is changed. To capture live changes, listen for these events:

- `ATTIVO_HOST_INIT` – triggered during initialization with the default flags.
- `ATTIVO_FEATURE_FLAG_UPDATE` – triggered whenever a flag is updated.

```js
window.addEventListener('ATTIVO_HOST_INIT', handleHostInit);
window.addEventListener('ATTIVO_FEATURE_FLAG_UPDATE', handleFlagUpdate);
```

Monitoring these events ensures that your app instantly reflects any changes made to the feature flags.

## Attivø with React

The `useFeatureFlags` hook retrieves the current state of a feature flag or a default you supply. The state also gets automatically updated when feature flags change.

```bash
npm install @attivo/hooks
```

```js
import { useFeatureFlags } from '@attivo/hooks';
...
const isSnowing = useFeatureFlags('snowing', false);
```

## Contact Information

For any questions regarding the extension or to request modifications, please contact: [hello@attivo.dev](mailto:hello@attivo.dev)

## License and Privacy Policy

[License](license.html) / [Privacy Policy](privacy.html)

© 2025 attivo.dev - All rights reserved.
