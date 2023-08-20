import styled, { css } from "styled-components";

// 가운데 정렬
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 양쪽 정렬
export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// 중앙 정렬
export const positionCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

// 상단 고정
export const positionFixed = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
`;