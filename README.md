# flutter-docker-demo

# Flutter Docker Demo

A Flutter web app containerized with a multi-stage Docker build:
- Stage 1 builds the Flutter web app using the Flutter SDK image
- Stage 2 serves the static build output with nginx

## Build and run

Build the image:
docker build -t flutter-docker-demo .

Run the container:
docker run -p 8080:80 flutter-docker-demo

Then open http://localhost:8080

## Screenshots
(add your screenshots here)

## CI/CD

A GitHub Actions workflow (`.github/workflows/ci.yml`) runs on every push and pull request to `main`:
- Installs dependencies
- Runs `flutter test`
- Builds the web app
- Builds the Docker image

![CI passing](screenshots/ci-green.png)

## Multi-Service Stack (Docker Compose)

Three services orchestrated with a single command:
- `db` — PostgreSQL, seeded with sample data on first startup
- `api` — Node.js/Express, queries the database and exposes it at `/message`
- `flutter-app` — the Flutter web app, served via nginx

Run everything with:
docker compose up --build

- Flutter app: http://localhost:8080
- API (proves service-to-service communication): http://localhost:3000/message

![All services running](screenshots/compose-ps.png)
![API response](screenshots/api-message.png)