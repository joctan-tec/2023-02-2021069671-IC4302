FROM postgres:latest

WORKDIR /postgres-schema

COPY postgres-schema/. .

RUN apt-get update -y && apt-get install postgresql-client -y


CMD ["bash", "-c", "PGPASSWORD=1234 psql -h localhost -U postgres -d books -f postgres.sql"]