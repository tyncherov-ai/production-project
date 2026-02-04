import { IconType } from 'react-icons';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: IconType;
  authOnly?: boolean;
}
