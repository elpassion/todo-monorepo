import axios from "axios";
import { IMessageDto } from "../dtos";

export class Api {
  private headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  private api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: this.headers
  });

  public async getWelcomeMessage(): Promise<IMessageDto> {
    const response = await this.api.get<IMessageDto>("/welcome");

    return response.data;
  }
}
