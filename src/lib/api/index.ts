import {ApiPaths} from "./paths";
import {apiFetch} from "./request";
import {IStoryDetails, IUser} from "./responseTypes";

export class APIClient {
  static async getStoryIds() {
    const result = await apiFetch<number[]>(ApiPaths.getStoryIds);
    if (result.ok) {
      return result.json;
    }

    return undefined;
  }

  static async getStoryDetail(id: number | string) {
    const result = await apiFetch<IStoryDetails>(
      `${ApiPaths.getStoryDetail}/${id}/.json`,
    );
    if (result.ok) {
      return result.json;
    }

    return undefined;
  }

  static async getUser(name: string) {
    const result = await apiFetch<IUser>(`${ApiPaths.getUserDetail}/${name}/.json`);
    if (result.ok) {
      return result.json;
    }

    return undefined;
  }

  static async getStories(indexes: number[]) {
    const promises = indexes.map((id) =>
      fetch(`${ApiPaths.getStoryDetail}/${id}/.json`).then((response) => response.json()),
    );
    const result = await Promise.all(promises);
    return result;
  }
}
