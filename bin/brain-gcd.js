#!/usr/bin/env node
import engine from '../src/index.js';
import { gcdGame, ruleGame } from '../src/games/gcdGame.js';

engine(gcdGame, ruleGame);
