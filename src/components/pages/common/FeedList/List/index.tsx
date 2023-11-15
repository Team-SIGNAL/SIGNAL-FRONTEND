import * as _ from "./style";
import { useLocation } from "react-router-dom";
import Loading from "components/common/Loading";
import Error from "components/common/Error";
import ArticleFeed from "../ArticleFeed";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { GetFeedListApi } from "utils/apis/feed";
import { FeedListTagType } from "types/feed.type";

function List() {
  const [page, setPage] = useState<number>(0);
  const { search } = useLocation();
  const [tag, setTag] = useState<string>("GENERAL");

  useEffect(() => {
    setTag(search.split("=")[1]);
  }, [search]);

  const { isLoading, isError, isFetching, data, refetch } = useInfiniteQuery({
    queryKey: ["getFeedList", { tag, page }],
    queryFn: () => GetFeedListApi(tag as FeedListTagType, page, 10),
    select: (data) => ({
      pageParams: data.pageParams,
      pages: data.pages.flatMap((page) => page.feed_list),
    }),
    getNextPageParam: (lastPage) => {
      if (!lastPage.last)
        return page + 1;
      return undefined;
    },
    onSuccess: () => {
      setPage(page + 1);
    },
    retryOnMount: false,
    retry: 0,
    enabled: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const [inViewRef, inView] = useInView();

  useEffect(() => {
    refetch();
  }, [inView, refetch]);

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <Error />;
  } else {
    return (
      <>
        <_.Container>
          {data && data.pages.map((d) => <ArticleFeed {...d} />)}
          <div ref={inViewRef}>{isFetching && <Loading />}</div>
        </_.Container>
      </>
    );
  }
}

export default List;
