"use client";

import { fromJSON } from "postcss";
import{
    Dialog,DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
}from "@/components/ui/dialog"

import { Button } from "@/components/ui/button";
import {useHeartsModal } from "@/store/use-hearts-modal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export const HeartsModal =()=> {
    const router = useRouter();
    const [isClient, setIsClient]= useState(false);
    const { isOpen, close}= useHeartsModal ();

    useEffect(() => setIsClient(true), []);

    const onClick = () =>{
        close();
        router.push("/shop") 
    }

    if (!isClient){
        return null;
    }

    return(
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-mb">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image
                        src="/mascot_bad.svg"
                        alt="Mascot"
                        height={80}
                        width={80}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                    Te quedaste sin corazones
                    </DialogTitle>
                    <DialogDescription>
                    Ve a cumplir retos para ganar corazones
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-4 w-full">
                        <Button variant="primary" 
                        className="w-full"
                         size="lg" 
                         onClick={onClick}>
                            Ve a consegui más corazones.
                        </Button>
                        <Button variant="primaryOutline"
                         className="w-full"
                          size="lg" 
                          onClick={close}
                          >
                            No, gracias
                        </Button>
                    </div>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};