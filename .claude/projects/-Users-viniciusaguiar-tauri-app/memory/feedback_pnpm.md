---
name: Use pnpm
description: User requires pnpm as the package manager, not npm or yarn
type: feedback
---

Always use pnpm for package management commands (install, add, remove, etc).

**Why:** User explicitly corrected when npm was used.
**How to apply:** Any time a package install or script run is needed, use `pnpm` instead of `npm` or `yarn`. Always prefix with `nvm use 24 &&` to ensure the correct Node version is active (e.g. `nvm use 24 && pnpm install`).
