"use client"
import ThemeSwitch from "@/app/themeswitch";
import Image from "next/image"
import ckui from "./chakra.png"
import tw from "./tailwindcss.svg"
import cat from "./cat.webp"
import { useState } from "react";
import { Flex, Spacer, Card, CardHeader, CardBody, Stack, CardFooter, Button } from "@chakra-ui/react"
import button from "./button"
import "./globals.css"

import Confetti from 'react-confetti'
// import useWindowSize from 'react-use/lib/useWindowSize'

const bigExplodeProps = {
    force: 0.6,
    duration: 5000,
    particleCount: 200,
    floorHeight: 1600,
    floorWidth: 1600
};

export default function Home() {
    const [isExploding, setIsExploding] = useState(false);

    const [showConfetti, setShowConfetti] = useState(false);

    return (
        <div className={"container flex-auto justify-items-center text-center text-pretty mx-auto p-8 min-w-full min-h-screen subpixel-antialiased"}>
            <Flex>
                <a href={"https://v2.chakra-ui.com"} target={"_blank"}><Image src={ckui} alt={"Chakra UI"} width={220} height={50} /></a>
                <a href={"https://tailwindcss.com"} target={"_blank"}><Image src={tw} alt={"Tailwind CSS"} width={75} height={50} className={"rounded-3xl ml-6 mt-1.5"} /></a>
                <Spacer />
                <a><ThemeSwitch /></a>
            </Flex>
            <h1 className={"mt-3 text-violet-600 font-light text-wrap mix-blend-hard-light"}><strong
                className={"text-6xl"}>This is a very basic tutorial of <span
                    className={"text-amber-500"}>Chakra UI</span></strong></h1>
            <p className={"mt-3 text-3xl text-emerald-500 text-pretty mix-blend-hard-light"}>You can use the <span className={"text-indigo-300"}>{`<Card></Card>`}</span> tag to template the card first, then the <span className={"text-violet-400 mix-blend-lighten"}>{`<CardHeader>`}</span><span className={"text-indigo-300"}>{`</CardHeader>`}</span> with <span className={"text-sky-400"}>{`<Heading></Heading>`}</span> for the header of the card.</p>
            <p className={"mt-3 text-3xl text-emerald-500 mix-blend-hard-light"}>You can then use the <span className={"text-fuchsia-300"}>{`<CardBody></CardBody>`} </span>to elaborate on your card's header. <span className={"text-fuchsia-300"}>{`<CardFooter></CardFooter>`}</span> for any buttons that you want to implement.</p>
            <p className={"mt-3 text-2xl mix-blend-hard-light text-emerald-300 mb-3 text-center"}>Here's an example</p>
            <div className={"container flex mx-auto text-lg justify-center"}>
                <Card direction={{ base: 'column', sm: "row" }} overflow='hidden' variant={'outline'}>
                    <Image src={cat} alt={"Random cat photo"} width={220} height={40} className={"mx-auto rounded-l-xl"} />
                    <Stack>
                        <CardBody>
                            <CardHeader className={"ml-6 text-amber-300 mix-blend-hard-light"}><strong>An example of a card with image as the card header</strong></CardHeader>
                            <p className={"text-pretty text-gray-300 py-2 ml-6"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </CardBody>
                        <CardFooter>
                            <Button variant={'solid'} className={"flex bg-teal-500 mix-blend-hard-light ml-6 rounded-md mt-7 w-36 h-12"}>
                                <script src="app/button.js"></script>Press me 👀
                            </Button>
                            <button
                                className="btn bg-blue-700 rounded-md w-36 h-12 mt-7 ml-3"
                                onClick={() => {
                                    setShowConfetti(!showConfetti)
                                }}>
                                Confetti
                            </button>
                        </CardFooter>
                    </Stack>
                </Card>
            </div>
            <p className={"mt-2 text-2xl"}>As you can see on the very top of the page, you can see that the navbar is segmented into 2 sides.</p>
            <p>Extreme right and extreme left. This can be done using the {`<Spacer/>`} tag in between {`<a></a>`} tags.</p>

            {showConfetti &&
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                />
            }

        </div>
    )
}