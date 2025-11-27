# Running tests

Short guide to run backend and frontend tests locally.

Backend (Python / pytest)

- Create and activate a virtualenv (recommended):
  python3 -m venv .venv
  source .venv/bin/activate
- Install dependencies:
  pip install -r backend/requirements.txt
- Run tests:
  pytest -q

Notes: backend tests create a temporary sqlite DB from `database/db.sql` and do not modify your development DB.

Frontend (React / Jest + MSW)

- Install dependencies:
  cd frontend
  npm install
- Run tests once (no watch):
  npm test

Combined (Makefile)

You can run both suites from the repo root using the provided Makefile:
  make test-all
