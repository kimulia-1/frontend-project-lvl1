#!/usr/bin/env node
import engine from '../src/index.js';
import { primeGame, ruleGame } from '../src/games/primeGame.js';

engine(primeGame, ruleGame);
