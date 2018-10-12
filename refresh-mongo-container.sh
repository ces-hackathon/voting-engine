echo "*** Refresh Mongo container ***"
echo
echo "*** Refresh time: $(date) @ $(hostname)"
echo

echo "*** Stopping container ***"
docker stop votingengine-mongo

echo
echo "*** Removing container ***"
docker rm votingengine-mongo

echo
echo "*** Running container ***"
./run-mongo.sh

docker logs -f votingengine-mongo
