import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection String - IMPORTANTE: SOSTITUISCI CON LA TUA
const MONGODB_URI = process.env.MONGODB_URI;

// Mongoose Schema for EDH Deck
const edhDeckSchema = new mongoose.Schema({
  nomeComandante: {
    type: String,
    required: true
  },
  coloriComandante: {
    type: [String],
    required: true
  },
  archidekt: {
    type: String,
    default: ''
  },
  linkLista: {
    type: String,
    default: ''
  },
  moxfield: {
    type: String,
    default: ''
  },
  bracket: {
    type: Number,
    default: null
  }
}, { collection: 'edh-blc' }); // SPECIFICA IL NOME ESATTO DELLA COLLECTION

// Create Model
const EdhDeck = mongoose.model('EdhDeck', edhDeckSchema);

// Connect to MongoDB with Enhanced Logging
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'edh-archive'  // Specifica esplicitamente il nome del database
})
.then(() => {
  console.log('✅ Connesso a MongoDB');
  console.log(`📍 Database: ${mongoose.connection.db.databaseName}`);
})
.catch((err) => {
  console.error('❌ Errore di connessione a MongoDB:', err);
});

// Debug route per verificare le collections
app.get('/debug/collections', async (req, res) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('🔍 Collections disponibili:', collections.map(c => c.name));
    res.json(collections.map(c => c.name));
  } catch (error) {
    console.error('Errore nel recupero delle collections:', error);
    res.status(500).json({ error: 'Errore interno' });
  }
});

// Routes

// GET all decks con log dettagliati
app.get('/api/decks', async (req, res) => {
  try {
    console.log('🔍 Tentativo di recupero deck...');
    const decks = await EdhDeck.find();
    console.log(`✅ Deck trovati: ${decks.length}`);
    console.log('📄 Primi deck:', decks.slice(0, 2));
    res.json(decks);
  } catch (error) {
    console.error('❌ Errore nel recupero dei deck:', error);
    res.status(500).json({ message: error.message });
  }
});

// GET deck by commander name
app.get('/api/decks/commander/:name', async (req, res) => {
  try {
    const deck = await EdhDeck.findOne({ 
      nomeComandante: { $regex: req.params.name, $options: 'i' } 
    });
    if (!deck) {
      return res.status(404).json({ message: 'Deck non trovato' });
    }
    res.json(deck);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Server configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server in esecuzione sulla porta ${PORT}`);
});

export default app;