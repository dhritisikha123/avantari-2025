import React from "react"
import styled from "styled-components"

export const CATEGORIES = [
  "ALL",
  "HARDWARE",
  "AI",
  "SOFTWARE",
  "MANUFACTURING",
  "PROCESS",
]

const Bar = styled.div`
  position: sticky;
  top: 64px; /* sits just below the fixed global header */
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #d5d6d6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: clamp(20px, calc(-17.143px + 9.5238vw), 120px);
  padding-right: clamp(20px, calc(-17.143px + 9.5238vw), 120px);

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    top: 70px;
  }

  @media only screen and (min-width: 769px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding-top: 0;
    padding-bottom: 0;
    gap: 0;
  }

  @media only screen and (min-width: 1024px) {
    top: 88px;
  }

  @media only screen and (min-width: 1440px) {
    height: clamp(60px, calc(54.857px + 0.3571vw), 64px);
    padding-left: clamp(120px, calc(-240px + 25vw), 400px);
    padding-right: clamp(120px, calc(-240px + 25vw), 400px);
  }
`

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;

  @media only screen and (min-width: 769px) {
    flex-direction: row;
    align-items: center;
    gap: 28px;
  }

  @media only screen and (min-width: 1440px) {
    gap: clamp(28px, calc(22.857px + 0.3571vw), 32px);
  }
`

/* Mobile shows two explicit rows (ALL/HARDWARE/AI/SOFTWARE, then
   MANUFACTURING/PROCESS) per Figma; from tablet up both rows collapse via
   display:contents so every button flows into one row on the parent flex. */
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;

  @media only screen and (min-width: 769px) {
    display: contents;
  }
`

const CategoryButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.52px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  background: ${({ $active }) => ($active ? "#000000" : "transparent")};
  color: ${({ $active }) => ($active ? "#c3ff00" : "#4d4d4d")};
  padding: ${({ $active }) => ($active ? "6px 12px" : "0")};

  @media only screen and (min-width: 769px) {
    line-height: 20px;
    padding: ${({ $active }) => ($active ? "8px 14px" : "0")};
  }

  &:hover {
    color: ${({ $active }) => ($active ? "#c3ff00" : "#000000")};
  }
`

const Count = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.52px;
  color: #4d4d4d;
  margin: 0;
  white-space: nowrap;
  display: none;

  @media only screen and (min-width: 769px) {
    display: block;
  }
`

const PRIMARY_ROW = CATEGORIES.slice(0, 4)
const SECONDARY_ROW = CATEGORIES.slice(4)

const renderButton = (cat, active, onSelect) => (
  <CategoryButton
    key={cat}
    $active={active === cat}
    onClick={() => onSelect(cat)}
  >
    {cat}
  </CategoryButton>
)

const FilterBar = ({ active, onSelect, total }) => (
  <Bar>
    <Categories>
      <Row>{PRIMARY_ROW.map(cat => renderButton(cat, active, onSelect))}</Row>
      <Row>{SECONDARY_ROW.map(cat => renderButton(cat, active, onSelect))}</Row>
    </Categories>
    <Count>{total} ARTICLES</Count>
  </Bar>
)

export default FilterBar
