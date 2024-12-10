# -------------------------------------
# Builder Stage: 
#   1. Use the official Go image with necessary tools.
#   2. Set up module dependencies.
#   3. Build the Go binary.
# -------------------------------------
FROM golang:1.23-alpine AS builder

# Create and set the working directory
WORKDIR /app

# Copy only the go.mod and go.sum first to leverage caching
COPY go.mod go.sum ./
RUN go mod download

# Copy the rest of the source code
COPY . .

# Build the Go application (adjust main.go if your entry file differs)
RUN go build -o main .

# -------------------------------------
# Runtime Stage:
#   1. Start from a lightweight base image.
#   2. Copy over the compiled binary from builder stage.
#   3. Expose the API port and set the container's entrypoint.
# -------------------------------------
FROM alpine:3.18

WORKDIR /app

# Copy the built binary from the builder image
COPY --from=builder /app/main .

# Expose the port your API listens on (change if needed)
EXPOSE 7000

# Use the binary as the container's entry point
CMD ["./main"]
