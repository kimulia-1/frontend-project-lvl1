install: 
	npm ci
brain-game:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .

start: install publish lib lint