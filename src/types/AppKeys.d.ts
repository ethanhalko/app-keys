export interface AppKey {
  id?: number;
  keyCodes: string[] | Record<string, string[]>;
  description: string;
}

export interface Section {
  name: string;
  keys?: AppKey[]
}

export interface App {
  id: number;
  name: string;
  developer: string;
  description?: string;
  logo?: string;
  sections: Section[]
}
