install: 
	npm ci
brain-game:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lib:
	npm install readline-sync