export interface CountryInfo {
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  ccn3: string;
  currencies?: {
    [currencyCode: string]: {
      name: string;
      symbol: string;
    };
  };
  capital?: string[];
  region: string;
  languages: {
    [key: string]: string;
  };
  area: number;
  timezones: string[];
}
