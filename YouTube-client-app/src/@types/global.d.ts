declare global {
  interface Window {
    analytics: undefined;
  }

  interface IBaseResponse {
    kind: string;
    etag: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
    items: ResponseItem[];
  }

  interface ResponseItem {
    kind: string;
    etag: string;
    id: string;
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: Thumbnail;
        medium: Thumbnail;
        high: Thumbnail;
        standard: Thumbnail;
        maxres: Thumbnail;
      };
      channelTitle: string;
      tags: string[];
      categoryId: string;
      liveBroadcastContent: string;
      localized: {
        title: string;
        description: string;
      };
      defaultAudioLanguage: string;
    };
    statistics: Statistic;
  }

  interface Thumbnail {
    url: string;
    width: number;
    height: number;
  }

  interface Statistic {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  }
}

export {};
