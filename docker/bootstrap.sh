#!/bin/bash

cd /tracim/backend/
source env/bin/activate
pserve development.ini
