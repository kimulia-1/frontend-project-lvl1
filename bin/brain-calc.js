#!/usr/bin/env node
import engine from '../src/index.js';
import { calcGame, description } from '../src/games/calcGame.js';

engine(calcGame, description);
