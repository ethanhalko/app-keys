import data from './data.json';

export function index() {
  return data;
}

export function find(appId: string) {
  try {
    const id = parseInt(appId);

    return data.find((app) => app.id === id);
  } catch (e) {
    console.error(e);
  }
}
