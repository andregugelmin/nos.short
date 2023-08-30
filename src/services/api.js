import axios from "axios";

const api = axios.create({
	baseURL: "https://url.api.stdlib.com/temporary@0.3.0",
});


export async function createShortLink(data) {
	const response = await api.post("/create", data);
	return response.data;
}
