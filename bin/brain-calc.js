#!/usr/bin/env node
import engine from '../src/index.js';
import { calcGame, ruleGame } from '../src/games/calcGame.js';

engine(calcGame, ruleGame);
