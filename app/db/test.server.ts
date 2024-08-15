import { getFirestore } from "firebase-admin/firestore";
import { firebase } from "./firebase.server";

export const testDb = getFirestore(firebase);
