import { useMarketNews } from "@/shared/hooks/useMarketNews";
import NewsCardBig from "../shared/components/ui/news/NewsCardBig";
import NewsCardMini from "../shared/components/ui/news/NewsCardMini";

export default function News() {
  const { data = [] } = useMarketNews(10);
  const latestNews = data[0];

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col">
        <h2 className="text-[24px] font-semibold font-hanken text-[#E1E2EC]">
          Market Intelligence
        </h2>
        <p className="text-[16px] font-inter text-[#C2C6D6]">
          Real-time institutional-grade news feed and sentiment analysis.
        </p>
      </div>

      <div className="w-full flex flex-col gap-[16px]">
        <div>
          {latestNews && (
            <NewsCardBig
              key={latestNews.id}
              topic={latestNews.topic}
              label={latestNews.label}
              description={latestNews.description}
              typeTopic={latestNews.typeTopic}
              imageUrl={latestNews.imageUrl}
              createdAt={latestNews.createdAt}
              keywords={latestNews.keywords}
              timeToRead={latestNews.timeToRead}
            />
          )}
        </div>
        <div className="w-full grid grid-cols-2 gap-[16px]">
          {data.slice(1).map((item: any) => (
            <NewsCardMini
              key={item.id}
              topic={item.topic}
              label={item.label}
              description={item.description}
              typeTopic={item.typeTopic}
              imageUrl={item.imageUrl}
              createdAt={item.createdAt}
              keywords={item.keywords}
              timeToRead={item.timeToRead}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
