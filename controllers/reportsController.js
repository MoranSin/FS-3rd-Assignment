const { findReports, retrieveReport, createReport, updateReport, deleteReport } = require('../repositories/reportsRepository')
// const reports = new ReportsRepository()
const { EntityNotFoundError, PropertyNotFoundError, BadRequestError } = require('../Errors/errors');

let counter = 5
exports.reportsController = {
    async getReports (req, res, next) {
        try {
            const result = {
                status: 200,
                message: '',
                data: await findReports(),
            }
            if (result.data.length === 0 || !result.data) throw new EntityNotFoundError('Reports')
            res.status(result.status)
            res.json(result.message || result.data)
        } catch (error) {
            next(error)
        }
    },
    async getReportById (req, res, next) {
        const { id } = req.params
        try {
            const result = {
                status: 200,
                message: '',
                data: await retrieveReport(id)
            }
            if (result.data.length === 0 || !result.data) throw new EntityNotFoundError('Report')
            res.status(result.status)
            res.json(result.message || result.data)
        } catch (error) {
            next(error)
        }
    },

    async addReport (req, res, next) {
        const report = req.body
        report.id = ++counter
        try {
            if (Object.keys(req.body).length === 0) throw new BadRequestError('create');
            const { name , location, deathCount, damage } = report;
            if (!name || !location || !deathCount || !damage) throw new PropertyNotFoundError('report - missing arguments');
            const result = {
                status: 201,
                message: '',
                data: await createReport(report)
            }
            res.status(result.status)
            res.json(result.message || result.data)
        } catch (error) {
            next(error)
        }
    },

    async updateReport (req, res, next) {
        const { body: report, params: { id } } = req
        try {
            if (Object.keys(req.body).length === 0) throw new BadRequestError('update');
            const result = {
                status: 200,
                message: '',
                data: await updateReport(id, report)
            }
            if (!result.data || result.data.length === 0) throw new EntityNotFoundError(`Request with id <${id}>`);
            res.status(result.status)
            res.json(result.message || result.data)
        } catch (error) {
            next(error)
        }
    },

    async deleteReport (req, res, next) {
        const { id } = req.params
        try {
            const result = {
                status: 200,
                message: '',
                data: await deleteReport(id)
            }
            if (!result.data || result.data.length === 0) throw new EntityNotFoundError(`Request with id <${id}>`);
            res.status(result.status)
            res.json(result.message || result.data)
        } catch (error) {
            next(error)
        }
    }
}
