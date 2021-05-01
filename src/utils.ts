import HDNode from 'hdkey';
import crypto from 'crypto';
import assert from 'assert';

export function getNodeId(key: HDNode) {
  const buffer = Buffer.from(key.publicKey)
  const sha256 = crypto.createHash('sha256').update(buffer).digest();
  return crypto.createHash('ripemd160').update(sha256).digest('hex').toString();
}

const _getQueueSpan = function (t: number, y: number, p: number) {
  assert(Number.isSafeInteger(t) && t > 0, 't is expected to be integer greater than zero');
  assert(Number.isSafeInteger(y) && y > 0, 'y is expected to be integer greater than zero');
  assert(Number.isFinite(p) && p > 0 && p < 1, 'p is expected to be number > 0 and < 1');

  var x = (Math.pow((p - 1) / -1, 1 / y) - 1) * -t;
  return x;
};

export function getQueueOffset(totalRenters: number, overlap: number) {
  if (!Number.isFinite(overlap)) {
    overlap = 1;
  }

  const span = _getQueueSpan(
    256, // total number of queues
    totalRenters, // total number of renters in pool
    0.999 // percentage
  );

  return Math.ceil(span * overlap / 2);
};


