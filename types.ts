
export interface Tour {
  id: string;
  name: string;
  description: string;
  schedule?: string;
  rates?: string;
  includes?: string;
  note?: string;
  imageUrl: string;
}

export interface GuideProfile {
  name: string;
  role: string;
  description: string;
}
