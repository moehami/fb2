export type CustomFlowbiteTheme = DeepPartial<FlowbiteTheme>;

export interface FlowbiteTheme {
  accordion: {
    base: string;
    title: {
      base: string;
      isOpen: string;
      isOpenNotFlushed: string;
      notFlushed: string;
    };
    content: {
      base: string;
    };
  };
  alert: {
    base: string;
    borderAccent: string;
    closeButton: {
      base: string;
      color: Colors;
    };
    color: Colors;
    icon: string;
    rounded: string;
  };
  avatar: {
    base: string;
    bordered: string;
    img: {
      disabled: string;
      enabled: string;
    };
    rounded: string;
    size: Sizes;
    stacked: string;
    status: {
      away: string;
      base: string;
      busy: string;
      offline: string;
      online: string;
    };
    statusPosition: {
      'bottom-left': string;
      'bottom-right': string;
      'top-left': string;
      'top-right': string;
    };
  };
  badge: {
    base: string;
    color: Colors;
    href: string;
    icon: {
      disabled: string;
      enabled: string;
      size: BadgeSizes;
    };
    size: BadgeSizes;
  };
  breadcrumb: {
    item: {
      base: string;
      chevron: string;
      href: {
        off: string;
        on: string;
      };
      icon: string;
    };
    list: string;
  };
}

export type Colors = FlowbiteColors & {
  [key in string]: string;
};

export interface FlowbiteColors {
  failure: string;
  gray: string;
  info: string;
  success: string;
  warning: string;
}

export type Sizes = FlowbiteSizes & {
  [key in string]: string;
};

export interface FlowbiteSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export type BadgeSizes = FlowbiteBadgeSizes & {
  [key in string]: string;
};

export type FlowbiteBadgeSizes = Pick<FlowbiteSizes, 'xs' | 'sm'>;
