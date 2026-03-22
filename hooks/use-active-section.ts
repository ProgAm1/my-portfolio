"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Tracks the actively visible section on the screen.
 * Resolves edge-cases by measuring exact pixel dominance in the viewport
 * rather than relying on naive "first match" or center-tripwires.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>("");
  // Track the exact pixel height of each section currently intersecting the viewport
  const visibleSections = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    // Generate a dense array of thresholds [0, 0.05, 0.1 ... 1]
    // This forces the observer to frequently ping us with updated dimensions as the user scrolls
    const thresholds = Array.from({ length: 21 }, (_, i) => i * 0.05);

    const observer = new IntersectionObserver(
      (entries) => {
        let stateChanged = false;

        entries.forEach((entry) => {
          // intersectionRect.height tells us exactly how many physical pixels 
          // of this section are currently painted onto the user's screen.
          const visibleHeight = entry.intersectionRect.height;
          
          if (entry.isIntersecting && visibleHeight > 0) {
            visibleSections.current.set(entry.target.id, visibleHeight);
          } else {
            visibleSections.current.delete(entry.target.id);
          }
          stateChanged = true;
        });

        if (stateChanged) {
          // Iterate through all sections currently on screen and 
          // aggressively pick the one occupying the most vertical space.
          let maxPixelHeight = 0;
          let dominatingSection = "";

          visibleSections.current.forEach((visibleHeight, id) => {
            if (visibleHeight > maxPixelHeight) {
              maxPixelHeight = visibleHeight;
              dominatingSection = id;
            }
          });

          // Special case: if we hit the absolute bottom of the page, forcefully highlight the Contact section.
          // This fixes standard scrollspy bugs where short footers can never "dominate" the viewport.
          const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
          if (isAtBottom && visibleSections.current.has("contact")) {
            dominatingSection = "contact";
          }

          if (dominatingSection && dominatingSection !== activeId) {
            setActiveId(dominatingSection);
          }
        }
      },
      {
        // Account for the fixed navbar depth so it doesn't read elements hidden *behind* the navbar.
        rootMargin: "-96px 0px 0px 0px",
        threshold: thresholds,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, activeId]);

  return activeId;
}
