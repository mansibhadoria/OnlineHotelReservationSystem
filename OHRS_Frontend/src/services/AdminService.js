import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8080/hotel-reservation/admin"


class AdminService {
     getAdminById(adminId) {
          return axios.get(ADMIN_API_BASE_URL + "/" + adminId)
     }
     loginAdmin(admin) {
          return axios.post(ADMIN_API_BASE_URL + "/" + "/login", admin);
     }
}

export default new AdminService();