import "./App.css";
import React, {
  type WheelEvent,
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { SectionBar } from "./section-bar";
import { Articles, Hero, ThreeJS, About } from "./sections";
import { throttle } from "lodash";
import { usePreventMousewheelZoom } from "../hooks";

interface Position {
  x: number;
  y: number;
}

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [position, setPosition] = useState<Position>({ x: 50, y: 50 });

  const startScreenYRef = useRef(0);
  const maxSectionIndex = 2;

  // for mouse hovering effect on background
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) * 100;
    const y = (e.clientY / innerHeight) * 100;
    setPosition({ x, y });
  }, []);

  // Keep latest section index in a ref for scroll handler
  const sectionIndexRef = useRef(currentSectionIndex);
  useEffect(() => {
    sectionIndexRef.current = currentSectionIndex;
  }, [currentSectionIndex]);

  // Scroll handler with threshold
  const scroll = (e: WheelEvent<Element>) => {
    const threshold = 20; // sensitivity for trackpad/mouse
    console.log(e.deltaY, "deltaY");
    if (e.deltaY > threshold && sectionIndexRef.current < maxSectionIndex) {
      setCurrentSectionIndex((prev) => prev + 1);
    } else if (e.deltaY < -threshold && sectionIndexRef.current > 0) {
      setCurrentSectionIndex((prev) => prev - 1);
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startScreenYRef.current = e.touches[0].screenY;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endScreenY = e.changedTouches[0].screenY;
    const startScreenY = startScreenYRef.current;
    const touchScreenDiff = startScreenY - endScreenY;
    const threshold = 50; // touch swipe sensitivity
    console.log(touchScreenDiff, "touchScreenDiff");
    if (touchScreenDiff < -threshold && sectionIndexRef.current > 0) {
      setCurrentSectionIndex((prev) => prev - 1);
    }
    if (
      touchScreenDiff > threshold &&
      sectionIndexRef.current < maxSectionIndex
    ) {
      setCurrentSectionIndex((prev) => prev + 1);
    }
  };

  // Arrow key navigation + auto scroll into view
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === "ArrowUp" && sectionIndexRef.current > 0) {
        e.preventDefault();
        setCurrentSectionIndex((prev) => prev - 1);
      }
      if (e.code === "ArrowDown" && sectionIndexRef.current < maxSectionIndex) {
        e.preventDefault();
        setCurrentSectionIndex((prev) => prev + 1);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    // Smooth scroll to active section
    setTimeout(() => {
      sections[currentSectionIndex]?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentSectionIndex]);

  usePreventMousewheelZoom();

  // Stable throttled wheel handler
  const onWheelThrottled = useMemo(
    () => throttle(scroll, 500, { trailing: false }),
    []
  );

  return (
    <>
      <div
        className="homepage"
        onWheel={onWheelThrottled}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseMove={handleMouseMove}
        style={{
          background: `radial-gradient(
            circle at ${position.x}% ${position.y}%, 
          rgba(100,100,255,0.3), 
          rgba(10,10,30,0.9)),
            linear-gradient(180deg, #0a0a1e, #0a0a1e)`,
        }}
      >
        <Hero />
        <About />
        {/* <ThreeJS /> */}
        <Articles />
      </div>
      <SectionBar
        currentSection={currentSectionIndex}
        setCurrentSection={setCurrentSectionIndex}
        maxSectionIndex={maxSectionIndex}
      />
    </>
  );
}

export default App;
