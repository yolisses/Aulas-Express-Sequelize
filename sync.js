import { db } from "./database/db.js";
import "./models/person.js";

db.sync();
