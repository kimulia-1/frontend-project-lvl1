#!/usr/bin/env node
import engine from '../src/index.js';
import { evenGame, description } from '../src/games/evenGame.js';

engine(evenGame, description);
