import React from "react";
import LoadMoreButton from "@components/common/load-more-button/LoadMoreButton";
import MyPositionCard from "@components/common/my-position-card/MyPositionCard";
import { GridWrapper, CardListWrapper } from "./MyPositionCardList.styles";
import { SHAPE_TYPES, skeletonStyle } from "@constants/skeleton.constant";

interface MyPositionCardListProps {
  loadMore?: boolean;
  isFetched: boolean;
  onClickLoadMore?: () => void;
  list: any[];
  currentIndex: number;
  routeItem: (id: number) => void;
  mobile: boolean;
}

const MyPositionCardList: React.FC<MyPositionCardListProps> = ({
  loadMore,
  isFetched,
  onClickLoadMore,
  list,
  currentIndex,
  routeItem,
  mobile,
}) => (
  <CardListWrapper>
    <GridWrapper>
      {isFetched &&
        list.length > 0 &&
        list.map((item, idx) => (
          <MyPositionCard item={item} key={idx} routeItem={routeItem} />
        ))}
      {!isFetched &&
        Array.from({ length: 4 }).map((_, idx) => (
          <span
            key={idx}
            className="card-skeleton"
            css={skeletonStyle("100%", SHAPE_TYPES.ROUNDED_SQUARE)}
          />
        ))}
    </GridWrapper>
    {!mobile ? (
      loadMore &&
      onClickLoadMore && (
        <LoadMoreButton show={loadMore} onClick={onClickLoadMore} />
      )
    ) : (
      <div className="box-indicator">
        <span className="current-page">{currentIndex}</span>
        <span>/</span>
        <span>{list.length}</span>
      </div>
    )}
  </CardListWrapper>
);

export default MyPositionCardList;
