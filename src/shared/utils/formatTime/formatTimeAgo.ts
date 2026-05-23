import { formatDistanceToNowStrict, isValid } from "date-fns";

export function formatShortTimeAgo(date: string) {
  const parsedDate = new Date(date);

  if (!isValid(parsedDate)) {
    return "Invalid date";
  }

  const result = formatDistanceToNowStrict(parsedDate);

  return result
    .replace(" minutes", "m ago")
    .replace(" minute", "m ago")
    .replace(" hours", "h ago")
    .replace(" hour", "h ago")
    .replace(" days", "d ago")
    .replace(" day", "d ago")
    .replace(" years", "y ago")
    .replace(" year", "y ago");
}

export function formatMiddleTimeAgo(date: string) {
  const parsedDate = new Date(date);

  if (!isValid(parsedDate)) {
    return "Invalid date";
  }

  const result = formatDistanceToNowStrict(parsedDate);

  return result
    .replace(" minutes", " min ago")
    .replace(" minute", " mins ago")
    .replace(" hours", " hour ago")
    .replace(" hour", " hours ago")
    .replace(" day", " days ago")
    .replace(" years", " year ago")
    .replace(" year", " years ago");
}
