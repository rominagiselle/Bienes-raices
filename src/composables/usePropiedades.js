import { computed } from 'vue'
import { collection } from 'firebase/firestore'
import { useFirestore, useCollection } from 'vuefire'

export default function usePropiedades() {

    const db = useFirestore()
    const propertiesCollection = useCollection(collection(db, 'propiedades'))

    const propertyPrice = computed(() => {
        return (price) => 
           Number(price).toLocaleString('en-US', {
            style: 'currency',
            currency: 'EUR'
           })
    })

    return { propertiesCollection,
    propertyPrice}
}