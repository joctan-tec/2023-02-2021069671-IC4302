sudo docker login
cd api-postgresql
sudo docker build -t jcardonar/api-postgresql .
sudo docker images
sudo docker push jcardonar/api-postgresql

# cd Dockerfiles
# dos2unix createimg.sh
# ./createimg.sh