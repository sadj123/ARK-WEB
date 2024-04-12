"use client";
import React from "react";
import home from "../../../icons/menu/home.svg";
import marketplace from "../../../icons/menu/marketplace.svg";
import post from "../../../icons/menu/post.svg";
import socialnet from "../../../icons/menu/socialnet.svg";
import profile from "../../../icons/menu/profile.svg";
import homeActive from "../../../icons/menu/home-active.svg";
import marketplaceActive from "../../../icons/menu/marketplace-active.svg";
import postActive from "../../../icons/menu/post-active.svg";
import socialnetActive from "../../../icons/menu/socialnet-active.svg";
import profileActive from "../../../icons/menu/profile-active.svg";
import Image from "next/image";
import Icon from "../ui/Icon";
import { usePathname, useRouter } from "next/navigation";
export default function BottomTabMenu() {
  return (
    <div className="bg-white fixed bottom-0 right-0 w-full flex justify-around items-center border-t border-gray-300 h-20">
      <MenuItem
        icon={home}
        activeIcon={homeActive}
        label={"Home"}
        route="home"
      />
      <MenuItem
        icon={marketplace}
        activeIcon={marketplaceActive}
        label={"Marketplace"}
        route="marketplace"
      />
      <MenuItem
        icon={post}
        activeIcon={postActive}
        label={"Post"}
        route="post"
      />
      <MenuItem
        icon={socialnet}
        activeIcon={socialnetActive}
        label={"Social Net"}
        route="socialnet"
      />
      <MenuItem
        icon={profile}
        activeIcon={profileActive}
        label={"Profile"}
        route="profile"
      />
    </div>
  );
}

function MenuItem({
  icon,
  activeIcon,
  label,
  route,
}: Readonly<{
  icon: any;
  activeIcon: any;
  label: string;
  route: string;
}>) {
  const path = usePathname();
  const router = useRouter();
  const isActive = path.includes(route);
  return (
    <div
      onClick={() => {
        router.push(`/${route}`);
      }}
      className="flex flex-col items-center"
    >
      <Icon src={isActive ? activeIcon : icon} />
      <span
        className={`text-xs ${isActive ? "text-primary" : "text-secondary"}`}
      >
        {label}
      </span>
    </div>
  );
}
