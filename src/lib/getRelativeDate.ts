import { formatDistance, subDays, subMinutes, subSeconds } from "date-fns";

export const getRelativeDate = (ms: number) => {
  const difference = new Date().getTime() - new Date(ms).getTime();
  const seconds = difference / 1000;
  if (seconds > 1) {
    return formatDistance(subSeconds(new Date(), seconds), new Date(), {
      addSuffix: true,
    });
  }
  const minutes = seconds / 60;
  if (minutes > 1) {
    return formatDistance(subMinutes(new Date(), minutes), new Date(), {
      addSuffix: true,
    });
  }
  const hours = minutes / 60;
  if (hours > 1) {
    return formatDistance(subMinutes(new Date(), minutes), new Date(), {
      addSuffix: true,
    });
  }
  const days = hours / 24;
  if (days > 1) {
    return formatDistance(subDays(new Date(), days), new Date(), {
      addSuffix: true,
    });
  }
};
