#!/usr/bin/env node
import engine from '../src/index.js';
import { evenGame, ruleGame } from '../src/games/evenGame.js';

engine(evenGame, ruleGame);
