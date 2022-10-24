export interface ApplicationPost {
  id?: string;
  snippet?: {
    publishedAt: Date;
    applicationUserId: string;
    title: string;
    description: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width: number;
        height: number;
      };
    };
    tags: string[];
  };
}
