# Lunch Conductor Voting-Engine

Voting Engine for the Lunch Conductor application

Manages voting API and voting data for Lunch Conductor game.

## Docker Instructions


### Create Network

```{.sh}
docker network create lunch-net
```

### Run Mongo

```{.sh}
./run-mongo.sh
```

### Create .env

Create '.env' file in project root folder. Set values for MONGO_HOST and MONGO_PORT

```{.sh}
MONGO_HOST=votingengine-mongo
MONGO_PORT=27017
```

### Build

```{.sh}
./build-container.sh
```

### Run
```{.sh}
./run-container.sh
```
