import data from './data.json';
export function index() {
  return data;
}
export function find(id: number) {
  return data.find((app) => app.id === id);
}
