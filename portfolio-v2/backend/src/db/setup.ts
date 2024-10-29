import db, { DB } from "./db"; 
import { seed } from "./seed";
import { createTables } from "./tables";

export const setup = async (db: DB) => {
  try {
    
    await createTables(db);  
    await seed(db); 
  } catch (error) {
    console.error("Error during setup:", error);
  }
};

(async () => {
  await setup(db);
})();
