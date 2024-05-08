import { Typography as AntTypography } from 'antd';
import { ReactNode } from 'react';

const { Title, Text } = AntTypography;

type Props = {
  children: ReactNode;
  level?: 5 | 1 | 2 | 3 | 4;
  isTitle?: boolean;
  strong?: boolean;
};

export function Typography({
  strong,
  isTitle,
  level,
  children,
  ...props
}: Props) {
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
}
