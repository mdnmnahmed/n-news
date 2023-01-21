import Link from "next/link";
import getDate from "../../utils/getDate";

export default function NewsCard({ newsData }) {
    return (
        <>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col w-full">
                    <img width="100%" src="https://numan-dev.web.app/images/projects/novies.png" />
                </div>
                <div class="md:flex-grow">
                    <h1 class="text-2xl font-medium text-white title-font mb-2">
                        {newsData?.title}
                    </h1>
                    <div class="leading-relaxed" dangerouslySetInnerHTML={{ __html: newsData?.description }} />
                    <div className="flex justify-between m-4 mb-0">
                        <span class="font-semibold title-font text-white inline-flex items-center justify-center px-6 py-1 leading-none bg-teal-500 rounded ">{newsData?.topic}</span>
                        <span class="mt-1 text-gray-500 text-sm">
                            {getDate(newsData?.createdAt)} {` `}
                            by Num
                        </span>
                    </div>

                    <Link href="/" class="text-indigo-400 inline-flex items-center mt-4">Read More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    )
}