import Parser from 'rss-parser';
import RSS_FEEDS from './config.js';

const parser = new Parser();

export async function fetchRSSFeeds() {
  try {
    const results = await Promise.all(
      RSS_FEEDS.map(async (feed) => {
        try {
          const feedData = await parser.parseURL(feed.url);
          return {
            source: {
              id: feed.id,
              name: feed.name,
              url: feed.url,
            },
            items: feedData.items.slice(0, 10).map(item => ({
              title: item.title || '',
              link: item.link || '',
              pubDate: item.pubDate || '',
              description: item.contentSnippet || item.content || '',
              guid: item.guid || item.id || item.link || '',
              sourceUrl: feed.url
            })),
          };
        } catch (error) {
          console.error(`Error fetching ${feed.name}:`, error);
          return {
            source: {
              id: feed.id,
              name: feed.name,
              url: feed.url,
            },
            error: error.message,
            items: [],
          };
        }
      })
    );

    return {
      timestamp: new Date().toISOString(),
      feeds: results,
    };
  } catch (error) {
    console.error('Error fetching RSS feeds:', error);
    throw error;
  }
}