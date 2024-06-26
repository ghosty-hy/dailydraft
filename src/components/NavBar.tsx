import { NavLink } from 'react-router-dom';
import { WalletMultiButton } from './wallet';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import UserIcon from '../Icons/UserIcon';
import { motion } from 'framer-motion';

export default function NavBar() {
  return (
    <>
      <nav className="flex h-[80px] w-full justify-center bg-[#121318] text-white">
        <div
          id="container"
          className={'flex w-11/12 items-center justify-between [&>*]:flex [&>*]:w-1/3 [&>*]:justify-center'}
        >
          <div id="logo" className="">
            <img src="/Nav/NavLogoCombo.png" alt="Daily Draft Logo" className="hidden h-[44px] lg:block" />
            <img src="/Nav/NavLogoSmall.png" alt="Daily Draft Logo" className="block h-[32px] lg:hidden" />
          </div>
          <div
            id="nav-links"
            className="flex h-full items-center space-x-10 [&>*]:flex [&>*]:h-full [&>*]:w-1/3 [&>*]:items-center [&>*]:justify-center [&>*]:border-t-4 [&>*]:font-semibold"
          >
            <NavLink
              to={'/'}
              className={({ isActive }) => {
                return isActive ? 'border-[#52BE70]' : 'border-[#121318] text-[#525252]';
              }}
            >
              LOBBY
            </NavLink>
            <NavLink
              to={'/drafts'}
              className={({ isActive }) => {
                return isActive ? 'border-[#52BE70]' : 'border-[#121318] text-[#525252]';
              }}
            >
              MY DRAFTS
            </NavLink>
            <NavLink
              to={'/leaderboard'}
              className={({ isActive }) => {
                return isActive ? 'border-[#52BE70]' : 'border-[#121318] text-[#525252]';
              }}
            >
              LEADERBOARDS
            </NavLink>
          </div>
          <div id="connect-wallet" className="flex h-full items-center gap-4">
            <WalletMultiButton />
            <motion.a
              href="/user"
              className="aspect-square w-fit rounded-[5px] bg-[#52BE70] p-2.5"
              whileHover={{
                scale: 1.1,
                background: '#34A152',
              }}
            >
              <UserIcon />
            </motion.a>
          </div>
        </div>
      </nav>
      <div className="flex h-[50px] w-full items-center justify-center bg-[#52BE70]">
        <Carousel>
          <CarouselContent className="[&>*]:text-center [&>*]:text-[14px] [&>*]:font-semibold [&>*]:text-white">
            <CarouselItem>FOLLOW US ON TWITTER FOR $50</CarouselItem>
            <CarouselItem>FOLLOW US ON TWITTER FOR $100</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
