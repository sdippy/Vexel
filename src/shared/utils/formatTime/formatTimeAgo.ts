import { formatDistanceToNowStrict } from "date-fns";

export function formatShortTimeAgo(date: string) {
  const result = formatDistanceToNowStrict(new Date(date));

  return result
    .replace(" minutes", "m ago")
    .replace(" minute", "m ago")
    .replace(" hours", "h ago")
    .replace(" hour", "h ago")
    .replace(" days", "d ago")
    .replace(" day", "d ago")
    .replace(" year", "y ago")
    .replace(" years", "y agos");
}
