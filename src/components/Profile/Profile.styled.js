import styled from '@emotion/styled';

export const ProfDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 54px;
  padding-bottom: 54px;
`
export const Description = styled.div`
  background-color: #f4f0ec;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`
export const Avatar = styled.img`
  display: block;
  width: 180px;
  margin-top: 20px;
  border-radius: 50%;
`
export const Name = styled.p`
  font-size: 24px;
  line-height: 1.5;
  font-weight: 20px;
  margin-top: 20px;
`
export const Text = styled.p`
  margin-top: 10px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 18px;
  color: #504e4c;
`
export const Stats = styled.ul`
  background-color: #fff4;
  width: 360px;
  display: flex;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 1px 0px 10px 0px rgba(66, 68, 90, 0.38);
`
export const StatsList = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #darkgray;
  padding: 6px;
  border-top: 2px solid #9f978f;
  :not(:last-child) {
    border-right: 1px solid #9f978f;
  }
  :not(:last-child) span {
    border-right: none;
  }
`
export const SLabel = styled.span`
  display: flex;
  font-size: 18px;
  line-height: 1.55;
  font-weight: 16px;
  text-align: center;
  justify-content: center;
  color: #544e4e;
`
export const SQuantity = styled.span`
  text-align: center;
  font-size: 18px;
  line-height: 1.55;
  font-weight: bold;
  margin: 10px auto;
  color: #4a4747;
`