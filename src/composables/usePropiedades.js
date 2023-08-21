import { collection } from 'firebase/firestore'
import { useFirestore, useCollection } from 'vuefire'

export default function usePropiedades() {

    const db = useFirestore()
    const propertiesCollection = useCollection(collection(db, 'propiedades'))


    return { propertiesCollection}
}