import React, { useState } from 'react';
import './App.css';
import { Container, Button, Col, Form, Row } from 'react-bootstrap';
import { Slider, Table, TableCell, TableRow, TextField } from '@material-ui/core';
import hdkey from 'hdkey'
import crypto from 'crypto'
import _ from 'lodash'
import { GridRowData } from '@material-ui/data-grid';
import { getNodeId, getQueueOffset } from './utils';

function App() {
  const [privateKey, setPrivateKey] = useState<string>(hdkey.fromMasterSeed(Buffer.from('1')).privateExtendedKey);
  const [totalRenters, setTotalRenters] = useState(10);
  const [overlap, setOverlap] = useState(1);


  const isValidPrivateKey = (() => {
    try {
      hdkey.fromExtendedKey(privateKey);
      return true;
    } catch {
      return false;
    }
  })();

  const data: GridRowData[] = _.times(isValidPrivateKey ? totalRenters : 0, (n) => {
    const renterIndex = n + 1;
    const complexPk: any = hdkey.fromExtendedKey(privateKey)
    const renterPk = complexPk.deriveChild(renterIndex);
    const nodeId = getNodeId(renterPk);
    const offset = getQueueOffset(totalRenters, overlap);
    const exchangeByteStart = Buffer.from(nodeId, 'hex')[0] - offset;
    const exchangeByteEnd = exchangeByteStart + (offset * 2);

    const start = Buffer.from([exchangeByteStart]).toString('hex')
    const end = Buffer.from([exchangeByteEnd]).toString('hex')

    return {
      id: n + 1,
      nodeId: getNodeId(renterPk),
      offset: offset,
      exchangeByteStart: start,
      exchangeByteEnd: end
    }
  });

  return (
    <Container fluid style={{ marginTop: 20 }}>

      <TextField
        error={!isValidPrivateKey}
        label="Complex Private Key"
        onChange={(e) => setPrivateKey(e.target.value)}
        value={privateKey}
        variant="outlined"
        fullWidth
      />
      <Button onClick={() => setPrivateKey(hdkey.fromMasterSeed(crypto.randomBytes(16)).privateExtendedKey)}>Generate a new key</Button>



      <Form style={{ marginTop: 20 }}>
        <Row>
          <Col>
            <TextField
              label="Total Renters"
              type="number"
              onChange={(e) => setTotalRenters(parseInt(e.target.value, 10))} value={totalRenters}
              variant="outlined"
              fullWidth
            />
          </Col>

          <Col>
            <TextField
              label="Overlap"
              type="number"
              onChange={(e) => setOverlap(parseInt(e.target.value, 10))}
              value={overlap}
              variant="outlined"
              fullWidth
            />
          </Col>
        </Row>

        <Table style={{ marginTop: 20 }}>
          {data.map((row) => {
            const start = parseInt(Buffer.from(row.exchangeByteStart).toString(), 16);
            const end = parseInt(Buffer.from(row.exchangeByteEnd).toString(), 16);
            return <TableRow style={{ backgroundColor: start > end ? '#faa' : 'transparent' }}>
              <TableCell width={10}>{row.id}</TableCell>
              <TableCell width={10}>{row.nodeId}</TableCell>
              <TableCell width={10}>{row.exchangeByteStart}</TableCell>
              <TableCell width={10}>{row.exchangeByteEnd}</TableCell>
              <TableCell>
                <Slider
                  track={start > end ? 'inverted' : undefined}
                  min={0}
                  max={256}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  value={[start, end]}
                  step={1} />
              </TableCell>
            </TableRow>
          })}
        </Table>

      </Form>
    </Container>
  );
}

export default App;
