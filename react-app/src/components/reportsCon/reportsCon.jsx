import React, { Component } from "react";
import "./reportsCon.css";
import Report from "../Report/Report";
import { Table } from 'semantic-ui-react'

class ReportsCon extends Component {


    render() {
    return (
      <div className="reportsCon">
          <div className="labelsCon">
              <Table singleLine>
              <Table.Header>
              <Table.Row>
              <Table.HeaderCell >name</Table.HeaderCell>
              <Table.HeaderCell >location</Table.HeaderCell>
              <Table.HeaderCell >death count</Table.HeaderCell>
              <Table.HeaderCell >damage</Table.HeaderCell>
              </Table.Row>
              </Table.Header>

              <Table.Body>
          <Report />
              </Table.Body>
              </Table>
          </div>
      </div>
    );
  }
}

export default ReportsCon;
