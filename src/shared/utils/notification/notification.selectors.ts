import { notificationRegistry } from "./notification.registry";
import type {
  NotificationResolved,
  NotificationTypeTheme,
} from "./notification.types";

const aliasIndex: Record<string, keyof typeof notificationRegistry> =
  Object.fromEntries(
    Object.values(notificationRegistry).flatMap((c) =>
      c.aliases.map((a) => [a.toLowerCase(), c.symbol]),
    ),
  ) as Record<string, keyof typeof notificationRegistry>;

export function getNotifcationType(input: string): NotificationResolved {
  const key = aliasIndex[input.toLowerCase()];
  return notificationRegistry[key] ?? notificationRegistry["PRICE BREAKOUT"];
}

export function getNotificationIcon(name: string) {
  return getNotifcationType(name).icon;
}

const defaultTheme: NotificationTypeTheme = {
  textColor: "rgba(156, 163, 175, 1)",
  bgColor: "rgba(156, 163, 175, 0.12)",
  borderColor: "rgba(156, 163, 175, 0.3)",
  borderColorL: "rgba(156, 163, 175, 0.3)",
  color: "rgba(156, 163, 175, 1)",
};

export function getNotificationTypeTheme(name: string): NotificationTypeTheme {
  const c = getNotifcationType(name);

  return c?.theme ?? defaultTheme;
}
