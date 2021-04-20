import React, { useState } from 'react';
import './App.css';
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import { Slider, Table, TableCell, TableRow } from '@material-ui/core';
import hdkey from 'hdkey'
import crypto from 'crypto'
import _ from 'lodash'
import { DataGrid, GridColDef, GridRowData } from '@material-ui/data-grid';
import { getNodeId, getQueueOffset } from './utils';


function App() {

  const [privateKey, setPrivateKey] = useState<string>(hdkey.fromMasterSeed(Buffer.from('1')).privateExtendedKey);
  const [totalRenters, setTotalRenters] = useState(10);
  const [overlap, setOverlap] = useState(1);

  const dataColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nodeId', headerName: 'Renter ID', width: 350 },
    {
      headerName: 'Rabbit Range',
      flex: 1,
      field: 'rabbit',
      renderCell: (x) => {
        return <Slider
          min={0}
          max={256}
          marks
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          value={[x.row.exchangeByteStart, x.row.exchangeByteEnd]}
          step={1} />
      }
    }
  ]

  const data: GridRowData[] = _.times(totalRenters, (n) => {
    const renterPk = hdkey.fromExtendedKey(privateKey).derive('m/' + (n + 1))
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
    <Container fluid>
      <Form>
        <FormGroup>
          <Form.Label>Complex Private Key</Form.Label>
          <Form.Control value={privateKey} onChange={(e) => {
            setPrivateKey(e.target.value)
          }}>

          </Form.Control>
          <Button onClick={() => {
            setPrivateKey(hdkey.fromMasterSeed(crypto.randomBytes(16)).privateExtendedKey);
          }}>Generate a new key</Button>
        </FormGroup>
        <Row>
          <Col>

            <FormGroup>
              <Form.Label>Total Renters</Form.Label>
              <Form.Control value={totalRenters} type="number" onChange={(e) => {
                setTotalRenters(parseInt(e.target.value, 10))
              }}>

              </Form.Control>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Form.Label>Overlap</Form.Label>
              <Form.Control value={overlap} type="number" onChange={(e) => {
                setOverlap(parseInt(e.target.value, 10))
              }}>

              </Form.Control>
            </FormGroup>
          </Col>
        </Row>


        {/*
        <div style={{ height: 700, width: '100%' }}>
          <DataGrid
            rowsPerPageOptions={[256, 512, 1024]}
            disableSelectionOnClick
            rows={data} columns={dataColumns}
            rowHeight={100}
            pageSize={5} checkboxSelection />
        </div>
*/}

        <Table>

          {data.map((row) => {
            return <TableRow>

              <TableCell width={10}>{row.id}</TableCell>
              <TableCell width={10}>{row.nodeId}</TableCell>
              <TableCell width={10}>{row.exchangeByteStart}</TableCell>
              <TableCell width={10}>{row.exchangeByteEnd}</TableCell>
              <TableCell>
                <Slider
                  marks
                  min={0}
                  max={256}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  value={[parseInt(Buffer.from(row.exchangeByteStart).toString(), 16), parseInt(Buffer.from(row.exchangeByteEnd).toString(), 16)]}
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
