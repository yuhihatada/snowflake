FROM python:latest

COPY ./llama_cpp/requirements.txt /llama_cpp/requirements.txt
WORKDIR /llama_cpp
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
