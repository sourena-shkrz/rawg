import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { platform } from "../Hooks/useGames"
import { IconType } from "react-icons"
import {  HStack, Link, } from "@chakra-ui/react"


interface Props {
	platforms: platform[]
}

export const PlatformIconList = ({ platforms = [] }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		web: BsGlobe
	}

	return (
        <>
		<HStack marginY={1} >
			{platforms.map((platform) => (            
               <Link  as={iconMap[platform.slug]}  key={platform.id} color='gray.500' />
			))}
		</HStack>
        </>
	);
};