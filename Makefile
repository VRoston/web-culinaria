.PHONY: test-backend test-frontend test-all

test-backend:
	cd backend && python3 -m venv .venv || true && . .venv/bin/activate && pip install -r requirements.txt && pytest -q

test-frontend:
	cd frontend && npm install --no-audit --no-fund && npm test --silent

test-all: test-backend test-frontend
