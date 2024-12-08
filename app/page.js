export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "科技创新推动可持续发展",
      excerpt: "最新研究显示，绿色科技创新正在加速全球可持续发展进程...",
      category: "科技",
      date: "2024-03-21"
    },
    {
      id: 2,
      title: "全球经济复苏展现新机遇",
      excerpt: "各国经济数据显示，后疫情时代经济复苏态势明显...",
      category: "经济",
      date: "2024-03-20"
    },
    // 可以添加更多新闻项
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">今日要闻</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map(news => (
          <article key={news.id} className="news-card">
            <div className="flex justify-between items-start mb-3">
              <span className="bg-gray-100 px-3 py-1 text-sm text-gray-600">
                {news.category}
              </span>
              <time className="text-sm text-gray-500">{news.date}</time>
            </div>
            <h2 className="news-title">{news.title}</h2>
            <p className="news-excerpt">{news.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
