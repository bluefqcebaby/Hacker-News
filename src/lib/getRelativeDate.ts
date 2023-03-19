import { formatDistance, subSeconds } from "date-fns";

export const getRelativeDate = (ms: number) => {
  const difference = new Date().getTime() - new Date(ms).getTime();
  const seconds = difference / 1000;
  return formatDistance(subSeconds(new Date(), seconds), new Date(), {
    addSuffix: true,
  });
};
