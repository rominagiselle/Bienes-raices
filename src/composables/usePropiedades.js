import { computed, ref } from "vue";
import { collection, doc, deleteDoc } from "firebase/firestore";
import { ref as storageRef, deleteObject } from 'firebase/storage'
import { useFirestore, useCollection, useFirebaseStorage } from "vuefire";

export default function usePropiedades() {
  const piscina = ref(false);

  const storage = useFirebaseStorage()
  const db = useFirestore();
  const propertiesCollection = useCollection(collection(db, "propiedades"));


  async function deleteItem(id, urlImage) {
    if (confirm("Deseas eliminar esta propiedad?")) {

      await Promise.all ([
        deleteDoc(doc(db, "propiedades", id)),
        deleteObject(storageRef(storage, urlImage))
      ])
    }
  }

  const propiedadesFiltradas = computed(() => {
    return piscina.value
      ? propertiesCollection.value.filter((propiedad) => propiedad.piscina)
      : propertiesCollection.value;
  });

  return { propertiesCollection, piscina, propiedadesFiltradas, deleteItem };
}
