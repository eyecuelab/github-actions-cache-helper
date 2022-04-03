# GitHub Actions Cache Helper

This helper allows non-JavaScript steps to access the GitHub Actions cache.

It is necessary because GitHub Actions does not pass certain environment variables (e.g. `ACTIONS_RUNTIME_TOKEN`, `ACTIONS_CACHE_URL`) to scripts, only to JavaScript actions.

This action exports those variables so that they can be used in subsequent script tasks.
