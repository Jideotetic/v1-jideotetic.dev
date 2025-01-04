import { Link } from "react-router";
import type { Route } from "./+types/home";
import logo from "./JD.svg";
import {
	Popover,
	PopoverBackdrop,
	PopoverButton,
	PopoverPanel,
} from "@headlessui/react";
import Nav from "~/components/nav";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export function meta({}: Route.MetaArgs) {
	return [{ title: "Abdulbasit Yusuf | Software Engineer" }];
}

export default function Home() {
	return (
		<div className="">
			<header className="p-4 bg-white shadow-gray-900 shadow-sm fixed left-0 right-0 z-50">
				<div className="xl:container mx-auto">
					<div className="flex items-center justify-between">
						<div className="flex shrink-0">
							<Link to="/" title="Go Home" className="flex">
								<img className="w-auto h-8" src={logo} alt="logo" />
							</Link>
						</div>

						<div className="flex md:hidden items-center justify-center">
							<Popover className="group">
								<PopoverButton className="focus:outline-none text-gray-900 text-2xl">
									<AiOutlineClose className="hidden group-data-[open]:block" />
									<AiOutlineMenu className="group-data-[open]:hidden" />
								</PopoverButton>
								<PopoverBackdrop
									transition
									className="fixed inset-0 bg-black/50 top-[64px] transition duration-300 ease-out data-[closed]:opacity-0"
								/>
								<PopoverPanel
									transition
									className="flex flex-col justify-between absolute transition duration-300 ease-in-out left-0 data-[closed]:-translate-x-[100%] h-[calc(100vh-64px)] top-[64px] bg-white w-4/5 min-[425px]:w-1/2 p-4"
								>
									<Nav />
									<div className="flex">
										<a
											href="#"
											title=""
											className="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
											role="button"
										>
											<span className="shrink-0">VIEW RESUME</span>
										</a>
									</div>
								</PopoverPanel>
							</Popover>
						</div>

						<div className="hidden md:flex">
							<Nav />
						</div>

						<div className="hidden md:flex">
							<a
								href="#"
								title=""
								className="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
								role="button"
							>
								<span className="shrink-0">VIEW RESUME</span>
							</a>
						</div>
					</div>
				</div>
			</header>

			<section className="pt-[112px] bg-gradient-to-b from-gray-50 via-white to-gray-50 border-2 border-red-500">
				<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
					<div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
						<div className="self-center lg:col-span-4">
							<h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
								Hey 👋 I am Brian Jones, writing on NFTs.
							</h1>
							<p className="mt-5 text-base font-normal leading-7 text-gray-500">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Vehicula massa in enim luctus.
							</p>

							<div className="relative inline-flex mt-9 group">
								<div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

								<a
									href="#"
									title=""
									className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
									role="button"
								>
									Read Exclusive Blog
								</a>
							</div>
						</div>

						<div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
							<p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
								⚡️ Latest Picks
							</p>

							<div className="mt-6 space-y-6 lg:space-y-8">
								<div className="relative overflow-hidden">
									<div className="flex items-start lg:items-center">
										<img
											className="object-cover w-12 h-12 rounded-lg shrink-0"
											src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-1.png"
											alt=""
										/>
										<p className="ml-5 text-base font-bold leading-6 text-gray-900">
											<a href="#" title="">
												How a visual artist redefines success in graphic design
												<span
													className="absolute inset-0"
													aria-hidden="true"
												></span>
											</a>
										</p>
									</div>
								</div>
							</div>

							<div className="relative overflow-hidden">
								<div className="flex items-start lg:items-center">
									<img
										className="object-cover w-12 h-12 rounded-lg shrink-0"
										src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-2.png"
										alt=""
									/>
									<p className="ml-5 text-base font-bold leading-6 text-gray-900">
										<a href="#" title="">
											How a visual artist redefines success in graphic design
											<span
												className="absolute inset-0"
												aria-hidden="true"
											></span>
										</a>
									</p>
								</div>
							</div>

							<div className="relative overflow-hidden">
								<div className="flex items-start lg:items-center">
									<img
										className="object-cover w-12 h-12 rounded-lg shrink-0"
										src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-3.png"
										alt=""
									/>
									<p className="ml-5 text-base font-bold leading-6 text-gray-900">
										<a href="#" title="">
											How a visual artist redefines success in graphic design
											<span
												className="absolute inset-0"
												aria-hidden="true"
											></span>
										</a>
									</p>
								</div>
							</div>
						</div>

						<div className="self-end lg:col-span-5">
							<img
								className="w-full mx-auto"
								src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/author.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
