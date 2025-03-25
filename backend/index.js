import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv'; // Cambiato in import * as dotenv
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import process from 'process'; // Importa esplicitamente process

// Configurazione per ES Modules con __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configurazione dotenv
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Schema del modello
const deckSchema = new mongoose.Schema({
  nomeComandante: String,
  coloriComandante: [String],
  archidekt: String,
  linkLista: String,
  moxfield: String,
  bracket: Number,
}, { collection: 'edh-blc' });

const Deck = mongoose.model('Deck', deckSchema);

// Endpoint per ottenere tutti i mazzi
app.get('/api/decks', async (req, res) => {
  try {
    const decks = await Deck.find();
    res.json(decks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint per aggiungere un nuovo mazzo
app.post('/api/decks', async (req, res) => {
  try {
    const newDeck = new Deck(req.body);
    const savedDeck = await newDeck.save();
    res.status(201).json(savedDeck);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint per servire la pagina principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Connessione MongoDB - Rimosso le opzioni obsolete
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connesso a MongoDB'))
  .catch(err => console.error('Errore connessione MongoDB:', err));

// Avvio server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server in esecuzione sulla porta ${PORT}`));