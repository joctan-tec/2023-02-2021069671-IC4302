FROM python:3.9

WORKDIR /app

COPY ./api-postgresql/app/. .
COPY babynames.csv .
RUN pip install --no-cache-dir -r requirements.txt

CMD [ "python", "-u", "postgreSQLApi.py" ] 