"use client";
import ACMImage from "@/components/(website)/2023/_gen/image/ACMImage";
import InlineFont from "@/utils/font/InlineFont";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { toggleNav } from "@/utils/redux/slices/(app)/nav";
import {
	Avatar,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";
import {
	FaBell,
	FaCalendarDays,
	FaGauge,
	FaGlobe,
	FaInbox,
} from "react-icons/fa6";
import LinkProps from "types/LinkProps";

const links: LinkProps[] = [
	{
		name: "Dashboard",
		href: "/dashboard",
		icon: <FaGauge />,
	},
	{
		name: "Forum",
		href: "/home",
		icon: <FaGlobe />,
	},
	{
		name: "Events",
		href: "/events",
		icon: <FaCalendarDays />,
	},
	{
		name: "Notifications",
		href: "/notifications",
		icon: <FaBell />,
	},
	{
		name: "Inbox",
		href: "/inbox",
		icon: <FaInbox />,
	},
];

const AppLayoutNav = () => {
	const isOpen = useAppSelector((state) => state.navReducer.isNavOpen);
	const dispatch = useAppDispatch();

	return (
		<Navbar
			isBordered
			isMenuOpen={isOpen}
			onMenuOpenChange={() => dispatch(toggleNav())}
			classNames={{
				item: [
					"flex",
					"relative",
					"h-full",
					"items-center",
					"data-[active=true]:after:content-['']",
					"data-[active=true]:after:absolute",
					"data-[active=true]:after:bottom-0",
					"data-[active=true]:after:left-0",
					"data-[active=true]:after:right-0",
					"data-[active=true]:after:h-[2px]",
					"data-[active=true]:after:rounded-[2px]",
					"data-[active=true]:after:bg-secondary",
				],
			}}
		>
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle aria-label={isOpen ? "Close menu" : "Open menu"} />
			</NavbarContent>
			<NavbarBrand className="flex justify-center sm:justify-start">
				<Link href="/dashboard" color="foreground">
					<div className="relative h-8 w-16">
						<ACMImage />
					</div>
					<p className="font-bold text-xl hidden sm:block">FEU Tech ACM</p>
				</Link>
			</NavbarBrand>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{links.map((link) => {
					return (
						<NavbarItem key={link.name}>
							<Link color="foreground" href={link.href}>
								<InlineFont>
									{link.icon}
									{link.name}
								</InlineFont>
							</Link>
						</NavbarItem>
					);
				})}
			</NavbarContent>
			<NavbarMenu>
				{links.map((link) => {
					return (
						<NavbarMenuItem key={link.name}>
							<Link href={link.href} className="text-2xl" color="foreground">
								<InlineFont>
									{link.icon}
									{link.name}
								</InlineFont>
							</Link>
						</NavbarMenuItem>
					);
				})}
			</NavbarMenu>

			<NavbarContent as="div" justify="end">
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<Avatar
							isBordered
							as="button"
							className="transition-transform"
							color="secondary"
							name="Jason Hughes"
							size="sm"
							src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
						/>
					</DropdownTrigger>
					<DropdownMenu aria-label="Profile Actions" variant="flat">
						<DropdownItem key="profile" className="h-14 gap-2">
							<p className="font-semibold">Signed in as</p>
							<p className="font-semibold">zoey@example.com</p>
						</DropdownItem>
						<DropdownItem key="settings">My Settings</DropdownItem>
						<DropdownItem key="team_settings">Team Settings</DropdownItem>
						<DropdownItem key="analytics">Analytics</DropdownItem>
						<DropdownItem key="system">System</DropdownItem>
						<DropdownItem key="configurations">Configurations</DropdownItem>
						<DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
						<DropdownItem key="logout" color="danger">
							Log Out
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>
		</Navbar>
	);
};

export default AppLayoutNav;
