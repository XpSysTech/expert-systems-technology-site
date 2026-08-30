import { spawn } from 'node:child_process';
import { access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const frontendDirectory = join(repositoryRoot, 'frontend');
const requiredBuildDependencies = [
  join(frontendDirectory, 'node_modules', '@angular', 'cli', 'bin', 'ng.js'),
  join(frontendDirectory, 'node_modules', 'sass', 'package.json'),
];
const npmCli = process.env['npm_execpath'];

if (!npmCli) {
  throw new Error('Run this build through the build:cloudflare npm script.');
}

async function pathExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function runNpm(arguments_) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [npmCli, ...arguments_], {
      cwd: frontendDirectory,
      stdio: 'inherit',
    });

    child.once('error', reject);
    child.once('exit', (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`npm ${arguments_.join(' ')} exited with code ${code ?? 'unknown'}.`));
    });
  });
}

const dependenciesAvailable = (
  await Promise.all(requiredBuildDependencies.map((path) => pathExists(path)))
).every(Boolean);

if (!dependenciesAvailable) {
  await runNpm(['ci', '--include=dev', '--progress=false']);
}

await runNpm(['run', 'build']);
