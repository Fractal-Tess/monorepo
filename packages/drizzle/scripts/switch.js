import fs from 'node:fs/promises';
import path from 'node:path';
import readline from 'node:readline';

/**
 * @type {string[]}
 */
const options = ['pg', 'mysql', 'sqlite'];

(async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const p = new URL(import.meta.url);
  const packagePath = path.join(p.pathname, '../../package.json');

  const packageJson = await fs.readFile(
    packagePath,
    { encoding: 'utf-8' },
    'r'
  );
  const parsed = JSON.parse(packageJson);

  const dialect = await new Promise((resolve) =>
    rl.question(
      `Switching drizzle target dialect. \nOptions - (${options.join(
        ', '
      )})\n=>`,
      (ans) => {
        rl.close();
        resolve(ans);
      }
    )
  );
  if (!options.includes(dialect)) {
    console.error(`Target '${dialect}' is not available.`);
    process.exit(1);
  }
  for (const [key, val] of Object.entries(parsed.scripts)) {
    let t = String(val);
    parsed.scripts[key] = t.replace(/(?<=:)[^:]+/, dialect);
  }
  fs.writeFile(packagePath, JSON.stringify(parsed, null, 2));
  console.log(
    'drizzle package.json scripts target dialect changed\nRemember to update your .env file'
  );
})();
