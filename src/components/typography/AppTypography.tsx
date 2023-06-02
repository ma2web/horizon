import { Typography } from 'antd';
import { ReactNode } from 'react';
const { Title, Text } = Typography;

type Props = {
  children: ReactNode;
  level?: 5 | 1 | 2 | 3 | 4 | undefined;
  isTitle?: boolean;
  strong?: boolean;
};

const AppTypography = ({
  strong,
  isTitle,
  level,
  children,
  ...props
}: Props) => {
  return (
    <>
      {level || isTitle ? (
        <Title level={level} {...props}>
          {children}
        </Title>
      ) : (
        <Text strong={strong} {...props}>
          {children}
        </Text>
      )}
    </>
  );
};

export default AppTypography;
