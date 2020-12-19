// ページ情報

export type NavItem = {
  title: string;
  slug: string;
};

export const navItems: NavItem[] = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Member",
    slug: "/member/",
  },
  {
    title: "Schedule",
    slug: "/schedule/",
  },
  {
    title: "Contact",
    slug: "/contact/",
  },
  {
    title: "Link",
    slug: "/link/",
  },
];
