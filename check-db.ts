import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });

const app = initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
  }),
});

const db = getFirestore();

async function check() {
  const snapshot = await db.collection("interviews").orderBy("createdAt", "desc").limit(10).get();
  snapshot.docs.forEach(doc => {
    const data = doc.data();
    console.log(`ID: ${doc.id} | role: ${data.role} | type: ${data.type} | userId: ${data.userId}`);
  });
}

check().catch(console.error);
