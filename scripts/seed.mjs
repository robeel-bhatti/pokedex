import { writeFile } from 'node:fs/promises';

const LIMIT = 151;
const OFFSET = 0;
const BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${OFFSET}`;
const MAX_CONCURRENT_REQ = 10;
const OUT_PATH = 'db.json';

async function fetchJson(url) {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

const res = await fetchJson(BASE_URL);
const urls = res.results.map(x => x.url);
console.log(`Found ${urls.length} pokemon urls`);

const details = [];

for (let i = 0; i < urls.length; i += MAX_CONCURRENT_REQ) {
  const batch = urls.slice(i, i + MAX_CONCURRENT_REQ);
  const batchResults = await Promise.all(batch.map(fetchJson));
  details.push(...batchResults);
  console.log(`Fetched ${details.length}/${urls.length} pokemon details`);
}

await writeFile(OUT_PATH, JSON.stringify({ pokemon: details }, null, 2));
console.log(`Wrote ${details.length} pokemon details to ${OUT_PATH}`);
