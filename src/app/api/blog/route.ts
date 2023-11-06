import { NextResponse } from "next/server";
import Parser from "rss-parser"

interface FeedItem {
    title?: string;
    author?: string;
    pubDate: string;
    link?: string;
    cover_image?: string;
    description: string;
}

export async function GET() {

    try {
        let parser = new Parser({
            customFields: {
                item: ['cover_image', 'dc:creator', 'pubDate'],
            },
        });

        let feed = await parser.parseURL('https://blog.nibmcs.org/rss.xml');

        let feedItems: FeedItem[] = [];

        feed.items.forEach((item) => {
            let content = item.content?.match(/<p>(.*?)<\/p>/g)?.map(p => p.replace(/<\/?p>/g, '')).join('').trim();

            let truncatedContent =
                content?.slice(0, content.lastIndexOf(' ', 170)) + '...';

            let feedItem = {
                title: item.title,
                author: item["dc:creator"],
                pubDate: item.pubDate,
                link: item.link,
                cover_image: item.cover_image,
                description: truncatedContent,
            };

            feedItems.push(feedItem);
        });

        return NextResponse.json(feedItems);

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
