# Use the existing Python image as base
FROM python:3.10-slim

# Set the working directory inside the container
# WORKDIR /app
WORKDIR /app/KRAGEN_Dashboard/Backend
# Copy the code into the container
# COPY . /app

RUN apt update --fix-missing \
    && apt upgrade -y \
    && apt install -y gcc python3-dev \
    && pip install --upgrade pip 

# Install dependencies
# RUN pip install -r ./ExecGPTServer/requirements.txt
# COPY ./ExecGPTServer/requirements.txt requirements.txt
# RUN pip install -r requirements.txt
# COPY graph_of_thoughts graph_of_thoughts
# RUN pip install -e graph_of_thoughts
# RUN flask --app ExecGPTServer init-db
# COPY ./graph_of_thoughts/pyproject.toml pyproject.toml
# RUN pip install -e KRAGEN_Dashboard/Backend/graph_of_thoughts

# Expose the port on which your Flask server will run (if needed)
EXPOSE 5050

# Command to run the Flask server
# CMD ["python", "KRAGEN_Dashboard/Backend/execgpt.py"]
ENTRYPOINT ["/bin/bash", "KRAGEN_Dashboard/Backend/entrypoint.sh"]
