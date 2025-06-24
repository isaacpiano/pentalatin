
import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    title: '', composer: '', country: '', instruments: '', bio: '', file: null
  });

  const handleLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
    } catch (err) {
      alert('Login failed');
    }
  };

  const handleUpload = async () => {
    if (!form.file) return alert('PDF requerido');
    const storageRef = ref(storage, `scores/${form.file.name}`);
    await uploadBytes(storageRef, form.file);
    const url = await getDownloadURL(storageRef);

    await addDoc(collection(db, 'scores'), {
      title: form.title,
      composer: form.composer,
      country: form.country,
      instruments: form.instruments,
      bio: form.bio,
      pdfUrl: url,
    });

    alert('Partitura subida con éxito');
    setForm({ title: '', composer: '', country: '', instruments: '', bio: '', file: null });
  };

  if (!user) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl mb-4">Iniciar sesión (admin)</h2>
        <input placeholder="Correo" className="border p-2 m-2" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Contraseña" type="password" className="border p-2 m-2" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="bg-red-600 text-white px-4 py-2 rounded">Entrar</button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl mb-4 text-center">Subir nueva partitura</h2>
      <input className="border p-2 mb-2 w-full" placeholder="Título" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
      <input className="border p-2 mb-2 w-full" placeholder="Compositor" value={form.composer} onChange={e => setForm({...form, composer: e.target.value})} />
      <input className="border p-2 mb-2 w-full" placeholder="País" value={form.country} onChange={e => setForm({...form, country: e.target.value})} />
      <input className="border p-2 mb-2 w-full" placeholder="Instrumentos" value={form.instruments} onChange={e => setForm({...form, instruments: e.target.value})} />
      <textarea className="border p-2 mb-2 w-full" placeholder="Biografía" value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} />
      <input type="file" accept="application/pdf" className="mb-4" onChange={e => setForm({...form, file: e.target.files[0]})} />
      <button onClick={handleUpload} className="bg-green-600 text-white px-4 py-2 rounded">Subir</button>
    </div>
  );
}
