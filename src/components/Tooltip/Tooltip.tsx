import { mainColor } from "@/styles/theme";
import styled from "styled-components";

type Props = {
  text: string;
  style?: React.CSSProperties;
  className: string;
};
const Tooltip = ({ text, style, className }: Props) => {
  return (
    <Container style={style} className={className}>
      <span>{text}</span>
    </Container>
  );
};

export default Tooltip;

const Container = styled.div`
  padding: 6px;
  position: absolute;
  font-size: 12px;
  background-color: ${mainColor.gray};
  border-radius: 4px;
`;
