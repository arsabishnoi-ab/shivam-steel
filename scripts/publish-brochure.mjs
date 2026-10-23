import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const pub = path.join(root, "public");

function copy(from, to) {
  fs.cpSync(from, to, { recursive: true, force: true });
}

fs.mkdirSync(path.join(pub, "brochure"), { recursive: true });
fs.copyFileSync(path.join(root, "index.html"), path.join(pub, "brochure", "index.html"));
copy(path.join(root, "css"), path.join(pub, "css"));
copy(path.join(root, "js"), path.join(pub, "js"));
copy(path.join(root, "assets"), path.join(pub, "assets"));

console.log("Brochure copied into public for the Vercel homepage.");
