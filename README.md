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