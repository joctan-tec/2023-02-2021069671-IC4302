docker login
cd api-mariadb

cd database-client
docker build -t edwardandcode/api-mariadb .
docker images
docker push edwardandcode/api-mariadb

cd ..
docker build -t edwardandcode/api-mariadb .
docker images
docker push edwardandcode/api-mariadb



# cd Dockerfiles
# dos2unix createimg.sh
# ./createimg.sh