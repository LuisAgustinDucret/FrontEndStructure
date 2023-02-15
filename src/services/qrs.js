
import { db } from "./firebase";
export { db } from "./firebase";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/router";



const qrsCollection = collection(db, "qrs");


export const suscribeToQrs = async (callback) => {
  try {
    const data = await getDocs(qrsCollection);
    const dataFinal = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    callback(dataFinal);
    //aca estamos obteniendo bien la data
  } catch (e) {
    console.log(e);
  }
};

/*export const suscribeToQrID = async (callback) => {
  try {
    const data = await getDocs(qrsCollection);
    const dataFinal = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    callback(dataFinal);
    //aca estamos obteniendo bien la data
  } catch (e) {
    console.log(e);
  }
};*/

export const suscribeToQrID = async (id, callback) => {
  try {
    const qr = await getDoc( doc(db, "qrs", id) )
    const toArray =  Object.entries(qr.data());
    callback(toArray);
  
  } catch (e) {
    console.log(e);
  }
};




export const suscribeToCategorias = (callback) => {};

export const saveQr = async ({evento, fechaLimite, tipoUso, creador, destinatario, cantidadVecesUsado, cantidadGenerada}, callback) => {
  try {
    const docRef = await addDoc(qrsCollection, {
      evento: evento,
      fechaLimite: fechaLimite,
      creador: creador,
      destinatario: destinatario,
      tipoUso: tipoUso,
      cantidadVecesUsado: cantidadVecesUsado,
      cantidadGenerada: cantidadGenerada,
    });
    callback(docRef);
  } catch (error) {
    throw error;
  }
};

export const updateQr = async ({
  id,
  evento,
  fechaLimite,
  tipoUso,
  creador,
  destinatario,
  cantidadVecesUsado,
  cantidadGenerada,
}) => {
  try {
    const qr = doc(db, "qrs", id)
    const data = {evento,
      fechaLimite,
      tipoUso,
      creador,
      destinatario,
      cantidadVecesUsado,
      cantidadGenerada,}
    await updateDoc(qr, data)

    
  } catch (error) {
    throw error;
  }
};

export const deleteQr = async (id) => {
  try {
    const qrDoc = doc(db, "qrs", id);
    await deleteDoc(qrDoc);
  } catch (error) {
    throw error;
  }
};
