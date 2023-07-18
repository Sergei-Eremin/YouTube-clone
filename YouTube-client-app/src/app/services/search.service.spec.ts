import { TestBed } from '@angular/core/testing';
import { IFinalResponse } from 'src/@types/youTubeSearchResponse';
import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SearchService] });
    service = TestBed.inject(SearchService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`cards has default value`, () => {
    expect(service.cards).toEqual([]);
  });

  it('проверяем длину полученного массива после применения search и snippet.title карточки(angular)', () => {
    const arrayCards: IFinalResponse = {
      kind: 'some_kind',
      etag: 'some_etag',
      items: [
        {
          kind: 'item_kind',
          etag: 'item_etag',
          id: 'item_id',
          snippet: {
            publishedAt: '2023-07-18',
            channelId: 'channel_id',
            title: 'Angular Basics',
            description: 'This is an Angular basics tutorial',
            thumbnails: {
              default: { url: 'default_thumbnail_url', width: 120, height: 90 },
              medium: { url: 'medium_thumbnail_url', width: 320, height: 180 },
              high: { url: 'high_thumbnail_url', width: 480, height: 360 },
              standard: { url: 'standard_thumbnail_url', width: 640, height: 480 },
              maxres: { url: 'maxres_thumbnail_url', width: 1280, height: 720 },
            },
            channelTitle: 'Some Channel',
            tags: ['angular', 'tutorial'],
            categoryId: 'category_id',
            liveBroadcastContent: 'none',
            localized: {
              title: 'Angular Basics',
              description: 'This is an Angular basics tutorial',
            },
            defaultAudioLanguage: 'en',
          },
          statistics: {
            viewCount: '1000',
            likeCount: '50',
            favoriteCount: '10',
            commentCount: '5',
          },
        },
        // ...
      ],
      pageInfo: {
        totalResults: 10,
        resultsPerPage: 5,
      },
    };
    service.value = 'Angular';

    service.search(arrayCards);

    expect(service.cards.length).toEqual(1);
    expect(service.cards[0].snippet.title).toContain('Angular');
  });

  it('длина массива должна быть равна 0 если совпадений не найдено', () => {
    const arrayCards: IFinalResponse = {
      kind: 'some_kind',
      etag: 'some_etag',
      items: [
        {
          kind: 'item_kind',
          etag: 'item_etag',
          id: 'item_id',
          snippet: {
            publishedAt: '2023-07-18',
            channelId: 'channel_id',
            title: 'React Components',
            description: 'This is a React components tutorial',
            thumbnails: {
              default: { url: 'default_thumbnail_url', width: 120, height: 90 },
              medium: { url: 'medium_thumbnail_url', width: 320, height: 180 },
              high: { url: 'high_thumbnail_url', width: 480, height: 360 },
              standard: { url: 'standard_thumbnail_url', width: 640, height: 480 },
              maxres: { url: 'maxres_thumbnail_url', width: 1280, height: 720 },
            },
            channelTitle: 'Some Channel',
            tags: ['react', 'tutorial'],
            categoryId: 'category_id',
            liveBroadcastContent: 'none',
            localized: {
              title: 'React Components',
              description: 'This is a React components tutorial',
            },
            defaultAudioLanguage: 'en',
          },
          statistics: {
            viewCount: '500',
            likeCount: '20',
            favoriteCount: '5',
            commentCount: '2',
          },
        },
        // ...
      ],
      pageInfo: {
        totalResults: 10,
        resultsPerPage: 5,
      },
    };
    service.value = 'Angular';

    service.search(arrayCards);

    expect(service.cards.length).toEqual(0);
  });
});
