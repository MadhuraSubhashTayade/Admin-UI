import React from "react";
import {
  RxDoubleArrowLeft,
  RxDoubleArrowRight,
  RxChevronLeft,
  RxChevronRight,
} from "react-icons/rx";
import { StyledPageDiv, StyledPageBtn } from "../styles/Pagination.styles";

interface PaginationProps {
  nPages: number;
  currentPage: number;
  setCurrentPage: (pageNum: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  nPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const PrevPage = () => currentPage !== 1 && setCurrentPage(currentPage - 1);
  const NextPage = () => {
    console.log(currentPage, nPages);
    return currentPage !== nPages && setCurrentPage(currentPage + 1);
  };

  return (
    <StyledPageDiv>
      <StyledPageBtn onClick={() => setCurrentPage(1)}>
        <RxDoubleArrowLeft className="icon left-icon" />
      </StyledPageBtn>
      <StyledPageBtn onClick={PrevPage}>
        <RxChevronLeft className="icon" />
      </StyledPageBtn>
      {pageNumbers.map((pageNum) => {
        return (
          <StyledPageBtn key={pageNum} onClick={() => setCurrentPage(pageNum)}>
            <span
              className={
                currentPage === pageNum ? "active-btn" : "inactive-btn"
              }
            >
              {pageNum}
            </span>
          </StyledPageBtn>
        );
      })}
      <StyledPageBtn onClick={NextPage}>
        <RxChevronRight className="icon" />
      </StyledPageBtn>
      <StyledPageBtn onClick={() => setCurrentPage(nPages)}>
        <RxDoubleArrowRight className="icon right-icon" />
      </StyledPageBtn>
    </StyledPageDiv>
  );
};

export default Pagination;
