sudo docker login
cd api-postgresql

cd database-schema
sudo docker build -t jcardonar/postgresql-schema .
sudo docker images
sudo docker push jcardonar/postgresql-schema

cd ..
sudo docker build -t jcardonar/api-postgresql .
sudo docker images
sudo docker push jcardonar/api-postgresql



# cd Dockerfiles
# dos2unix createimg.sh
# ./createimg.sh