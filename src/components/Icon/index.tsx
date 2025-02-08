import React from 'react';
import EyeOn from '../../assets/icons/EyeOn';
import EyeOff from '../../assets/icons/EyeOff';
import { ThemeColors } from '../../theme/theme';
import { useAppTheme } from '../../hooks/useAppTheme';
import Trash from '../../assets/icons/Trash';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import ArrowRight from '../../assets/icons/ArrowRight';
import Bell from '../../assets/icons/Bell';
import BellOn from '../../assets/icons/BellOn';
import Bookmark from '../../assets/icons/Bookmark';
import BookmarkFill from '../../assets/icons/BookmarkFill';
import Camera from '../../assets/icons/Camera';
import CameraClick from '../../assets/icons/CameraClick';
import Chat from '../../assets/icons/Chat';
import ChatOn from '../../assets/icons/ChatOn';
import Check from '../../assets/icons/Check';
import Checkround from '../../assets/icons/CheckRound';
import ChevronRight from '../../assets/icons/ChevronRight';
import Comment from '../../assets/icons/Comment';
import ErrorRound from '../../assets/icons/ErrorRound';
import FlashOff from '../../assets/icons/FlashOff';
import FlashOn from '../../assets/icons/FlashOn';
import Heart from '../../assets/icons/Heart';
import HeartFill from '../../assets/icons/HeartFill';
import Home from '../../assets/icons/Home';
import HomeFill from '../../assets/icons/HomeFill';
import Message from '../../assets/icons/Message';
import MessageRound from '../../assets/icons/MessageRound';
import NewPost from '../../assets/icons/NewPost';
import Profile from '../../assets/icons/Profile';
import ProfileFill from '../../assets/icons/ProfileFill';
import Search from '../../assets/icons/Search';
import Settings from '../../assets/icons/Settings';
import { Pressable } from 'react-native';

export interface IconBaseProps {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export default function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const SVGIcon = iconRegistry[name];
  const {colors} = useAppTheme();

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }
  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  bell: Bell,
  bellOn: BellOn,
  bookmark: Bookmark,
  bookmarkFill: BookmarkFill,
  camera: Camera,
  cameraClick: CameraClick,
  chat: Chat,
  chatOn: ChatOn,
  check: Check,
  checkRound: Checkround,
  chevronRight: ChevronRight,
  comment: Comment,
  errorRound: ErrorRound,
  eyeOn:EyeOn,
  eyeOff: EyeOff,
  flasfOff: FlashOff,
  flasfOn: FlashOn,
  heart: Heart,
  heartFill: HeartFill,
  home: Home,
  homeFill: HomeFill,
  message: Message,
  messageRound: MessageRound,
  newPost: NewPost,
  profile: Profile,
  profileFill: ProfileFill,
  search: Search,
  settings: Settings,
  trash: Trash,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
