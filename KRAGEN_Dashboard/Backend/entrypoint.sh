#!/bin/bash

echo "Hello, World!"

cd KRAGEN_Dashboard/Backend

pip install -r ExecGPTServer/requirements.txt
pip install -e graph_of_thoughts
python execgpt.py