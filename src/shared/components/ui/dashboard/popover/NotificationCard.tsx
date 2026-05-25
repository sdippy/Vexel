import { NavLink } from "react-router-dom";
import {
  type NotificationItem,
  getNotifcationType,
  getNotificationTypeTheme,
  formatShortTimeAgo,
} from "@/shared/types";

type NotificationCardProps = NotificationItem;

export default function NotificationCard(props: NotificationCardProps) {
  const TypeIcon = getNotifcationType(props.type).icon;
  const theme = getNotificationTypeTheme(props.type);
  return (
    <div className="flex flex-col p-[20px] gap-[4px]  border-b-[1px] border-white/10 ">
      <div className="flex items-center gap-[16px]">
        <div
          className={`${theme.bgColor} ${theme.borderColor} border-[1px] rounded-[8px] h-[40px] w-[40px] flex items-center justify-center`}
        >
          <TypeIcon size={20} color={theme.color} />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between">
            <p
              className={`text-[11px] font-bold font-jetbrainsmono ${theme.textColor}`}
            >
              {props.type}
            </p>
            <p className="text-[11px] font-medium font-jetbrainsmono text-[#C2C6D6]">
              {formatShortTimeAgo(props.date)}
            </p>
          </div>
          <p className="text-[16px] font-semibold font-inter text-[#E1E2EC]">
            {props.title}
          </p>
        </div>
      </div>
      <p className="text-[16px] font-normal font-inter text-[#C2C6D6] leading-[26px]">
        {props.description}
      </p>
      <div className="flex justify-between items-center">
        <div className="bg-white/5 border-[1px] border-white/10 rounded-[4px]">
          <p className="text-[10px] font-medium font-jetbrainsmono text-[#C2C6D6] uppercase px-[9px] py-[3px]">
            {props.volatility}
          </p>
        </div>
        <NavLink
          to="/Markets"
          className="text-[16px] font-medium font-jetbrainsmono text-[#ADC6FF] border-b border-transparent hover:border-b hover:border-[#ADC6FF] transition-all duration-200"
        >
          Manage
        </NavLink>
      </div>
    </div>
  );
}
