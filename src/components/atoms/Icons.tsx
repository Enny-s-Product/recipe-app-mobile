import React from 'react';
import EyeIconSVG from '../../assets/icons/eye-icon.svg';
import EyeSlashIconSVG from '../../assets/icons/eye-slash-icon.svg';
import GoogleIconSVG from '../../assets/icons/google-icon.svg';
import FacebookIconSVG from '../../assets/icons/facebook-icon.svg';
import AppleIconSVG from '../../assets/icons/apple-icon.svg';
import ErrorIconSVG from '../../assets/icons/error-icon.svg';
import BlackCancelIconSVG from '../../assets/icons/black-cancel-icon.svg';
import WhiteArrowLeftIconSVG from '../../assets/icons/white-arrow-left.svg';
import GreenTickIconSVG from '../../assets/icons/green-tick-icon.svg';
import ChevronRightIconSVG from '../../assets/icons/chevron-right-icon.svg';
import BlackCircleTickIconSVG from '../../assets/icons/black-circle-tick.svg';
import HomeIconSVG from '../../assets/icons/home-icon.svg';
import HomeActiveIconSVG from '../../assets/icons/home-active-icon.svg';
import MealPlanIconSVG from '../../assets/icons/meal-plan-icon.svg';
import MealPlanActiveIconSVG from '../../assets/icons/meal-plan-active-icon.svg';
import RecipeIconSVG from '../../assets/icons/recipe-icon.svg';
import RecipeActiveIconSVG from '../../assets/icons/recipe-active-icon.svg';
import SettingsIconSVG from '../../assets/icons/settings-icon.svg';
import SettingsActiveIconSVG from '../../assets/icons/settings-active-icon.svg';
import ProfileImageIconSVG from '../../assets/icons/profile-image-icon.svg';
import NotificationIconSVG from '../../assets/icons/notification-icon.svg';
import SearchIconSVG from '../../assets/icons/search-icon.svg';
import GreenLockIconSVG from '../../assets/icons/green-lock-icon.svg';
import InfoArrowRightIconSVG from '../../assets/icons/info-arrow-right.svg';
import SuccessArrowRightIconSVG from '../../assets/icons/success-arrow-right-icon.svg';
import TimeIconSVG from '../../assets/icons/time-icon.svg';
import PreferencesIconSVG from '../../assets/icons/preferences-icon.svg';
import WhiteFilterIconSVG from '../../assets/icons/white-filter-icon.svg';
import NotificationWhiteIconSVG from '../../assets/icons/notification-white-icon.svg';
import ManageSubscriptionIconSVG from '../../assets/icons/manage-subscription-icon.svg';
import SettingsWhiteIconSVG from '../../assets/icons/settings-white-icon.svg';
import InviteFriendsIconSVG from '../../assets/icons/invite-friends-icon.svg';
import ContactUsIconSVG from '../../assets/icons/contact-us-icon.svg';
import LogoutIconSVG from '../../assets/icons/logout-icon.svg';
import GreenCheckIconSVG from '../../assets/icons/green-check-icon.svg';
import JewelIconSVG from '../../assets/icons/jewel-icon.svg';
import PolygonDownIconSVG from '../../assets/icons/polygon-down-icon.svg';
import ChevronUpIconSVG from '../../assets/icons/chevron-up-icon.svg';
import ChevronDownIconSVG from '../../assets/icons/chevron-down-icon.svg';
import WhiteSearchIconSVG from '../../assets/icons/white-search-icon.svg';
import CalorieIconSVG from '../../assets/icons/calorie-icon.svg';
import TimeGreenIconSVG from '../../assets/icons/time-green-icon.svg';
import SaveIconSVG from '../../assets/icons/save-icon.svg';
import BinIconSVG from '../../assets/icons/bin-icon.svg';
import NoMealPlanSVG from '../../assets/icons/no-meal-plan.svg';
import GrayCloseIconSVG from '../../assets/icons/gray-close-icon.svg';
import GreenSaveIconSVG from '../../assets/icons/green-save-icon.svg';
import AddIconSVG from '../../assets/icons/add-icon.svg';
import GreenChevronRightIconSVG from '../../assets/icons/green-chevron-right-icon.svg';
import HeaderLeftIconSVG from '../../assets/icons/header-left-icon.svg';
import WhiteHeartIconSVG from '../../assets/icons/white-heart-icon.svg';
import ExclamationIconSVG from '../../assets/icons/exclamation-icon.svg';
import LocateIconSVG from '../../assets/icons/locate-icon.svg';
import ShareIconSVG from '../../assets/icons/share-icon.svg';
import ActiveStarIconSVG from '../../assets/icons/active-star.svg';
import InactiveStarIconSVG from '../../assets/icons/inactive-star.svg';
import CutleryIconSVG from '../../assets/icons/cutlery-icon.svg';
import MoreHorizontalIconSVG from '../../assets/icons/more-horizontal-icon.svg';
import PadlockIconSVG from '../../assets/icons/padlock-icon.svg';

type IconProps = React.FC<{
  color?: string;
  size?: number;
  opacity?: number;
}>;

export const EyeIcon: IconProps = function EyeIcon({color, size, opacity}) {
  return (
    <EyeIconSVG opacity={opacity || 1} width={size || 20} height={size || 20} />
  );
};

export const EyeSlashIcon: IconProps = function EyeSlashIcon({
  color,
  size,
  opacity,
}) {
  return (
    <EyeSlashIconSVG
      opacity={opacity || 1}
      width={size || 20}
      height={size || 20}
    />
  );
};

export const GoogleIcon: IconProps = function GoogleIcon({
  color,
  size,
  opacity,
}) {
  return (
    <GoogleIconSVG
      opacity={opacity || 1}
      width={size || 24}
      height={size || 24}
    />
  );
};

export const FacebookIcon: IconProps = function FacebookIcon({
  color,
  size,
  opacity,
}) {
  return (
    <FacebookIconSVG
      opacity={opacity || 1}
      width={size || 24}
      height={size || 24}
    />
  );
};

export const AppleIcon: IconProps = function AppleIcon({color, size, opacity}) {
  return (
    <AppleIconSVG
      opacity={opacity || 1}
      width={size || 24}
      height={size || 24}
    />
  );
};

export const ErrorIcon: IconProps = function ErrorIcon({color, size, opacity}) {
  return (
    <ErrorIconSVG
      opacity={opacity || 1}
      width={size || 20}
      height={size || 20}
    />
  );
};

export const BlackCancelIcon: IconProps = function BlackCancelIcon({
  color,
  size,
  opacity,
}) {
  return (
    <BlackCancelIconSVG
      opacity={opacity || 1}
      width={size || 18}
      height={size || 18}
    />
  );
};

export const WhiteArrowLeftIcon: IconProps = function WhiteArrowLeftIcon({
  color,
  size,
  opacity,
}) {
  return (
    <WhiteArrowLeftIconSVG
      opacity={opacity || 1}
      width={size || 30}
      height={size || 30}
    />
  );
};

export const GreenTickIcon: IconProps = function GreenTickIcon({
  color,
  size,
  opacity,
}) {
  return (
    <GreenTickIconSVG
      opacity={opacity || 1}
      width={size || 16}
      height={size || 16}
    />
  );
};

export const ChevronRightIcon: IconProps = function ChevronRightIcon({
  color,
  size,
  opacity,
}) {
  return (
    <ChevronRightIconSVG
      opacity={opacity || 1}
      width={size || 6}
      height={size || 10}
    />
  );
};

export const BlackCircleTickIcon: IconProps = function BlackCircleTickIcon({
  color,
  size,
  opacity,
}) {
  return (
    <BlackCircleTickIconSVG
      opacity={opacity || 1}
      width={size || 15}
      height={size || 15}
    />
  );
};

export const HomeIcon: IconProps = function HomeIcon({color, size, opacity}) {
  return (
    <HomeIconSVG
      opacity={opacity || 1}
      width={size || 21}
      height={size || 21}
    />
  );
};

export const HomeActiveIcon: IconProps = function HomeActiveIcon({
  color,
  size,
  opacity,
}) {
  return (
    <HomeActiveIconSVG
      opacity={opacity || 1}
      width={size || 21}
      height={size || 21}
    />
  );
};

export const MealPlanIcon: IconProps = function MealPlanIcon({
  color,
  size,
  opacity,
}) {
  return (
    <MealPlanIconSVG
      opacity={opacity || 1}
      width={size || 21}
      height={size || 21}
    />
  );
};

export const MealPlanActiveIcon: IconProps = function MealPlanActiveIcon({
  color,
  size,
  opacity,
}) {
  return (
    <MealPlanActiveIconSVG
      opacity={opacity || 1}
      width={size || 21}
      height={size || 21}
    />
  );
};

export const RecipeIcon: IconProps = function RecipeIcon({
  color,
  size,
  opacity,
}) {
  return (
    <RecipeIconSVG
      opacity={opacity || 1}
      width={size || 21}
      height={size || 21}
    />
  );
};

export const RecipeActiveIcon: IconProps = function RecipeActiveIcon({
  color,
  size,
  opacity,
}) {
  return (
    <RecipeActiveIconSVG
      opacity={opacity || 1}
      width={size || 21}
      height={size || 21}
    />
  );
};

export const SettingsIcon: IconProps = function SettingsIcon({
  color,
  size,
  opacity,
}) {
  return (
    <SettingsIconSVG
      opacity={opacity || 1}
      width={size || 21}
      height={size || 21}
    />
  );
};

export const SettingsActiveIcon: IconProps = function SettingsActiveIcon({
  color,
  size,
  opacity,
}) {
  return (
    <SettingsActiveIconSVG
      opacity={opacity || 1}
      width={size || 21}
      height={size || 21}
    />
  );
};

export const ProfileImageIcon: IconProps = function ProfileImageIcon({
  color,
  size,
  opacity,
}) {
  return (
    <ProfileImageIconSVG
      opacity={opacity || 1}
      width={size || 40}
      height={size || 40}
    />
  );
};

export const NotificationIcon: IconProps = function NotificationIcon({
  color,
  size,
  opacity,
}) {
  return (
    <NotificationIconSVG
      opacity={opacity || 1}
      width={size || 31}
      height={size || 31}
    />
  );
};

export const SearchIcon: IconProps = function SearchIcon({
  color,
  size,
  opacity,
}) {
  return (
    <SearchIconSVG
      opacity={opacity || 1}
      width={size || 20}
      height={size || 20}
    />
  );
};

export const GreenLockIcon: IconProps = function GreenLockIcon({
  color,
  size,
  opacity,
}) {
  return (
    <GreenLockIconSVG
      opacity={opacity || 1}
      width={size || 10}
      height={size || 10}
    />
  );
};

export const InfoArrowRightIcon: IconProps = function InfoArrowRightIcon({
  color,
  size,
  opacity,
}) {
  return (
    <InfoArrowRightIconSVG
      opacity={opacity || 1}
      width={size || 20}
      height={size || 20}
    />
  );
};

export const SuccessArrowRightIcon: IconProps = function SuccessArrowRightIcon({
  color,
  size,
  opacity,
}) {
  return (
    <SuccessArrowRightIconSVG
      opacity={opacity || 1}
      width={size || 20}
      height={size || 20}
    />
  );
};

export const TimeIcon: IconProps = function TimeIcon({color, size, opacity}) {
  return (
    <TimeIconSVG
      opacity={opacity || 1}
      width={size || 16}
      height={size || 16}
    />
  );
};

export const WhiteFilterIcon: IconProps = function WhiteFilterIcon({
  color,
  size,
  opacity,
}) {
  return (
    <WhiteFilterIconSVG
      opacity={opacity || 1}
      width={size || 24}
      height={size || 24}
    />
  );
};

export const NotificationWhiteIcon: IconProps = function NotificationWhiteIcon({
  color,
  size,
  opacity,
}) {
  return (
    <NotificationWhiteIconSVG
      opacity={opacity || 1}
      width={size || 14}
      height={size || 18.24}
    />
  );
};

export const ManageSubscriptionIcon: IconProps =
  function ManageSubscriptionIcon({color, size, opacity}) {
    return (
      <ManageSubscriptionIconSVG
        opacity={opacity || 1}
        width={size || 20}
        height={size || 20}
      />
    );
  };

export const PreferencesIcon: IconProps = function PreferencesIcon({
  color,
  size,
  opacity,
}) {
  return (
    <PreferencesIconSVG
      opacity={opacity || 1}
      width={size || 17}
      height={size || 13.6}
    />
  );
};

export const SettingsWhiteIcon: IconProps = function SettingsWhiteIcon({
  color,
  size,
  opacity,
}) {
  return (
    <SettingsWhiteIconSVG
      opacity={opacity || 1}
      width={size || 18}
      height={size || 18.5}
    />
  );
};

export const InviteFriendsIcon: IconProps = function InviteFriendsIcon({
  color,
  size,
  opacity,
}) {
  return (
    <InviteFriendsIconSVG
      opacity={opacity || 1}
      width={size || 19}
      height={size || 13.3}
    />
  );
};

export const ContactUsIcon: IconProps = function ContactUsIcon({
  color,
  size,
  opacity,
}) {
  return (
    <ContactUsIconSVG
      opacity={opacity || 1}
      width={size || 23}
      height={size || 23}
    />
  );
};

export const LogoutIcon: IconProps = function LogoutIcon({
  color,
  size,
  opacity,
}) {
  return (
    <LogoutIconSVG
      opacity={opacity || 1}
      width={size || 21}
      height={size || 21}
    />
  );
};

export const GreenCheckIcon: IconProps = function GreenCheckIcon({
  color,
  size,
  opacity,
}) {
  return (
    <GreenCheckIconSVG
      opacity={opacity || 1}
      width={size || 36}
      height={size || 36}
    />
  );
};

export const PolygonDownIcon: IconProps = function PolygonDownIcon({
  color,
  size,
  opacity,
}) {
  return (
    <PolygonDownIconSVG
      opacity={opacity || 1}
      width={size || 14}
      height={size || 14}
    />
  );
};

export const JewelIcon: IconProps = function JewelIcon({color, size, opacity}) {
  return (
    <JewelIconSVG
      opacity={opacity || 1}
      width={size || 27}
      height={size || 27}
    />
  );
};

export const ChevronUpIcon: IconProps = function ChevronUpIcon({
  color,
  size,
  opacity,
}) {
  return (
    <ChevronUpIconSVG
      opacity={opacity || 1}
      width={size || 24}
      height={size || 11}
    />
  );
};

export const ChevronDownIcon: IconProps = function ChevronDownIcon({
  color,
  size,
  opacity,
}) {
  return (
    <ChevronDownIconSVG
      opacity={opacity || 1}
      width={size || 24}
      height={size || 11}
    />
  );
};

export const WhiteSearchIcon: IconProps = function WhiteSearchIcon({
  color,
  size,
  opacity,
}) {
  return (
    <WhiteSearchIconSVG
      opacity={opacity || 1}
      width={size || 20}
      height={size || 20}
    />
  );
};

export const CalorieIcon: IconProps = function CalorieIcon({
  color,
  size,
  opacity,
}) {
  return (
    <CalorieIconSVG
      opacity={opacity || 1}
      width={size || 13}
      height={size || 17}
    />
  );
};

export const TimeGreenIcon: IconProps = function TimeGreenIcon({
  color,
  size,
  opacity,
}) {
  return (
    <TimeGreenIconSVG
      opacity={opacity || 1}
      width={size || 14}
      height={size || 14}
    />
  );
};

export const SaveIcon: IconProps = function SaveIcon({color, size, opacity}) {
  return (
    <SaveIconSVG
      opacity={opacity || 1}
      width={size || 28}
      height={size || 28}
    />
  );
};

export const BinIcon: IconProps = function BinIcon({color, size, opacity}) {
  return (
    <BinIconSVG opacity={opacity || 1} width={size || 20} height={size || 20} />
  );
};

export const NoMealPlan: IconProps = function NoMealPlan({
  color,
  size,
  opacity,
}) {
  return (
    <NoMealPlanSVG
      opacity={opacity || 1}
      width={size || 96}
      height={size || 69}
    />
  );
};

export const GrayCloseIcon: IconProps = function GrayCloseIcon({
  color,
  size,
  opacity,
}) {
  return (
    <GrayCloseIconSVG
      opacity={opacity || 1}
      width={size || 24}
      height={size || 24}
    />
  );
};

export const GreenSaveIcon: IconProps = function GreenSaveIcon({
  color,
  size,
  opacity,
}) {
  return (
    <GreenSaveIconSVG
      opacity={opacity || 1}
      width={size || 24}
      height={size || 24}
    />
  );
};

export const GreenChevronRightIcon: IconProps = function GreenChevronRightIcon({
  color,
  size,
  opacity,
}) {
  return (
    <GreenChevronRightIconSVG
      opacity={opacity || 1}
      width={size || 6}
      height={size || 13}
    />
  );
};

export const AddIcon: IconProps = function AddIcon({color, size, opacity}) {
  return (
    <AddIconSVG opacity={opacity || 1} width={size || 24} height={size || 24} />
  );
};

export const HeaderLeftIcon: IconProps = function HeaderLeftIcon({
  color,
  size,
  opacity,
}) {
  return (
    <HeaderLeftIconSVG
      opacity={opacity || 1}
      width={size || 30}
      height={size || 30}
    />
  );
};

export const WhiteHeartIcon: IconProps = function WhiteHeartIcon({
  color,
  size,
  opacity,
}) {
  return (
    <WhiteHeartIconSVG
      opacity={opacity || 1}
      width={size || 19.17}
      height={size || 17.51}
    />
  );
};

export const ExclamationIcon: IconProps = function ExclamationIcon({
  color,
  size,
  opacity,
}) {
  return (
    <ExclamationIconSVG
      opacity={opacity || 1}
      width={size || 21.33}
      height={size || 21.33}
    />
  );
};

export const LocateIcon: IconProps = function LocateIcon({
  color,
  size,
  opacity,
}) {
  return (
    <LocateIconSVG
      opacity={opacity || 1}
      width={size || 20}
      height={size || 20}
    />
  );
};

export const ShareIcon: IconProps = function ShareIcon({color, size, opacity}) {
  return (
    <ShareIconSVG
      opacity={opacity || 1}
      width={size || 16}
      height={size || 16}
    />
  );
};

export const ActiveStarIcon: IconProps = function ActiveStarIcon({
  color,
  size,
  opacity,
}) {
  return (
    <ActiveStarIconSVG
      opacity={opacity || 1}
      width={size || 24}
      height={size || 24}
    />
  );
};

export const InactiveStarIcon: IconProps = function InactiveStarIcon({
  color,
  size,
  opacity,
}) {
  return (
    <InactiveStarIconSVG
      opacity={opacity || 1}
      width={size || 24}
      height={size || 24}
    />
  );
};

export const CutleryIcon: IconProps = function CutleryIcon({
  color,
  size,
  opacity,
}) {
  return (
    <CutleryIconSVG
      opacity={opacity || 1}
      width={size || 20}
      height={size || 20}
    />
  );
};

export const MoreHorizontalIcon: IconProps = function MoreHorizontalIcon({
  color,
  size,
  opacity,
}) {
  return (
    <MoreHorizontalIconSVG
      opacity={opacity || 1}
      width={size || 20}
      height={size || 20}
    />
  );
};

export const PadlockIcon: IconProps = function PadlockIcon({
  color,
  size,
  opacity,
}) {
  return (
    <PadlockIconSVG
      opacity={opacity || 1}
      width={size || 24}
      height={size || 24}
    />
  );
};
