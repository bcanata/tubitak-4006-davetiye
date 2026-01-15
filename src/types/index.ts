// Global type definitions

export interface TiltState {
  x: number;
  y: number;
}

export interface ShareData {
  title: string;
  text: string;
  url: string;
}

export interface WindowSize {
  width: number;
  height: number;
}

export interface CountdownRenderProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export type SharePlatform = 'whatsapp' | 'twitter' | 'facebook' | 'telegram' | 'copy';

export interface SharePlatformConfig {
  name: string;
  ariaLabel: string;
  getUrl: (url: string, title: string) => string;
}

export type AnimationDuration = number; // milliseconds
export type AnimationState = 'idle' | 'running' | 'completed';
