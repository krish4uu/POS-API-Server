# POS Menu Sync Service

Server syncs menu data from a third-party POS API when the `/trigger-sync` endpoint is called.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   npm run start
   ```

   For development mode with hot-reloading:
   ```bash
   npm run dev
   ```

## Usage

- To trigger a menu sync, make a `POST` request to: http://localhost:3000/trigger-sync

## Env File
- Create `.env` file at root level

```bash
const GET_API_URL = https://bite-test-pos-production.herokuapp.com/locations/123/menu
const PORT = 3000
```