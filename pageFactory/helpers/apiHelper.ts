import axios from 'axios';

class ApiHelper {
    private baseUrl: string;
    private headers: Record<string, string>;

    constructor(baseUrl: string, headers: Record<string, string> = {}) {
        this.baseUrl = baseUrl;
        this.headers = headers; // Allow passing authentication headers
    }

    // Generic response type is replaced with 'any' or 'Response'
    public async getHelper<T>(endpoint: string, params?: Record<string, any>): Promise<any> {
        try {
            console.log(`GET: ${this.baseUrl}${endpoint} with params`, params);
            return await axios.get<T>(`${this.baseUrl}${endpoint}`, { params, headers: this.headers });
        } catch (error) {
            this.handleError(error, 'GET', endpoint);
            return undefined;
        }
    }

    public async postHelper<T, D = any>(endpoint: string, data?: D): Promise<any> {
        try {
            console.log(`POST: ${this.baseUrl}${endpoint} with data`, data);
            return await axios.post<T>(`${this.baseUrl}${endpoint}`, data, { headers: this.headers });
        } catch (error) {
            this.handleError(error, 'POST', endpoint);
            return undefined;
        }
    }

    public async putHelper<T, D = any>(endpoint: string, data?: D): Promise<any> {
        try {
            console.log(`PUT: ${this.baseUrl}${endpoint} with data`, data);
            return await axios.put<T>(`${this.baseUrl}${endpoint}`, data, { headers: this.headers });
        } catch (error) {
            this.handleError(error, 'PUT', endpoint);
            return undefined;
        }
    }

    public async deleteHelper<T>(endpoint: string): Promise<any> {
        try {
            console.log(`DELETE: ${this.baseUrl}${endpoint}`);
            return await axios.delete<T>(`${this.baseUrl}${endpoint}`, { headers: this.headers });
        } catch (error) {
            this.handleError(error, 'DELETE', endpoint);
            return undefined;
        }
    }

    private handleError(error: any, method: string, endpoint: string): void {
        // Here, error could be any generic error object
        if (error.response) {
            console.error(`${method} request to ${endpoint} failed with status ${error.response.status}:`, error.response.data);
        } else if (error.request) {
            console.error(`${method} request to ${endpoint} failed: No response received`);
        } else {
            console.error(`${method} request to ${endpoint} failed: ${error.message}`);
        }
    }
}

export default ApiHelper;