#!/usr/bin/env node
import engine from '../src/index.js';
import { progressionGame, ruleGame } from '../src/games/progressionGame.js';

engine(progressionGame, ruleGame);
