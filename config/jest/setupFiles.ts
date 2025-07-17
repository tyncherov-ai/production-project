import { TextEncoder as NodeTextEncoder } from 'util';

global.TextEncoder = NodeTextEncoder as typeof TextEncoder;
