import type { ComponentType } from "react";

export type NotificationTypeName =
  | "PRICE BREAKOUT"
  | "LIQUIDITY SIGNAL"
  | "DOWNSIDE RISK";

export type NotificationTypeAlias = string;

export type NotificationTypeIcon = ComponentType<any>;

export type NotificationTypeTheme = {
  color: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
  borderColorL: string;
};

export type NotificationTypeItem = {
  symbol: NotificationTypeName;
  icon: NotificationTypeIcon;
  theme: NotificationTypeTheme;
  aliases: readonly NotificationTypeAlias[];
};

export type NotificationRegistry = Record<
  NotificationTypeName,
  NotificationTypeItem
>;

export type NotificationResolved = NotificationTypeItem;

export type NotificationInput = NotificationTypeName | (string & {});
