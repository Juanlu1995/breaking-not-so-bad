export interface GenericObject {
  [key: string]: any;
}

export interface Character {
  readonly id: number;
  readonly name: string;
  readonly birthday: string;
  readonly occupation: string[];
  readonly img: string;
  readonly status: string;
  readonly nickname: string;
  readonly appearance: number[];
  readonly portrayed: string;
  readonly category: string[];
}
