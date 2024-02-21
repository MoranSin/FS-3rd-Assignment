const MongoStorage = require('../data/mongoStorage')

    if(process.env.DB_HOST && process.env.DB_USER && process.env.DB_PASS)
    { this.storage = new MongoStorage('report') }

    const findReports = () => this.storage.find()

    const retrieveReport = (id) => this.storage.retrieve(id)

    const createReport = (report) => this.storage.create(report)

    const updateReport =  (id, report) => this.storage.update(id, report)

    const deleteReport = (id) => this.storage.delete(id)

module.exports = { findReports, retrieveReport, createReport, updateReport, deleteReport };

