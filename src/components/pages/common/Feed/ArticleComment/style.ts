import More from "assets/icon/more";
import Report from "assets/icon/report";
import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const UserContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const ReportContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${Color.gray[400]};
  cursor: pointer;
`;
export const ReportSVG = styled(Report)`
  width: 5px;
`;

export const MoreSVG = styled(More)`
  width: 10px;
`;

export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
