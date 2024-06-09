import { FC, memo } from "react";

type CountProps = {
  count: number;
}

export const Count: FC<CountProps> = memo(({count}) => {
  return (
    <p>{count} items left</p>
  );
})