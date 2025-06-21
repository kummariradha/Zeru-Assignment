EigenLayer Restaking Data API
This project provides a backend API for fetching, storing, and serving data related to restakers and validators on the EigenLayer protocol. It aggregates on-chain and off-chain data, syncs it to a MongoDB database, and exposes RESTful endpoints for easy access.

Features
Data Aggregation: Fetches restaker, validator, and reward data from the EigenLayer API and Ethereum blockchain.
Database Sync: Stores and updates restaker, validator, and reward information in MongoDB.
REST API: Provides paginated endpoints to query restakers and validators.
Modular Structure: Organized codebase with clear separation of concerns (controllers, models, routes, scripts, config).
Environment Configurable: Uses .env for sensitive configuration like database URI and API keys.
Project Structure
How It Works
Data Fetching:
The script in scripts/fetchData.js fetches data from the EigenLayer API and Ethereum logs, then updates MongoDB collections for restakers, validators, and rewards.

Database Connection:
MongoDB connection is managed in config/index.js.

API Endpoints:

/api/restakers: Get paginated list of restakers.
/api/validators: Get paginated list of validators.
Models:

models/restaker.js: Restaker schema.
models/validator.js: Validator schema.
models/reward.js: Reward schema.
Controllers:

controllers/restakeController.js: Handles restaker API logic.
controllers/validatorController.js: Handles validator API logic.
Routes:

routes/restakers.js: Restaker endpoints.
routes/validators.js: Validator endpoints.
routes/index.js: Main router.
Server:
The entry point server.js initializes the Express server, connects to MongoDB, and mounts API routes.

Getting Started
Prerequisites
Node.js (v16+ recommended)
MongoDB instance (local or Atlas)
Installation
Clone the repository.
Install dependencies:
npm install