import { environment } from 'src/environments/environment';

export const dragonsAPI = `${environment.spacexAPI}/dragons`;
export const capsulesAPI = `${environment.spacexAPI}/capsules`;
export const landpadsAPI = `${environment.spacexAPI}/landpads`;
export const launchesAPI = `${environment.spacexAPI}/launches`;
export const shipsAPI = `${environment.spacexAPI}/ships`;
export const payloadsAPI = `${environment.spacexAPI}/payloads`;

export const API = {
  getDragonQueryData: `${dragonsAPI}/query`,
  getCapsulesQueryData: `${capsulesAPI}/query`,
};
