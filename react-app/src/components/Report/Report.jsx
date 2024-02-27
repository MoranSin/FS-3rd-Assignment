import React , { Component } from "react";
import './Report.css';
import { Table } from 'semantic-ui-react'

class Report extends Component {
    render() {
    return (
      <Table.Row>
          <Table.Cell className="name">Earthquake</Table.Cell>
          <Table.Cell className="location">Japan</Table.Cell>
          <Table.Cell className="deathCount">1456</Table.Cell>
          <Table.Cell className="damage">big</Table.Cell>
      </Table.Row>
    );
  }
}

export default Report;
