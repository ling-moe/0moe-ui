export interface Menu {
  id: number;
  parentId: number;
  level: number;
  weight: string;
  name: string;
  shortcut?: string;
  menuCode: string;
  icon: string;
  path?: string;
  menuType: string;
  router: string;
  remark?: string;
  children?: Menu[];
  expand?: boolean;
  parent?: Menu;
  menuId?: number;
  menuName?: string;
  orderNum?: string;
  levelPath?: number;
  creationDate?: string;
  createdBy?: number;
  lastUpdateDate?: string;
  lastUpdatedBy?: number;
  objectVersionNumber: number;
}
