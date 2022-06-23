#!/usr/bin/env node
import engine from '../src/index.js';
import { progressionGame, description } from '../src/games/progressionGame.js';

engine(progressionGame, description);
