FROM python:3.11.5

WORKDIR /app

COPY app/. .
RUN pip install --no-cache-dir -r requirements.txt

CMD [ "python", "-u", "app.py" ] 