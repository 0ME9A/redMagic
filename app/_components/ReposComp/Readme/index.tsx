"use client";
import { RootState } from "app/_components/RTK/Store/store";
import { randomNum } from "app/_functions/functions";
import { readmeType } from "app/_types/Repos";
import { useSelector } from "react-redux";
import ArticleSkeleton from "app/_components/Skeleton/Repo/Article";
import AsideSkeleton from "app/_components/Skeleton/Repo/Aside";
import Article from "app/_components/ReposComp/Readme/Article";
import Aside from "app/_components/ReposComp/Readme/Aside";

const colorDark = [
    'dark:fill-very-dark/50',
    'dark:fill-very-dark',
    'dark:fill-dark/50',
    'dark:fill-dark',
    'dark:fill-darkII/50',
    'dark:fill-darkII',
]
const color = [
    'fill-very-light/50',
    'fill-very-light',
    'fill-light/50',
    'fill-light',
    'fill-lightII/50',
    'fill-lightII',
]

export default function Index({ repo, lang, devs }: readmeType) {
    const aside = useSelector((state: RootState) => state.counter.commonProperties.projectLayout.aside);

    return (
        <div className="overflow-x-hidden">
            {repo.status === 200 ? (
                <svg id="visual"
                    viewBox="0 0 900 250"
                    height="250"
                    className="w-fit sm:scale-x-[2] lg:scale-x-[3] xl:scale-x-[3.5]"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1">
                    <path d="M0 26L13.7 29.3C27.3 32.7 54.7 39.3 82 44.3C109.3 49.3 136.7 52.7 163.8 54.3C191 56 218 56 245.2 52.3C272.3 48.7 299.7 41.3 327 38.8C354.3 36.3 381.7 38.7 409 40.3C436.3 42 463.7 43 491 45.2C518.3 47.3 545.7 50.7 573 50.7C600.3 50.7 627.7 47.3 654.8 44C682 40.7 709 37.3 736.2 36C763.3 34.7 790.7 35.3 818 37.3C845.3 39.3 872.7 42.7 886.3 44.3L900 46L900 0L886.3 0C872.7 0 845.3 0 818 0C790.7 0 763.3 0 736.2 0C709 0 682 0 654.8 0C627.7 0 600.3 0 573 0C545.7 0 518.3 0 491 0C463.7 0 436.3 0 409 0C381.7 0 354.3 0 327 0C299.7 0 272.3 0 245.2 0C218 0 191 0 163.8 0C136.7 0 109.3 0 82 0C54.7 0 27.3 0 13.7 0L0 0Z"
                        className={`${color[randomNum(5)]} ${colorDark[randomNum(5)]}`}></path>
                    <path d="M0 124L13.7 129.8C27.3 135.7 54.7 147.3 82 150.2C109.3 153 136.7 147 163.8 138.7C191 130.3 218 119.7 245.2 111C272.3 102.3 299.7 95.7 327 97.3C354.3 99 381.7 109 409 108.2C436.3 107.3 463.7 95.7 491 96C518.3 96.3 545.7 108.7 573 109.8C600.3 111 627.7 101 654.8 96.5C682 92 709 93 736.2 95.2C763.3 97.3 790.7 100.7 818 100.7C845.3 100.7 872.7 97.3 886.3 95.7L900 94L900 44L886.3 42.3C872.7 40.7 845.3 37.3 818 35.3C790.7 33.3 763.3 32.7 736.2 34C709 35.3 682 38.7 654.8 42C627.7 45.3 600.3 48.7 573 48.7C545.7 48.7 518.3 45.3 491 43.2C463.7 41 436.3 40 409 38.3C381.7 36.7 354.3 34.3 327 36.8C299.7 39.3 272.3 46.7 245.2 50.3C218 54 191 54 163.8 52.3C136.7 50.7 109.3 47.3 82 42.3C54.7 37.3 27.3 30.7 13.7 27.3L0 24Z"
                        className={`${color[randomNum(5)]} ${colorDark[randomNum(5)]}`}></path>
                    <path d="M0 191L13.7 191.5C27.3 192 54.7 193 82 189.7C109.3 186.3 136.7 178.7 163.8 180.3C191 182 218 193 245.2 194.3C272.3 195.7 299.7 187.3 327 182.7C354.3 178 381.7 177 409 178.7C436.3 180.3 463.7 184.7 491 189.7C518.3 194.7 545.7 200.3 573 202C600.3 203.7 627.7 201.3 654.8 196.3C682 191.3 709 183.7 736.2 181.2C763.3 178.7 790.7 181.3 818 180.5C845.3 179.7 872.7 175.3 886.3 173.2L900 171L900 92L886.3 93.7C872.7 95.3 845.3 98.7 818 98.7C790.7 98.7 763.3 95.3 736.2 93.2C709 91 682 90 654.8 94.5C627.7 99 600.3 109 573 107.8C545.7 106.7 518.3 94.3 491 94C463.7 93.7 436.3 105.3 409 106.2C381.7 107 354.3 97 327 95.3C299.7 93.7 272.3 100.3 245.2 109C218 117.7 191 128.3 163.8 136.7C136.7 145 109.3 151 82 148.2C54.7 145.3 27.3 133.7 13.7 127.8L0 122Z"
                        className={`${color[randomNum(5)]} ${colorDark[randomNum(5)]}`}></path>
                    <path d="M0 224L13.7 226C27.3 228 54.7 232 82 231.2C109.3 230.3 136.7 224.7 163.8 222.2C191 219.7 218 220.3 245.2 222.3C272.3 224.3 299.7 227.7 327 226.5C354.3 225.3 381.7 219.7 409 216.3C436.3 213 463.7 212 491 214C518.3 216 545.7 221 573 223.5C600.3 226 627.7 226 654.8 225.2C682 224.3 709 222.7 736.2 221.8C763.3 221 790.7 221 818 220.7C845.3 220.3 872.7 219.7 886.3 219.3L900 219L900 169L886.3 171.2C872.7 173.3 845.3 177.7 818 178.5C790.7 179.3 763.3 176.7 736.2 179.2C709 181.7 682 189.3 654.8 194.3C627.7 199.3 600.3 201.7 573 200C545.7 198.3 518.3 192.7 491 187.7C463.7 182.7 436.3 178.3 409 176.7C381.7 175 354.3 176 327 180.7C299.7 185.3 272.3 193.7 245.2 192.3C218 191 191 180 163.8 178.3C136.7 176.7 109.3 184.3 82 187.7C54.7 191 27.3 190 13.7 189.5L0 189Z"
                        className={`${color[randomNum(5)]} ${colorDark[randomNum(5)]}`}></path>
                    <path d="M0 251L13.7 251C27.3 251 54.7 251 82 251C109.3 251 136.7 251 163.8 251C191 251 218 251 245.2 251C272.3 251 299.7 251 327 251C354.3 251 381.7 251 409 251C436.3 251 463.7 251 491 251C518.3 251 545.7 251 573 251C600.3 251 627.7 251 654.8 251C682 251 709 251 736.2 251C763.3 251 790.7 251 818 251C845.3 251 872.7 251 886.3 251L900 251L900 217L886.3 217.3C872.7 217.7 845.3 218.3 818 218.7C790.7 219 763.3 219 736.2 219.8C709 220.7 682 222.3 654.8 223.2C627.7 224 600.3 224 573 221.5C545.7 219 518.3 214 491 212C463.7 210 436.3 211 409 214.3C381.7 217.7 354.3 223.3 327 224.5C299.7 225.7 272.3 222.3 245.2 220.3C218 218.3 191 217.7 163.8 220.2C136.7 222.7 109.3 228.3 82 229.2C54.7 230 27.3 226 13.7 224L0 222Z"
                        className={`${color[randomNum(5)]} ${colorDark[randomNum(5)]}`}></path>
                </svg>
            ) : (<div className="w-full h-[400px] bg-gradient-to-l from-very-light to-white dark:from-very-dark dark:to-dark animate-pulse"></div>)}

            <div className="lg:container mx-auto py-2 space-y-3 flex gap-3 relative">
                {repo.status === 200 ? (<Article
                    aside={aside}
                    repo={repo.data} />
                ) : (<ArticleSkeleton />)}

                {repo.status === 200 ? (
                    <Aside
                        aside={aside}
                        repo={repo.data}
                        langs={lang.data}
                        devs={devs.data}
                    />
                ) : (<AsideSkeleton />)}
            </div>
        </div>
    );
}
