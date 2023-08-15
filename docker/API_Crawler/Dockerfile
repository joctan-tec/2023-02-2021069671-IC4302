FROM python:3.10.7-slim-bullseye

WORKDIR /App

COPY App/. .
RUN pip install --no-cache-dir -r requirements.txt

CMD [ "python", "-u", "./App.py" ]
