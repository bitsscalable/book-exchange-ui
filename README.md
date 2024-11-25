
## Prerequisites

Ensure you have the following installed on your system:

- [Docker](https://www.docker.com/) (for containerization)

- Create a local docker network

```
docker network create mynetwork

```

## Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/bitsscalable/book-exchange-ui.git
cd book-exchange-ui
```

### Step 2: Build the Docker image

docker build -t book-exchange-ui .

### Step 3: Run the container

docker run -d --name book-exchange-ui --network mynetwork -p 4200:80 book-exchange-ui


### Step 4: Access the Application

http://localhost:4200

