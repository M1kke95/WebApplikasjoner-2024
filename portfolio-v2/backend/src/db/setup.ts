import db, { DB } from "./db"; 
import { seed } from "./seed";
import { createTables } from "./tables";

export const setup = async (db: DB) => {
  console.log("Setting up the database...");
  try {
    
    await createTables(db);  
    await seed(db); 
  } catch (error) {
    console.error("Error during setup:", error);
  }
};

(async () => {
  console.log("Invoking setup...");
  await setup(db);
})();
