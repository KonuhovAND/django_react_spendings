#!/bin/bash
uv run manage.py runserver &
cd frontend && npm start