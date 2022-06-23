#!/usr/bin/env node
import engine from '../src/index.js';
import { gcdGame, description } from '../src/games/gcdGame.js';

engine(gcdGame, description);
