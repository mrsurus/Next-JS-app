import { MongoClient, ServerApiVersion } from "mongodb";

export async function dbConnect(collectionName: string) {
  const uri = process.env.MONGO_URI;
  if (!uri) { 
  throw new Error('Please define the MONGO_URI environment variable inside .env.local');
  } 
  else
  {
    const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

    return client.db(process.env.DB_NAME).collection(collectionName);
  }

} 