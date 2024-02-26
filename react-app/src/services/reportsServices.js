import axios from "axios";

const http = axios.create({
    baseURL: "https://disasters-report.onrender.com/api/"
});

class ReportsService {

    state = {
        reports: []
    };

    getReport(id) {
        return http.get(`/reports/${id}`);
    }

    createReport(data) {
        return http.post("/reports", data);
    }

    updateReport(id, data) {
        return http.put(`/reports/${id}`, data);
    }

    deleteReport(id) {
        return http.delete(`/reports/${id}`);
    }

    getReports() {
        return http.get("/reports").then(response => {this.setState({ reports:response.data})
        });
    }
}

export default new ReportsService();
