import { useLocation } from "react-router-dom";
import ArticleFeed from "../ArticleFeed";
import * as _ from "./style";
import { useInfiniteQuery } from "@tanstack/react-query";
import Loading from "components/common/Loading";
import Error from "components/common/Error";
import { useEffect, useState } from "react";
import { GetFeedList } from "utils/apis/poop/feed";
import { useInView } from "react-intersection-observer";

function List() {
  const [pagenum, setPagenum] = useState<number>(0);
  const { search } = useLocation();
  const [tag, setTag] = useState<string>("GENERAL");

  useEffect(() => {
    setTag(search.split("=")[1]);
  }, [search]);

  const { isLoading, isError, isFetching, data, refetch } = useInfiniteQuery({
    queryKey: ["getFeedList", { tag, pagenum }],
    queryFn: () => GetFeedList({ tag, pagenum }),
    select: (data) => ({
      pageParams: data.pageParams,
      pages: data.pages.flatMap((page) => page.feed),
    }),
    getNextPageParam: (lastPage) => {
      if (data && data.pageParams.length < lastPage.page_total)
        return pagenum + 1;
      return undefined;
    },
    onSuccess: () => {
      setPagenum(pagenum + 1);
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
