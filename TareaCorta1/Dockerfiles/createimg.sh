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

cd ..
cd api-mariadb

cd database-client
docker build -t jcardonar/api-mariadb .
docker images
docker push jcardonar/api-mariadb

cd ..
docker build -t jcardonar/api-mariadb .
docker images
docker push jcardonar/api-mariadb


# cd Dockerfiles
# dos2unix createimg.sh
# ./createimg.sh