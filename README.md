# Lunch Conductor Voting-Engine

Voting Engine for the Lunch Conductor application

Manages voting API and voting data for Lunch Conductor game.

## Docker Instructions


### Create Network

```{.sh}
docker network create lunch-net
```

### Create Volume for Mongo Data

```{.sh}
docker volume create mongodata
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

### Refresh Containers (stop, remove, build, run, tail logs)
Mongo Container
```{.sh}
./refresh-mongo-container.sh
```

Voting Engine Container
```{.sh}
./refresh-votingengine-container.sh
```
