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
docker build -t edwardandcode/mariadb-client .
docker images
docker push edwardandcode/mariadb-client

cd ..
docker build -t edwardandcode/api-mariadb .
docker images
docker push edwardandcode/api-mariadb