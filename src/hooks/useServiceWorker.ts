"use client";
import { useEffect } from "react";
import { register } from "@/lib/service-worker";

export function useServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      register();
    }
  }, []);
}
