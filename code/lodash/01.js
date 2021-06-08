import {cloneDeep} from 'lodash';
import json from './switch-config-v2.mock.json';

const json1 = json;
const json2 = cloneDeep(json1);

console.log(json1 == json2)
