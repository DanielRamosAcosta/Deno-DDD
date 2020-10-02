start:
	deno run --allow-read --allow-net --unstable --importmap=import_map.json --config ./tsconfig.json src/api/app.ts
test:
	deno test --allow-net --allow-read --unstable --importmap=import_map.json --config ./tsconfig.json
