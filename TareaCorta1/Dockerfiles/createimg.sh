sudo docker login
cd api-postgresql

cd database-client
sudo docker build -t jcardonar/postgresql-client .
sudo docker images
sudo docker push jcardonar/postgresql-client

cd ..
sudo docker build -t jcardonar/api-postgresql .
sudo docker images
sudo docker push jcardonar/api-postgresql



# cd Dockerfiles
# dos2unix createimg.sh
# ./createimg.sh