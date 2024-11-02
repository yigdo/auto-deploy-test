# Auto Deploy Test

Auto Deploy Test is a test mainly examining the capabilities of my homelab when it comes to auto-deployments. The main
objective is to create a project that auto-renews the code when a new change in the Github repo is made.

### Tools that will be used
- [Watchtower](https://containrrr.dev/watchtower/): watches the [Github Container Registry](https://ghcr.io)
- [Traefik](https://traefik.io/traefik/): provides reverse-proxy for the application (Mainly used for avoiding a new test that is coming)