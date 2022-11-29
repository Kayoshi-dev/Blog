import { createMachine } from "xstate";

const themeMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBcAWYC2YB0AbAllKsgMQAqA8gOJUAyAogPpkAS9AsvQNoAMAuolAAHAPax8yfCIB2gkAA9EAWgBMAGhABPRCoAsARgC+hjWkw4IAQwBOAa3LU6TVh2785o8ZJlzFCVRraCPo8ABzYAKzGJiDSIhBwcmZYHmISUrJICsr6AOy6gYj6AJzGpuhYeITEqV4ZvjkqAGyFwU3F2MX6TT29fe1lIMkWNra16T5Zfvqh+tgAzBHF87kRrXkq2Ab9O6XRQA */
  createMachine({
    predictableActionArguments: true,
    id: "theme",
    initial:
      typeof window !== "undefined"
        ? window.localStorage.getItem("theme") ?? "light"
        : "light",
    states: {
      light: {
        on: {
          TOGGLE_THEME: {
            target: "dark",
          },
        },
      },
      dark: {
        on: {
          TOGGLE_THEME: {
            target: "light",
          },
        },
      },
    },
  });

export default themeMachine;
