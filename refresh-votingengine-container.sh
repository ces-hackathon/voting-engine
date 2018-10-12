echo "*** Refresh Voting Engine container ***"
echo
echo "*** Refresh time: $(date) @ $(hostname)"
echo

echo "*** Stopping container ***"
docker stop votingengine

echo
echo "*** Removing container ***"
docker rm votingengine

echo
echo "*** Building container ***"
./build-container.sh

echo
echo "*** Running container ***"
./run-container.sh

docker logs -f votingengine
