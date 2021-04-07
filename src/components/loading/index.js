import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <LoadingBox>
      <SLoading />
    </LoadingBox>
  );
};

export default Loading;

const LoadingBox = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
  justify-content: center;
  align-items: center;
`;

const SpinLoading = keyframes`
   0% {
     transform: rotate(0deg);
   }
   100% {
     transform: rotate(360deg);
`;

const SLoading = styled.div`
  background-image: url("/images/logo.svg");
  /* border-top: 6px solid #42145f; Blue */
  /* border-bottom: 6px solid #42145f; Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${SpinLoading} 2s linear infinite;
`;
