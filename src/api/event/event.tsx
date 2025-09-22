import { app } from "@/lib/firebase/firebase";
import { IEvent } from "@/lib/interface/event";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";

const db = getFirestore(app);

const getEvent = async () => {
    const result: any[] = [];
    const q = collection(db, "event");
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
    });
    return result.sort((a, b) => a.sort - b.sort);
}

const addEvent = async (event: IEvent) => {
    const docRef = await addDoc(collection(db, "event"), event);
    return docRef.id;
}

const updateEvent = async (event: IEvent) => {
    const { id, ...eventData } = event;
    await updateDoc(doc(db, "event", id), eventData);
    return id;
}

const deleteEvent = async (id: string) => {
    await deleteDoc(doc(db, "event", id));
    return id;
}

export { addEvent, deleteEvent, getEvent, updateEvent };
