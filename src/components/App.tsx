import "./App.css";
import { type WheelEvent, useState, useEffect, useRef, useMemo } from "react";
import { SectionBar } from "./section-bar";
import { AnimeRecommendation, Articles, Hero, HiraganaQuiz } from "./sections";
import { throttle } from "lodash";
import { usePreventMousewheelZoom } from "../hooks";

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const startScreenYRef = useRef(0);
  const maxSectionIndex = 3;

  // Keep latest section index in a ref for scroll handler
  const sectionIndexRef = useRef(currentSectionIndex);
  useEffect(() => {
    sectionIndexRef.current = currentSectionIndex;
  }, [currentSectionIndex]);

  // Scroll handler with threshold
  const scroll = (e: WheelEvent<Element>) => {
    const threshold = 30; // sensitivity for trackpad/mouse
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
    () => throttle(scroll, 800, { trailing: false }),
    []
  );

  return (
    <>
      <div
        className="homepage"
        onWheel={onWheelThrottled}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Hero setCurrentSection={setCurrentSectionIndex} />
        <AnimeRecommendation />
        <HiraganaQuiz />
        <Articles />
      </div>
      <SectionBar
        currentSection={currentSectionIndex}
        setCurrentSection={setCurrentSectionIndex}
      />
    </>
  );
}

export default App;
