"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure that the component is only rendered on the client (after hydration)
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering if the component is not mounted
  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }} // Adjust the duration to control the fade-in speed
    >
      <Button
        variant="outline"
        size="sm"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? (
          <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all text-white" />
        ) : (
          <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all text-black" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
