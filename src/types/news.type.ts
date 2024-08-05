export interface News {
  id: number;
  title: string;
  author: string;
  publicationdate: Date;
  content: string;
  tags: string;
  imageurl: string;
  created_at: Date;
  updated_at: Date;
}

export interface NewsParams {
  limit?: number;
  page?: number;
  from?: Date;
  to?: Date;
  q?: string;
}
