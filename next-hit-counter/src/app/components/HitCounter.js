import { readFile, writeFile } from '../../helpers/file-helpers';
const DATABASE_PATH = '/src/database.json';

export const HitCounter = () => {
    let { hits } = JSON.parse(readFile(DATABASE_PATH));
    hits++;
    writeFile(DATABASE_PATH, JSON.stringify({ hits }));
    return hits;
}