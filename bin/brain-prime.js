#!/usr/bin/env node
import engine from '../src/index.js';
import { primeGame, description } from '../src/games/primeGame.js';

engine(primeGame, description);
