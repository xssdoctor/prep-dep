import fs from "node:fs";
fs.writeFileSync("/tmp/bunlife/marker-preload", "PRELOAD_RAN\n");
console.log("preload ready");
