"use client";
import { useEffect } from "react";

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector<HTMLDivElement>(".custom-cursor__cursor");
        const cursorInner = document.querySelector<HTMLDivElement>(".custom-cursor__cursor-two");
        const links = document.querySelectorAll<HTMLAnchorElement>("a");

        if (!cursor || !cursorInner) return;

        const moveCursor = (e: MouseEvent) => {
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        };

        const moveCursorInner = (e: MouseEvent) => {
            cursorInner.style.left = `${e.clientX}px`;
            cursorInner.style.top = `${e.clientY}px`;
        };

        const mouseDown = () => {
            cursor.classList.add("click");
            cursorInner.classList.add("custom-cursor__innerhover");
        };

        const mouseUp = () => {
            cursor.classList.remove("click");
            cursorInner.classList.remove("custom-cursor__innerhover");
        };

        const handleLinkHover = () => cursor.classList.add("custom-cursor__hover");
        const handleLinkLeave = () => cursor.classList.remove("custom-cursor__hover");

        links.forEach((link) => {
            link.addEventListener("mouseover", handleLinkHover);
            link.addEventListener("mouseleave", handleLinkLeave);
        });

        document.addEventListener("mousemove", moveCursor);
        document.addEventListener("mousemove", moveCursorInner);
        document.addEventListener("mousedown", mouseDown);
        document.addEventListener("mouseup", mouseUp);

        return () => {
            document.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mousemove", moveCursorInner);
            document.removeEventListener("mousedown", mouseDown);
            document.removeEventListener("mouseup", mouseUp);

            links.forEach((link) => {
                link.removeEventListener("mouseover", handleLinkHover);
                link.removeEventListener("mouseleave", handleLinkLeave);
            });
        };
    }, []);
    return (
        <>
            <div className="custom-cursor__cursor"></div>
            <div className="custom-cursor__cursor-two"></div>
        </>
    );
};

export default CustomCursor;