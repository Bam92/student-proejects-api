import { dirname } from "path";
import { fileURLToPath } from "url";
export const __filename = dirname(fileURLToPath(import.meta.url));
// Pour avoir les dossiers root de l'application
export const __dirname = dirname(__filename);
export const BASE_API = "/api/v1";
