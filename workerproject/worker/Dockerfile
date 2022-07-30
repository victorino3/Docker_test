
# personalizando a imagem do worker
FROM python:3.6
LABEL maintainer 'Tiago Sudeval'

# nao utiliza o buffer
ENV PYTHONUNBUFFERED 1
RUN pip install redis==2.10.5

ENTRYPOINT [ "/usr/local/bin/python" ]
