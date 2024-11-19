
## Prerequisites

Ensure you have the following installed on your system:

- [Docker](https://www.docker.com/) (for containerization)



## Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/bitsscalable/book-exchange-ui.git
cd book-exchange-ui
```

### Step 2: Build the Docker image

docker build -t book-exchange-ui .

### Step 2: Run the container

docker run -d -p 8000:80 book-exchange-ui

### Step 1: Access the Application

http://localhost:8000

