import './style.css';
import * as tf from '@tensorflow/tfjs-core';
import * as tfcpu from '@tensorflow/tfjs-backend-cpu';
import * as tfdata from '@tensorflow/tfjs-data';
import * as tflayers from '@tensorflow/tfjs-layers';
import * as tfconverter from '@tensorflow/tfjs-converter';
import '@tensorflow/tfjs-backend-cpu';
import * as tfwebgl from '@tensorflow/tfjs-backend-webgl';
import * as tfwasm from '@tensorflow/tfjs-backend-wasm';

async function main() {
  await tf.setBackend('webgl');
  await tf.ready();
  const versions = {
    core: tf.version_core,
    data: tfdata.version_data,
    layers: tflayers.version_layers,
    converter: tfconverter.version_converter,
    webgl: tfwebgl.version_webgl,
    wasm: tfwasm.version_wasm,
    cpu: tfcpu.version_cpu,
  };
  const div = document.getElementById('app') as HTMLDivElement;
  div.innerHTML = `
versions: ${JSON.stringify(versions, null, 2)}
backend: ${tf.getBackend()}
flags: ${JSON.stringify(tf.env().getFlags(), null, 2)}
  `;
}

main();
